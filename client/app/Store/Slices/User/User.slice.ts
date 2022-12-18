import { createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'

import { getValueLocalStorage } from '@/utils/localStorage'

import {
	changeFavourites,
	checkAuth,
	editProfile,
	login,
	logout,
	register,
} from './User.action'
import { IInitialState } from './user.interface'

const initialState: IInitialState = {
	user: getValueLocalStorage('user'),
	isLoading: false,
}
export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(login.pending, state => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.user = payload.user
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
			})
			.addCase(logout.pending, state => {
				state.isLoading = true
			})
			.addCase(checkAuth.pending, state => {
				state.isLoading = true
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user
				state.isLoading = false
			})
			.addCase(checkAuth.rejected, state => {
				state.user = null
				state.isLoading = false
			})
			.addCase(changeFavourites.pending, state => {
				state.isLoading = true
			})
			.addCase(changeFavourites.fulfilled, (state, { payload }) => {
				state.user ? (state.user.favourites = [...payload.favourites]) : null
				state.isLoading = false
			})
			.addCase(changeFavourites.rejected, state => {
				state.isLoading = false
			})
			.addCase(editProfile.pending, state => {
				state.isLoading = true
			})
			.addCase(editProfile.rejected, state => {
				state.user = null
				state.isLoading = false
			})
			.addCase(editProfile.fulfilled, (state, { payload }) => {
				state.isLoading = false
				const { _id, ...rest } = payload
				state.user = { ...rest, id: _id }
			})
	},
})
export default userSlice.reducer
