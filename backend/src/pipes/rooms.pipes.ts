import { PipeTransform } from '@nestjs/common'
import { BadRequestException } from '@nestjs/common/exceptions'
import { ArgumentMetadata } from '@nestjs/common/interfaces'
import { CrudRoomDto } from 'src/rooms/dto/crudRoom.dto'
import { reachType, termsType, comfortsType } from '../rooms/rooms.interface'
export class RoomValidate implements PipeTransform {
	transform(value: CrudRoomDto, meta: ArgumentMetadata) {
		if (meta.type !== 'body') return value
		value.comforts &&
			value.comforts.length !== 0 &&
			value.comforts.forEach((comfort: comfortsType) => {
				if (
					comfort !== 'hasWifi' &&
					comfort !== 'hasConditioner' &&
					comfort !== 'hasWorkSpace'
				)
					throw new BadRequestException(
						'Неправильный формат данных в поле "comforts"'
					)
			})
		value.livingСonditions &&
			value.livingСonditions.length !== 0 &&
			value.livingСonditions.forEach((livingСondition: termsType) => {
				if (
					livingСondition !== 'canPets' &&
					livingСondition !== 'canSmoke' &&
					livingСondition !== 'canInvite'
				)
					throw new BadRequestException(
						'Неправильный формат данных в поле "livingСonditions"'
					)
			})
		value.accessibility &&
			value.accessibility.length !== 0 &&
			value.accessibility.forEach((accessibility: reachType) => {
				if (
					accessibility !== 'hasDisabledAssistant' &&
					accessibility !== 'hasWideCorridor'
				)
					throw new BadRequestException(
						'Неправильный формат данных в поле "accessibility"'
					)
			})
		return value
	}
}
