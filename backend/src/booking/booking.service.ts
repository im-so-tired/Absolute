import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from 'typegoose'
import { BookingModel } from './booking.model'
import { BookingDto } from './dto/booking.dto'

@Injectable()
export class BookingService {
	constructor(
		@InjectModel(BookingModel)
		private readonly BookingModel: ModelType<BookingModel>
	) {}
	async getAll() {
		return await this.BookingModel.find()
	}

	async delete(id: string) {
		const deleteDoc = await this.BookingModel.findByIdAndDelete(id).exec()
		if (!deleteDoc) throw new NotFoundException('Book not found')
		return deleteDoc
	}

	async getUserBooking(userId: string) {
		return await this.BookingModel.find({ userId })
	}

	async create(dto: BookingDto) {
		const oldBooking = await this.BookingModel.find({ roomId: dto.roomId })
		if (oldBooking) {
			oldBooking.forEach((booking) => {
				if (booking.dateComing > dto.dateComing) {
					if (dto.dateExit > booking.dateComing) {
						throw new BadRequestException('Номер уже забронирован на эти даты')
					}
				} else {
					if (booking.dateExit > dto.dateComing) {
						throw new BadRequestException('Номер уже забронирован на эти даты')
					}
				}
			})
		}
		const newBooking = new this.BookingModel({
			...dto,
		})
		newBooking.save()
		return newBooking
	}
}
