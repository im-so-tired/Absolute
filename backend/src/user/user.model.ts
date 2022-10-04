import { prop } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
export interface UserModel extends Base {}
export class UserModel extends TimeStamps {
  @prop({ unique: true })
  email: string
  @prop()
  password: string
  @prop({ default: false })
  isAdmin?: boolean
  @prop({ default: [], type: () => [String] })
  favorites?: string[]
  @prop({default:[],type:() => [String]})
  booking?: string[]
}
