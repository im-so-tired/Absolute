import { prop } from '@typegoose/typegoose'
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses'
export type gender = 'female' | 'male'
export interface UserModel extends Base {}
export class UserModel extends TimeStamps {
	@prop({ unique: true, required: true })
	email: string
	@prop()
	password: string
	@prop({ default: false })
	isAdmin?: boolean
	@prop({ default: [], type: () => [String] })
	favorites?: string[]
	@prop()
	firstName: string
	@prop()
	secondName: string
	@prop({ type: () => String })
	gender: gender
	@prop()
	birthYear: number
}
