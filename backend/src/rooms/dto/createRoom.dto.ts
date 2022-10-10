import { IsInt, IsPositive, IsArray } from 'class-validator'

export class createRoomDto {
	@IsInt()
	@IsPositive()
	roomNumber: number
	@IsInt()
	@IsPositive()
	price: number
	@IsArray()
	images: string[]
	@IsArray()
	comforts: string[]
	@IsArray()
	livingСonditions: string[]
	@IsArray()
	accessibility: string[]
}
