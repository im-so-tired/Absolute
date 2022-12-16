import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { ObjectId } from 'mongoose'
import { InjectModel } from 'nestjs-typegoose'
import { IRoom } from 'src/rooms/rooms.interface'
import { RoomsModel } from 'src/rooms/rooms.model'
import { UpdateDto } from './dto/update.dto'
import { UserModel } from './user.model'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>,
		@InjectModel(RoomsModel) private readonly RoomsModel: ModelType<RoomsModel>
	) {}

	async getById(id: string) {
		const user = await this.UserModel.findById(id).select(
			'-password -createdAt -updatedAt -__v'
		)
		if (!user) throw new NotFoundException('User not found!')
		return user
	}

	async update(id: string, dto: UpdateDto) {
		const user = await this.getById(id)
		user.firstName = dto.firstName
		user.secondName = dto.secondName
		user.gender = dto.gender
		user.birthYear = dto.birthYear
		await user.save()
		return user
	}

	async changeFavourite(userId: string, roomId: string) {
		const user = await this.getById(userId)
		await this.getRoomById(roomId)
		const favourites = user.favorites.filter((id) => id === roomId)
		favourites.length
			? (user.favorites = user.favorites.filter((id) => id !== roomId))
			: user.favorites.push(roomId)
		await user.save()
		return { favourites: user.favorites }
	}

	async getRoomById(roomId: string) {
		const room = await this.RoomsModel.findById(roomId).select(
			'-createdAt -updatedAt -__v'
		)
		if (!room) throw new NotFoundException('Комната не найдена')
		return room
	}

	async getFavoritesRooms(dto: string[]) {
		const rooms: RoomsModel[] = await this.RoomsModel.find({
			_id: { $in: dto },
		})
		return rooms
	}
}
