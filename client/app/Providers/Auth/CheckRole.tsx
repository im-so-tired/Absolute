import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { useAppSelector } from '@/hooks/Redux'
import { useAuth } from '@/hooks/useAuth'

import { TypeComponentsAuthFields } from '@/shared/types/auth.types'

const CheckRole: FC<TypeComponentsAuthFields> = ({
	Component: { isOnlyAdmin, isOnlyUser },
	children,
}) => {
	// const user = useAuth()
	const { isLoading, user } = useAppSelector(state => state.user)
	const { pathname, replace, push } = useRouter()
	const Children = () => <>{children}</>
	if (!isLoading) {
		if (user?.isAdmin) return <Children />
		if (isOnlyAdmin) {
			pathname !== '/404' && replace('/404')
			return null
		}
		if (isOnlyUser && !user) {
			pathname !== '/auth/login' && replace('/auth/login')
			return null
		} else return <Children />
	} else {
		return <></>
	}
}

export default CheckRole
