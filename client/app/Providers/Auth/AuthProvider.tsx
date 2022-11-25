import Cookies from 'js-cookie'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import { useUserActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentsAuthFields } from '@/shared/types/auth.types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })
const AuthProvider: FC<TypeComponentsAuthFields> = ({
	children,
	Component: { isOnlyUser, isOnlyAdmin },
}) => {
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
	if (!isOnlyUser && !isOnlyAdmin) return <>{children}</>
	return (
		<DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
			{children}
		</DynamicCheckRole>
	)
}

export default AuthProvider
