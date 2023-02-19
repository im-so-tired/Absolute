import { Type } from 'class-transformer'
import {
	IsInt,
	IsPositive,
	IsArray,
	IsString,
	IsNumber,
	ValidateNested,
} from 'class-validator'
import { MaxCountPeopleValidate } from '../decorators/countPeopleValidate'

import {
	comfortsType,
	reachType,
	roomType,
	termsType,
} from '../rooms.interface'

export class MaxCountPeople {
	@IsNumber()
	@IsInt()
	adults: number
	@IsNumber()
	@IsInt()
	babies: number
}

export class CrudRoomDto {
	@IsInt()
	@IsPositive()
	roomNumber: number
	@IsInt()
	@IsPositive()
	price: number
	@IsArray()
	images: string[]
	@IsArray()
	comforts: comfortsType[]
	@IsArray()
	livingСonditions: termsType[]
	@IsArray()
	accessibility: reachType[]
	@IsString()
	type: roomType
	@Type(() => MaxCountPeople)
	@ValidateNested({ each: true })
	@MaxCountPeopleValidate({
		message:
			'Поле "maxCountPeople" отсутствует или имеет неправильный формат данных',
	})
	maxCountPeople: MaxCountPeople
}
