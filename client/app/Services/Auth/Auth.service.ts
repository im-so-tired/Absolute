import { axiosClassic } from 'Api/intersaptors'
import Cookies from 'js-cookie'

import { getValueLocalStorage } from '@/utils/localStorage'

import { IEmailPassword } from '@/store/Slices/User/user.interface'

import { removeTokens, saveToLs } from './helpers'

export const AuthService = {
	async login(user: IEmailPassword) {
		const { data } = await axiosClassic.post('/auth/login', user)
		if (data.accessToken) {
			saveToLs(data)
		}
		return data
	},

	async register(user: IEmailPassword) {
		const { data } = await axiosClassic.post('/auth/register', user)
		if (data.accessToken) {
			saveToLs(data)
		}
		return data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get('refreshToken')
		const { data } = await axiosClassic.post(
			'/auth/login/accessToken',
			refreshToken,
			{
				headers: {
					'Content-type': 'application/json',
				},
			}
		)
		if (data.accessToken) {
			saveToLs(data)
		}
		return data
	},

	async logout() {
		localStorage.removeItem('user')
		removeTokens()
	},
}
