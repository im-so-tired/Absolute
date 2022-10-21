import { Container } from '@mui/system'
import React, { FC } from 'react'

import ProfileLayout from '@/components/Common/ProfileLayout/ProfileLayout'

import MainForm from './Forms/MainForm'

const MainPage: FC = () => {
	return (
		<ProfileLayout>
			<MainForm />
		</ProfileLayout>
	)
}

export default MainPage
