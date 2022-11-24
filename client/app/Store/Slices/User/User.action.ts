import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { IEditProfile } from '@/shared/types/user'

import { AuthService } from '@/services/Auth/Auth.service'
import { UserService } from '@/services/User.service'

import { toastrError } from '@/utils/toastrError'

import {
	IAuthResponce,
	IEmailPassword,
	IFavourites,
	RegisterData,
	UserState,
} from './user.interface'
import { errorMessage } from '@/helpers/ErrorMessage'

export const register = createAsyncThunk<IAuthResponce, RegisterData>(
	'auth/register',
	async (data: RegisterData, thunkApi) => {
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

export const editProfile = createAsyncThunk<UserState, IEditProfile>(
	'user/profile',
	async (data: IEditProfile, thunkApi) => {
		try {
			const responce = await UserService.editProfile(data)
			toastr.success('Edit data', 'Edit is successfully')
			return responce
		} catch (error) {
			toastrError('Edit error', error)
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

export const changeFavourites = createAsyncThunk<IFavourites, string>(
	'user/favourites',
	async (roomId: string, thunkApi) => {
		try {
			return await UserService.changeFavourites(roomId)
		} catch (error) {
			if (errorMessage(error) === 'Unauthorized') thunkApi.dispatch(logout())
			toastrError('Номер', error)
			throw thunkApi.rejectWithValue(error)
		}
	}
)
