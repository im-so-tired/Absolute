import { prop, getModelForClass } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { comfortsType, IRoom, reachType, termsType } from './rooms.interface'

export interface RoomsModel extends Base {}

export class RoomsModel extends TimeStamps {
	@prop({ unique: true })
	roomNumber: number
	@prop()
	price: number
	@prop({ default: 0 })
	countReviews: number
	@prop({ default: 0 })
	rate: number
	@prop({ default: [], type: () => [String] })
	images: string[]
	@prop({ default: [], type: () => [String] })
	comforts: comfortsType[]
	@prop({ default: [], type: () => [String] })
	livingСonditions: termsType[]
	@prop({ default: [], type: () => [String] })
	accessibility: reachType[]
	@prop({ default: [] })
	bookings: IRoom[]
}
