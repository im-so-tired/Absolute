import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { AuthService } from '@/services/Auth/Auth.service'

import { toastrError } from '@/utils/toastrError'

import { IAuthResponce, IEmailPassword } from './user.interface'

export const register = createAsyncThunk<IAuthResponce, IEmailPassword>(
	'auth/register',
	async (data: IEmailPassword, thunkApi) => {
		try {
			const responce = await AuthService.register(data)
			toastr.success('Register', 'Register is successfully')
			return responce
		} catch (error) {
			toastrError('Auth error', error)
			throw thunkApi.rejectWithValue(error)
		}
	}
)

export const login = createAsyncThunk<IAuthResponce, IEmailPassword>(
	'auth/login',
	async (data: IEmailPassword, thunkApi) => {
		try {
			const responce = await AuthService.login(data)
			toastr.success('Login', 'Login is successfully')
			return responce
		} catch (error) {
			toastrError('Auth error', error)
			throw thunkApi.rejectWithValue(error)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponce>(
	'auth/checkAuth',
	async (_, thunkApi) => {
		try {
			return await AuthService.getNewTokens()
		} catch (error) {
			throw thunkApi.rejectWithValue(error)
		}
	}
)
