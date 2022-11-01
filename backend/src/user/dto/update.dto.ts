import { IsNotEmpty, IsNumber, IsString, Length } from 'class-validator'
import { gender } from '../user.model'

export class UpdateDto {
	@IsString()
	@Length(2)
	firstName: string
	@IsString()
	@Length(2)
	secondName: string
	gender: gender
	@IsNumber()
	@IsNotEmpty()
	birthYear?: number
}

export class RoomId {
	@IsString()
	roomId: string
}
