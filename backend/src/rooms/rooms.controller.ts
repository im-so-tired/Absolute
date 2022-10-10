import {
	Body,
	Controller,
	Delete,
	HttpCode,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common'
import { Roles } from 'src/auth/decorators/roles'
import { RoomValidate } from 'src/pipes/rooms.pipes'
import { CrudRoomDto, UpdateRoomDto } from './dto/CrudRoom.dto'
import { RoomsService } from './rooms.service'

@Controller('rooms')
export class RoomsController {
	constructor(private readonly roomsService: RoomsService) {}

	@Post()
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	@Roles('admin')
	async create(@Body(RoomValidate) dto: CrudRoomDto) {
		return this.roomsService.create(dto)
	}

	@Put(':id')
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	@Roles('admin')
	async update(
		@Body(RoomValidate) dto: UpdateRoomDto,
		@Param('id') id: string
	) {
		return this.roomsService.update(dto, id)
	}

	@Delete(':id')
	@HttpCode(200)
	@Roles('admin')
	async delete(@Param('id') id: string) {
		return this.roomsService.delete(id)
	}
}
