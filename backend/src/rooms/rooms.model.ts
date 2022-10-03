import { prop, getModelForClass } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
import { IRoom } from './rooms.interface'

export interface RoomsModel extends Base {}

export class RoomsModel extends TimeStamps {
  @prop({ unique: true })
  roomNumber: number
  @prop()
  price: number
  @prop()
  countReviews: number
  @prop()
  rate: number
  @prop({default: [], type: () => [String]})
  images: string[]
  @prop({default: [], type: () => [String]})
  comforts: string[]
  @prop({default: [], type: () => [String]})
  livingСonditions: string[]
  @prop({default: [], type: () => [String]})
  accessibility: string[]
  @prop({default: []})
  bookings: IRoom[]
}