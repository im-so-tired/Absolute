import {
	BadRequestException,
	Injectable,
	NotFoundException,
} from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from 'typegoose'
import { CrudRoomDto, UpdateRoomDto } from './dto/CrudRoom.dto'
import { RoomsModel } from './rooms.model'

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

	async byId(id: string) {
		const room = await this.RoomsModel.findById(id)
		if (!room) throw new NotFoundException('Номер не найден')
		return room
	}

	async update(roomDto: UpdateRoomDto, id: string) {
		const oldRoom = await this.RoomsModel.findOne({
			roomNumber: roomDto.roomNumber,
		})
		if (oldRoom && oldRoom._id !== id)
			throw new BadRequestException('Комната с таким номеров уже существует')
		const room = await this.byId(id)
		if (roomDto.roomNumber) room.roomNumber = roomDto.roomNumber
		if (roomDto.images) room.images = roomDto.images
		if (roomDto.price) room.price = roomDto.price
		if (roomDto.comforts) room.comforts = roomDto.comforts
		if (roomDto.accessibility) room.accessibility = roomDto.accessibility
		if (roomDto.livingСonditions)
			room.livingСonditions = roomDto.livingСonditions
		room.save()
		return room
	}

	async delete(id: string) {
		return this.RoomsModel.findByIdAndRemove(id)
	}
}
