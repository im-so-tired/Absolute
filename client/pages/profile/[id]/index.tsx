import React from 'react'

import MainPage from '@/components/Screens/Profile/MainPage'

import { NextPageAuth } from '@/shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
	return <MainPage />
}
ProfilePage.isOnlyUser = true
export default ProfilePage
