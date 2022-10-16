import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { getMongoConfig } from './config/mongo.config'
import { AuthModule } from './auth/auth.module'

import { RoomsModule } from './rooms/rooms.module'
import { UserModule } from './user/user.module'
import { BookingModule } from './booking/booking.module'

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		RoomsModule,
		UserModule,
		BookingModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
