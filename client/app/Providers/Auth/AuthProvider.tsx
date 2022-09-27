import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'

import { useUserActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { getValueLocalStorage } from '@/utils/localStorage'

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	const { logout, checkAuth } = useUserActions()
	const { pathname } = useRouter()
	const user = useAuth()
	useEffect(() => {
		const accessToken = Cookies.get('accessToken')
		if (accessToken) checkAuth()
	}, [])
	useEffect(() => {
		const refreshToken = Cookies.get('refreshToken')
		if (!refreshToken || !user) logout()
	}, [pathname])
	return <>{children}</>
}

export default AuthProvider
