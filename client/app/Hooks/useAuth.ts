import { useEffect, useState } from 'react'

import { UserState } from '@/store/Slices/User/user.interface'

import { useAppSelector } from './Redux'

export const useAuth = () => {
	const [currentUser, setCurrentUser] = useState<UserState | null>()
	const user = useAppSelector(state => state.user.user)

	useEffect(() => {
		setCurrentUser(user)
	}, [user])
	return currentUser
}
