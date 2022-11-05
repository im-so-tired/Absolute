import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { ReviewsController } from './reviews.controller'
import { ReviewsModel } from './reviews.model'
import { ReviewsService } from './reviews.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: ReviewsModel,
				schemaOptions: {
					collection: 'reviews',
				},
			},
		]),
	],
	controllers: [ReviewsController],
	providers: [ReviewsService],
})
export class ReviewsModule {}
