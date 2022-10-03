import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { RoomsModel } from './rooms.model';

@Module({
  imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: RoomsModel,
				schemaOptions: {
					collection: 'rooms',
				},
			}
		])
	],
  providers: [RoomsService],
  controllers: [RoomsController]
})
export class RoomsModule {}
