export interface IRoom {
	userId: string
	dateComing: number
	dateExit: number
	countAdults: number
	countBabies: number
}
export type comfortsType = 'hasWifi' | 'hasConditioner' | 'hasWorkSpace'
export type termsType = 'canPets' | 'canSmoke' | 'canInvite'
export type reachType = 'hasWideCorridor' | 'hasDisabledAssistant'

export type roomType = 'Standart' | 'Lux'

export interface IQueryFilter {
	arrivalDate?: number
	departureDate?: number
	price?: number[]
	comforts?: comfortsType[]
	livingСonditions?: termsType[]
	accessibility?: reachType[]
	type?: roomType
	adults?: number
	babies?: number
}
