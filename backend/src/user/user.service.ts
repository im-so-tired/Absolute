import { Injectable, NotFoundException } from '@nestjs/common'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { UpdateDto } from './dto/update.dto'
import { UserModel } from './user.model'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly UserModel: ModelType<UserModel>
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
}
