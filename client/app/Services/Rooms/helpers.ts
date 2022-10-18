import { useAppSelector } from '@/hooks/Redux'

import {
	IMainFormValue,
	comfortsType,
	reachType,
	termsType,
} from '@/store/Slices/MainForm/MainForm.interface'

interface IQueryFilter {
	arrivalDate?: number
	departureDate?: number
	price?: number[]
	comforts?: comfortsType[]
	livingСonditions?: termsType[]
	accessibility?: reachType[]
	adults?: number
	babies?: number
}
export const convertParams = (formState: IMainFormValue) => {
	const query: IQueryFilter = {
		...formState,
		adults: formState.countPeople[0].count + formState.countPeople[1].count,
		babies: formState.countPeople[2].count,
	}

	return query
}
