import { PayloadAction } from '@reduxjs/toolkit'
import { getUnixTime } from 'date-fns'

import { initialState } from './InitialState'
import {
	IMainFormValue,
	comfortsType,
	reachType,
	termsType,
} from './MainForm.interface'

export const addHumanAction = (
	state: IMainFormValue,
	action: PayloadAction<string>
) => {
	state.countPeople = state.countPeople.map(item => {
		if (item.type === action.payload && item.count < 10) {
			item.count++
		}
		return item
	})
}

export const removeHumanAction = (
	state: IMainFormValue,
	action: PayloadAction<string>
) => {
	state.countPeople = state.countPeople.map(item => {
		let minPeople = 0
		if (action.payload === 'Взрослые') minPeople++
		if (item.type === action.payload && item.count > minPeople) {
			item.count--
		}
		return item
	})
}
export const changeDateComingAction = (
	state: IMainFormValue,
	action: PayloadAction<Date | number | null>
) => {
	if (!action.payload) return
	const result =
		typeof action.payload !== 'number'
			? getUnixTime(action.payload)
			: action.payload
	state.date.dateComing = result
}
export const changeDateExitAction = (
	state: IMainFormValue,
	action: PayloadAction<Date | number | null>
) => {
	if (!action.payload) return
	const result =
		typeof action.payload !== 'number'
			? getUnixTime(action.payload)
			: action.payload
	state.date.dateExit = result
}
export const resetDataAction = (state: IMainFormValue) => {
	state.countPeople = initialState.countPeople
	state.date = initialState.date
	state.priceRange = initialState.priceRange
	state.comforts = []
	state.reach = []
	state.terms = []
}

export const changePriceRangeAction = (
	state: IMainFormValue,
	action: PayloadAction<number | number[]>
) => {
	state.priceRange = action.payload as number[]
}

export const changeComfortsAction = (
	state: IMainFormValue,
	action: PayloadAction<comfortsType>
) => {
	const index = state.comforts.findIndex(item => item === action.payload)
	index === -1
		? state.comforts.push(action.payload)
		: state.comforts.splice(index, 1)
}

export const changeTermsAction = (
	state: IMainFormValue,
	action: PayloadAction<termsType>
) => {
	const index = state.terms.findIndex(item => item === action.payload)
	index === -1 ? state.terms.push(action.payload) : state.terms.splice(index, 1)
}

export const changeReachAction = (
	state: IMainFormValue,
	action: PayloadAction<reachType>
) => {
	const index = state.reach.findIndex(item => item === action.payload)
	index === -1 ? state.reach.push(action.payload) : state.reach.splice(index, 1)
}
