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
import { User } from 'src/user/decorators/user.decorator'
import { CrudRoomDto } from './dto/crudRoom.dto'
import { IQueryFilter } from './rooms.interface'
import { RoomsService } from './rooms.service'

@Controller('rooms')
export class RoomsController {
	constructor(private readonly roomsService: RoomsService) {}

	@Get()
	@HttpCode(200)
	async getAllWithQuery(@Query() query: IQueryFilter) {
		return this.roomsService.getAllWithQuery(query)
	}

	@Get('all')
	@HttpCode(200)
	async getAll() {
		return this.roomsService.getAll()
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

	@Post('booking:id')
	@HttpCode(200)
	@UsePipes(new ValidationPipe())
	@Roles()
	async booking() {}

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

	@Get('favourites')
	@Roles()
	async getFavouritesRoom(@User('favorites') dto: string[]) {
		return this.roomsService.getFavouritesRooms(dto)
	}
}
