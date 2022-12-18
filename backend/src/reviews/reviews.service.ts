import {
	BadRequestException,
	ForbiddenException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import mongoose, { ObjectId } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { RoomsService } from 'src/rooms/rooms.service'
import { UserService } from 'src/user/user.service'
import { ModelType } from 'typegoose'
import { createReviewsDto } from './reviews.dto'
import { ReviewsModel } from './reviews.model'

@Injectable()
export class ReviewsService {
	constructor(
		@InjectModel(ReviewsModel)
		private readonly ReviewsModel: ModelType<ReviewsModel>,
		private readonly roomsService: RoomsService,
		private readonly userService: UserService
	) {}

	async leave(comment: createReviewsDto, userId: ObjectId) {
		if (!mongoose.Types.ObjectId.isValid(comment.roomId))
			throw new BadRequestException('Неправильный формат id')
		await this.roomsService.byId(comment.roomId)
		const newComment = new this.ReviewsModel({
			...comment,
			userId,
			lastUpdate: Date.now(),
		})
		newComment.save()

		const room = await this.roomsService.byId(comment.roomId)
		await this.roomsService.countReviewsHandler(comment.roomId, 1)
		const roomComments = await this.getRoomReviews(comment.roomId)
		room.rate = Number(
			(
				roomComments.reduce((sumRate, comment) => sumRate + comment.rating, 0) /
				roomComments.length
			).toFixed(1)
		)
		room.save()
		return newComment
	}

	async getOne(id: string) {
		const comment = await this.ReviewsModel.findById(id)
		if (!comment) throw new NotFoundException('Комментарий не найден')
		return comment
	}

	async getFavorites(userId: string) {
		const comments = await this.ReviewsModel.find({ likes: { $all: [userId] } })
		return comments
	}

	async delete(id: string) {
		const comment = await this.getOne(id)
		const user = await this.userService.getById(comment.userId)
		if (user.id !== comment.userId && !user.isAdmin)
			throw new ForbiddenException('Вы не можете удалить этот комментарий')
		const deletedComment = await this.ReviewsModel.findByIdAndDelete(id)
		const room = await this.roomsService.byId(comment.roomId)
		const roomComments = await this.getRoomReviews(comment.roomId)
		roomComments.length
			? (room.rate = Number(
					(
						roomComments.reduce(
							(sumRate, comment) => sumRate + comment.rating,
							0
						) / roomComments.length
					).toFixed(1)
			  ))
			: (room.rate = 0)
		room.save()
		await this.roomsService.countReviewsHandler(comment.roomId, -1)
		return deletedComment
	}

	async update(message: string, id: string, userId: string) {
		const comment = await this.getOne(id)
		if (comment.userId !== String(userId))
			throw new BadRequestException(
				'У вас нет прав на редактирование этого комментария'
			)
		comment.message = message
		comment.lastUpdate = Date.now()
		comment.save()
		return comment
	}

	async getUserReviews(userId: string) {
		return this.ReviewsModel.find({ userId: userId })
	}

	async getRoomReviews(roomId: string) {
		await this.roomsService.byId(roomId)
		return this.ReviewsModel.find({ roomId })
	}

	async likesHandler(id: string, userId: string) {
		const comment = await this.getOne(id)
		this.userService.getById(userId)
		comment.likes.includes(userId)
			? (comment.likes = comment.likes.filter(
					(id) => String(id) !== String(userId)
			  ))
			: comment.likes.push(userId)
		comment.save()
		return comment.likes
	}
}
