import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from 'typegoose'
import { CrudRoomDto } from './dto/CrudRoom.dto'
import { IQueryFilter } from './rooms.interface'
import { RoomsModel } from './rooms.model'
import { parametrHandler } from './utils/parametrHandler'

@Injectable()
export class RoomsService {
	constructor(
		@InjectModel(RoomsModel) private readonly RoomsModel: ModelType<RoomsModel>
	) {}

	async create(room: CrudRoomDto) {
		const oldRoom = await this.RoomsModel.findOne({
			roomNumber: room.roomNumber,
		})
		if (oldRoom)
			throw new BadRequestException('Комната с таким номеров уже существует')
		const newRoom = new this.RoomsModel({
			...room,
		})
		newRoom.save()
		return newRoom
	}

	async getAll(query: IQueryFilter) {
		const rooms = await this.RoomsModel.find(parametrHandler(query))
		return rooms
	}

	async byId(id: string) {
		const room = await this.RoomsModel.findById(id)
		if (!room) throw new NotFoundException('Номер не найден')
		return room
	}

	async update(roomDto: CrudRoomDto, id: string) {
		const oldRoom = await this.RoomsModel.findOne({
			roomNumber: roomDto.roomNumber,
		})
		if (oldRoom && String(oldRoom._id) !== id)
			throw new BadRequestException('Комната с таким номеров уже существует')
		const room = await this.byId(id)
		room.roomNumber = roomDto.roomNumber
		room.images = roomDto.images
		room.price = roomDto.price
		room.comforts = roomDto.comforts
		room.accessibility = roomDto.accessibility
		room.livingСonditions = roomDto.livingСonditions
		room.type = roomDto.type
		room.maxCountPeople = roomDto.maxCountPeople
		room.save()
		return room
	}

	async delete(id: string) {
		return this.RoomsModel.findByIdAndRemove(id)
	}
}
function eq(
	arg0: string,
	arg1: string
): import('mongoose').FilterQuery<
	import('typegoose').InstanceType<RoomsModel>
> {
	throw new Error('Function not implemented.')
}
