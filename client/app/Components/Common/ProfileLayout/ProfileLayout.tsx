import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren, useEffect } from 'react'

import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'
import { useAuthRedirect } from '@/components/Screens/Auth/useAuthRedirect'

import { useAuth } from '@/hooks/useAuth'

import Sidebar from '../Sidebar/Sidebar'

import styles from './ProfileLayout.module.scss'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	// const user = useAuth()
	// const router = useRouter()
	// useEffect(() => {
	// 	if (!user) {
	// 		router.push('/auth/login')
	// 	}
	// }, [user])
	return (
		<div className={styles.layout}>
			<Container>
				<div className={styles['bread-crumbs']}>
					<Breadcrumbs />
				</div>
				<div className={styles.content}>
					<Sidebar />
					{children}
				</div>
			</Container>
		</div>
	)
}

export default ProfileLayout
