export interface IRoom {
	userId: string
	dateComing: number
	dateExit: number
	countAdults: number
	counеBabies: number
}
export type comfortsType = 'hasWifi' | 'hasConditioner' | 'hasWorkSpace'
export type termsType = 'canPets' | 'canSmoke' | 'canInvite'
export type reachType = 'hasWideCorridor' | 'hasDisabledAssistant'
