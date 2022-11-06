import {
	ArgumentMetadata,
	BadRequestException,
	PipeTransform,
} from '@nestjs/common'
import mongoose from 'mongoose'

export class IdValidate implements PipeTransform {
	transform(value: string, meta: ArgumentMetadata) {
		if (meta.type !== 'param' && meta.type !== 'body') return value
		if (!mongoose.Types.ObjectId.isValid(value))
			throw new BadRequestException('Неправильный формат id')
		return value
	}
}
