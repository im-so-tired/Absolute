import { createSlice } from '@reduxjs/toolkit'

import { getValueLocalStorage } from '@/utils/localStorage'

import { checkAuth, login, logout, register } from './User.action'
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
	},
})
export default userSlice.reducer
