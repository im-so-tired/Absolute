import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'
export interface ReviewsModel extends Base {}
export class ReviewsModel extends TimeStamps {
	@prop()
	userId: string
	@prop()
	roomId: string
	@prop()
	message: string
	@prop()
	rating: number
	@prop({ default: [] })
	likes: string[]
	@prop()
	lastUpdate: number
}
