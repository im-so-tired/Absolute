import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
import { prop } from 'typegoose'
export interface ReviewsModel extends Base {}
export class ReviewsModel extends TimeStamps {
	@prop()
	userId: string
	@prop()
	roomId: string
	@prop()
	message: string
	@prop({ default: 5 })
	rating: number
	@prop({ default: 0 })
	countLikes: number
}
