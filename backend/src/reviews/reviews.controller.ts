import {
	Body,
	Controller,
	Delete,
	HttpCode,
	Post,
	ValidationPipe,
} from '@nestjs/common'
import { Get, Param, Put, Query, UsePipes } from '@nestjs/common/decorators'
import { ObjectId } from 'mongoose'
import { Roles } from 'src/auth/decorators/roles'
import { IdValidate } from 'src/pipes/objectId.pipes'
import { RoomsService } from 'src/rooms/rooms.service'
import { User } from 'src/user/decorators/user.decorator'
import { createReviewsDto, updateReviewsDto } from './reviews.dto'
import { ReviewsService } from './reviews.service'

@Controller('reviews')
export class ReviewsController {
	constructor(
		private readonly reviewsService: ReviewsService,
		private readonly roomsService: RoomsService
	) {}

	@Post()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	@Roles()
	async createReviews(
		@Body() dto: createReviewsDto,
		@User('_id') userId: ObjectId
	) {
		return this.reviewsService.leave(dto, userId)
	}

	@Delete(':id')
	@Roles()
	async deleteComment(@Param('id', IdValidate) id: string) {
		return this.reviewsService.delete(id)
	}

	@Put(':id')
	@Roles()
	@UsePipes(new ValidationPipe())
	async updateComment(
		@Param('id', IdValidate) id: string,
		@Body() dto: updateReviewsDto
	) {
		return this.reviewsService.update(dto.message, id)
	}

	@Get('user')
	@Roles()
	async userReviews(@User('_id') userId: string) {
		return this.reviewsService.getUserReviews(userId)
	}

	@Get('room/:id')
	async roomReviews(@Param('id', IdValidate) id: string) {
		return this.reviewsService.getRoomReviews(id)
	}

	@Get(':id')
	async getOneComment(@Param('id', IdValidate) id: string) {
		return this.reviewsService.getOne(id)
	}
}