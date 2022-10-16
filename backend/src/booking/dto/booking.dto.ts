import { IsInt, IsMongoId, IsNumber } from 'class-validator'

export class BookingDto {
	@IsMongoId()
	userId: string
	@IsMongoId()
	roomId: string
	@IsNumber()
	@IsInt()
	dateComing: number
	@IsNumber()
	@IsInt()
	dateExit: number
	@IsNumber()
	@IsInt()
	adults: number
	babies?: number
	@IsNumber()
	totalPrice: number
}
