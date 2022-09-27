import DateFnsAdapter from '@date-io/date-fns'
import { addDays } from 'date-fns'

import { arrayTypePeople } from '@/utils/constants'

import { IMainFormValue } from './MainForm.interface'

const dateFns = new DateFnsAdapter()
export const initialState: IMainFormValue = {
	date: {
		dateComing: dateFns.date(Date.now()),
		dateExit: addDays(dateFns.date(Date.now()), 1),
	},
	countPeople: arrayTypePeople,
	priceRange: [0, 15000],
	comforts: [],
	terms: [],
	reach: [],
}
