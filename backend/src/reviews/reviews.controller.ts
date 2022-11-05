import { Controller, HttpCode, Post } from '@nestjs/common'
import { createReviewsDto } from './reviews.dto'

@Controller('reviews')
export class ReviewsController {
	@Post()
	@HttpCode(200)
	async createReviews(dto: createReviewsDto) {}
}
