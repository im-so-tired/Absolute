import Cookies from 'js-cookie'

import { IAuthResponce, ITokens } from '@/store/Slices/User/user.interface'

export const saveTokens = ({ accessToken, refreshToken }: ITokens) => {
	Cookies.set('accessToken', accessToken)
	Cookies.set('refreshToken', refreshToken)
}

export const removeTokens = () => {
	Cookies.remove('accessToken')
	Cookies.remove('refreshToken')
}

export const saveToLs = (data: IAuthResponce) => {
	saveTokens(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
