import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from 'typegoose'
import { createRoomDto } from './dto/createRoom.dto'
import { RoomsModel } from './rooms.model'

@Injectable()
export class RoomsService {
	constructor(
		@InjectModel(RoomsModel) private readonly RoomsModel: ModelType<RoomsModel>
	) {}
	async create(room: createRoomDto) {}
}
