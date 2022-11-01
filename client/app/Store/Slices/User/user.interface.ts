import { genderType } from '@/shared/types/user'

export interface IFavourites {
	favourites: string[]
}

export interface ITokens {
	refreshToken: string
	accessToken: string
}
export interface IEmailPassword {
	email: string
	password: string
}
export interface UserState {
	email: string
	id: string
	isAdmin: boolean
	firstName: string
	secondName: string
	birthYear: number
	gender: genderType
	favourites: string[]
}
export interface RegisterData extends IEmailPassword {
	firstName: string
	secondName: string
	birthYear: number
	gender: genderType
}

export interface IAuthResponce extends ITokens {
	user: UserState
}
export interface IInitialState {
	user: UserState | null
	isLoading: boolean
}
