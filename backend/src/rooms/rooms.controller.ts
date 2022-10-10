import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { ValidationTypes } from 'class-validator'
import { createRoomDto } from './dto/createRoom.dto'
import { RoomsService } from './rooms.service'

@Controller('rooms')
export class RoomsController {
	constructor(private readonly roomsService: RoomsService) {}
	@Post()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	async create(@Body() dto: createRoomDto) {
		return this.roomsService.create(dto)
	}
}
