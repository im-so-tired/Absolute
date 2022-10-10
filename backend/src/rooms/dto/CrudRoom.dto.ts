import { IsInt, IsPositive, IsArray } from 'class-validator'
import { comfortsType, reachType, termsType } from '../rooms.interface'

export class CrudRoomDto {
	@IsInt()
	@IsPositive()
	roomNumber: number
	@IsInt()
	@IsPositive()
	price: number
	@IsArray()
	images: string[]
	@IsArray()
	comforts?: comfortsType[]
	@IsArray()
	livingСonditions?: termsType[]
	@IsArray()
	accessibility?: reachType[]
}

export class UpdateRoomDto {
	roomNumber?: number
	price?: number
	images?: string[]
	comforts?: comfortsType[]
	livingСonditions?: termsType[]
	accessibility?: reachType[]
}
