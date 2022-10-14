import { Container } from '@mui/system'
import React, { FC } from 'react'

import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'
import ProfileLayout from '@/components/Common/ProfileLayout/ProfileLayout'

import { useAuth } from '@/hooks/useAuth'

const Profile: FC = () => {
	const user = useAuth()
	return <ProfileLayout />
}

export default Profile
