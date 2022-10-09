import { ICountPeople } from '@/shared/types/countPeople'

interface IDateOfStay {
	dateComing: number | null
	dateExit: number | null
}

export type comfortsType = 'hasWifi' | 'hasConditioner' | 'hasWorkSpace'
export type termsType = 'canPets' | 'canSmoke' | 'canInvite'
export type reachType = 'hasWideCorridor' | 'hasDisabledAssistant'
export interface IMainFormValue {
	date: IDateOfStay
	countPeople: ICountPeople[]
	priceRange: number[]
	comforts: comfortsType[]
	terms: termsType[]
	reach: reachType[]
}
