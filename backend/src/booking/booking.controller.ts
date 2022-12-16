import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Roles } from 'src/auth/decorators/roles'
import { BookingService } from './booking.service'
import { BookingDto } from './dto/booking.dto'

@Controller('booking')
export class BookingController {
	constructor(private readonly bookingService: BookingService) {}
	@Get()
	@HttpCode(200)
	@Roles('admin')
	async getAll() {
		return this.bookingService.getAll()
	}

	@Get(':id')
	@HttpCode(200)
	@Roles()
	async getUserBooking(@Param('id') userId: string) {
		return this.bookingService.getUserBooking(userId)
	}

	@Post()
	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Roles()
	async create(@Body() dto: BookingDto) {
		return this.bookingService.create(dto)
	}

	@Delete(':id')
	@Roles('admin')
	async delete(@Param('id') bookId: string) {
		return this.bookingService.delete(bookId)
	}
}
