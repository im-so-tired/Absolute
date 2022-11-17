import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { RoomsModule } from 'src/rooms/rooms.module'
import { RoomsService } from 'src/rooms/rooms.service'
import { UserModule } from 'src/user/user.module'
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
		RoomsModule,
		UserModule,
	],
	controllers: [ReviewsController],
	providers: [ReviewsService],
})
export class ReviewsModule {}
