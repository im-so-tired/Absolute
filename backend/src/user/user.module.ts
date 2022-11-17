import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from './user.model'
import { ConfigModule } from '@nestjs/config'
import { AuthService } from 'src/auth/auth.service'
import { RoomsModel } from 'src/rooms/rooms.model'

@Module({
	providers: [UserService],
	controllers: [UserController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: UserModel,
				schemaOptions: {
					collection: 'User',
				},
			},
			{
				typegooseClass: RoomsModel,
				schemaOptions: {
					collection: 'rooms',
				},
			},
		]),
		ConfigModule,
	],
	exports: [UserService],
})
export class UserModule {}
