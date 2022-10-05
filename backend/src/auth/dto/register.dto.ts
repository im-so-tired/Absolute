import {
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsString,
	Length,
	MinLength,
} from 'class-validator'

export class Register {
	@IsString({
		message: 'Email must be string',
	})
	@IsEmail()
	email: string
	@MinLength(6, {
		message: 'Password cannot be less than 6 characters',
	})
	@IsString()
	password: string
	@IsString()
	@Length(2)
	firstName: string
	@IsString()
	@Length(2)
	secondName: string
	@IsString()
	gender: 'female' | 'male'
	@IsNumber()
	@IsNotEmpty()
	birthYear: number
}
