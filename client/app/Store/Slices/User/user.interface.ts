export interface ITokens {
	refreshToken: string
	accessToken: string
}
export interface IEmailPassword {
	email: string
	password: string
}
export interface userState {
	email: string
	id: string
	isAdmin: boolean
}
export interface IAuthResponce extends ITokens {
	user: userState
}
export interface IInitialState {
	user: userState | null
	isLoading: boolean
}
