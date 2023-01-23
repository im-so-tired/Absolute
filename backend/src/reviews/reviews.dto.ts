import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator'

export class createReviewsDto {
	@IsString()
	@IsNotEmpty()
	roomId: string
	@IsString()
	message: string
	@IsInt()
	@IsPositive()
	rating: number
}

export class updateReviewsDto {
	@IsString()
	@IsNotEmpty()
	message: string
}
