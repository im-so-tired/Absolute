export interface IUser {
	_id: string
	email: string
	password: string
	createdAt: string
}
export type genderType = 'female' | 'male'

export interface IEditProfile {
	firstName: string
	secondName: string
	birthYear: number
	gender: genderType
}
