import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren, useEffect } from 'react'

import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'

import { useAuth } from '@/hooks/useAuth'

import Sidebar from '../Sidebar/Sidebar'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	const user = useAuth()
	const router = useRouter()
	useEffect(() => {
		if (!user) {
			router.push('/auth/login')
		}
	}, [user])
	return (
		<>
			{
				<div className="mt-4">
					<Container>
						<Breadcrumbs />
						<Sidebar />
						{children}
					</Container>
				</div>
			}
		</>
	)
}

export default ProfileLayout
