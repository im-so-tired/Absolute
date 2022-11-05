import { IsInt, IsPositive, IsString } from 'class-validator'

export class createReviewsDto {
	@IsString()
	userId: string
	@IsString()
	roomId: string
	@IsString()
	message: string
	@IsInt()
	@IsPositive()
	rating: number
	@IsInt()
	@IsPositive()
	countLikes: number
}
