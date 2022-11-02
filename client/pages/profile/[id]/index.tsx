import { useRouter } from 'next/router'
import React from 'react'

import { useAuthRedirect } from '@/components/Screens/Auth/useAuthRedirect'
import MainPage from '@/components/Screens/Profile/MainPage'

import { useAuth } from '@/hooks/useAuth'

const ProfilePage = () => {
	const { query } = useRouter()
	return query && <MainPage />
}

export default ProfilePage
