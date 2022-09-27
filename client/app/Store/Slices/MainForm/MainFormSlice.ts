import { createSlice } from '@reduxjs/toolkit'

import { initialState } from './InitialState'
import {
	addHumanAction,
	changeComfortsAction,
	changeDateComingAction,
	changeDateExitAction,
	changePriceRangeAction,
	changeReachAction,
	changeTermsAction,
	removeHumanAction,
	resetDataAction,
} from './MainForm.action'

export const mainFormSlice = createSlice({
	name: 'homeFormSlice',
	initialState,
	reducers: {
		addHuman: addHumanAction,
		removeHuman: removeHumanAction,
		changeDateComing: changeDateComingAction,
		changeDateExit: changeDateExitAction,
		resetData: resetDataAction,
		changePriceRange: changePriceRangeAction,
		changeComforts: changeComfortsAction,
		changeTerms: changeTermsAction,
		changeReach: changeReachAction,
	},
})
export default mainFormSlice.reducer
export const {
	addHuman,
	removeHuman,
	changeDateComing,
	changeDateExit,
	resetData,
	changePriceRange,
	changeComforts,
	changeTerms,
	changeReach,
} = mainFormSlice.actions
