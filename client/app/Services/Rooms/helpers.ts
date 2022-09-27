import { IMainFormValue } from '@/store/Slices/MainForm/MainForm.interface'

interface IQuery {
	price?: number[]
	children?: number
	adults?: number
	babies?: number
	hasWifi?: boolean
	hasConditioner?: boolean
	hasWorkSpace?: boolean
	canPets?: boolean
	canSmoke?: boolean
	canInvite?: boolean
	hasWideCorridor?: boolean
	hasDisabledAssistant?: boolean
}
export const convertParams = (formValue: IMainFormValue) => {
	const query: IQuery = {
		price: formValue.priceRange,
		children: formValue.countPeople[1].count,
		adults: formValue.countPeople[0].count,
		babies: formValue.countPeople[2].count,
	}
	formValue.comforts.length &&
		formValue.comforts.forEach(comfort => (query[comfort] = true))
	formValue.terms.length &&
		formValue.terms.forEach(comfort => (query[comfort] = true))
	formValue.reach.length &&
		formValue.reach.forEach(comfort => (query[comfort] = true))
	return query
}
