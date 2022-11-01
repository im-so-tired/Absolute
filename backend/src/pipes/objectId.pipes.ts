import {
	ArgumentMetadata,
	BadRequestException,
	PipeTransform,
} from '@nestjs/common'
import mongoose from 'mongoose'
import { RoomId } from 'src/user/dto/update.dto'

export class IdValidate implements PipeTransform {
	transform(value: RoomId, meta: ArgumentMetadata) {
		if (meta.type !== 'body') return value
		if (!mongoose.Types.ObjectId.isValid(value.roomId))
			throw new BadRequestException('Неправильный формат id')
		return value
	}
}
