import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { BookingController } from './booking.controller'
import { BookingModel } from './booking.model'
import { BookingService } from './booking.service'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: BookingModel,
				schemaOptions: {
					collection: 'booking',
				},
			},
		]),
	],
	controllers: [BookingController],
	providers: [BookingService],
})
export class BookingModule {}
