import { BadRequestException, Injectable } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common'
import mongoose, { ObjectId } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { RoomsService } from 'src/rooms/rooms.service'
import { ModelType } from 'typegoose'
import { createReviewsDto } from './reviews.dto'
import { ReviewsModel } from './reviews.model'

@Injectable()
export class ReviewsService {
	constructor(
		@InjectModel(ReviewsModel)
		private readonly ReviewsModel: ModelType<ReviewsModel>,
		private readonly roomsService: RoomsService
	) {}
	async leave(comment: createReviewsDto, userId: ObjectId) {
		if (!mongoose.Types.ObjectId.isValid(comment.roomId))
			throw new BadRequestException('Неправильный формат id')
		await this.roomsService.byId(comment.roomId)
		const newComment = new this.ReviewsModel({ ...comment, userId })
		newComment.save()
		return newComment
	}

	async getOne(id: string) {
		const comment = await this.ReviewsModel.findById(id)
		if (!comment) throw new NotFoundException('Комментарий не найден')
		return comment
	}

	async delete(id: string) {
		await this.getOne(id)
		const deletedComment = await this.ReviewsModel.findByIdAndDelete(id)
		return deletedComment
	}

	async update(message: string, id: string) {
		const comment = await this.getOne(id)
		comment.message = message
		comment.save()
		return comment
	}

	async getUserReviews(userId: string) {
		const comments = await this.ReviewsModel.find({ userId: userId })
		return comments
	}

	async getRoomReviews(roomId: string) {
		await this.roomsService.byId(roomId)
		const comments = await this.ReviewsModel.find({ roomId })
		return comments
	}
}
