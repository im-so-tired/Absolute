import DateFnsAdapter from '@date-io/date-fns'
import { addDays, getUnixTime } from 'date-fns'

import { arrayTypePeople } from '@/utils/constants'

import { IMainFormValue } from './MainForm.interface'

const dateFns = new DateFnsAdapter()
export const initialState: IMainFormValue = {
	date: {
		dateComing: getUnixTime(dateFns.date(Date.now())),
		dateExit: getUnixTime(addDays(dateFns.date(Date.now()), 1)),
	},
	countPeople: arrayTypePeople,
	priceRange: [0, 50000],
	comforts: [],
	terms: [],
	reach: [],
}
