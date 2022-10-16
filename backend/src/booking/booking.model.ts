import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface BookingModel extends Base {}
export class BookingModel extends TimeStamps {
	@prop()
	userId: string
	@prop()
	roomId: string
	@prop()
	dateComing: number
	@prop()
	dateExit: number
	@prop({ default: 1 })
	adults: number
	@prop({ default: 0 })
	babies: number
	@prop()
	totalPrice: number
}
