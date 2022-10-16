import {
	registerDecorator,
	ValidationOptions,
	ValidationArguments,
	isObject,
	isNumber,
} from 'class-validator'
import { MaxCountPeople } from '../dto/crudRoom.dto'

export function MaxCountPeopleValidate(validationOptions?: ValidationOptions) {
	return (object: any, propertyName: string) => {
		registerDecorator({
			name: 'IsNonPrimitiveArray',
			target: object.constructor,
			propertyName,
			constraints: [],
			options: validationOptions,
			validator: {
				validate(value: MaxCountPeople, args: ValidationArguments) {
					return (
						isObject(value) && isNumber(value.adults) && isNumber(value.babies)
					)
				},
			},
		})
	}
}
