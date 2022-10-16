import { prop, getModelForClass, Ref } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import {
	comfortsType,
	IRoom,
	reachType,
	roomType,
	termsType,
} from './rooms.interface'

export interface RoomsModel extends Base {}

interface maxCountPeople {
	adults: number
	babies: number
}

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
	@prop({ default: 'Standart' })
	type: roomType
	@prop()
	maxCountPeople: maxCountPeople
}
