import {
	Body,
	Controller,
	Delete,
	Get,
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
import { CrudRoomDto } from './dto/CrudRoom.dto'
import { IQueryFilter } from './rooms.interface'
import { RoomsService } from './rooms.service'

@Controller('rooms')
export class RoomsController {
	constructor(private readonly roomsService: RoomsService) {}

	@Get()
	@HttpCode(200)
	async getAll(@Query() query: IQueryFilter) {
		return this.roomsService.getAll(query)
	}

	@Get(':id')
	@HttpCode(200)
	async byId(@Param('id') id: string) {
		return this.roomsService.byId(id)
	}

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
	async update(@Body(RoomValidate) dto: CrudRoomDto, @Param('id') id: string) {
		return this.roomsService.update(dto, id)
	}

	@Delete(':id')
	@HttpCode(200)
	@Roles('admin')
	async delete(@Param('id') id: string) {
		return this.roomsService.delete(id)
	}
}
