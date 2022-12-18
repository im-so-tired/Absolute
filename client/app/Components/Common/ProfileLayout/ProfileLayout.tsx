import { Container } from '@mui/system'
import { useRouter } from 'next/router'
import React, { FC, PropsWithChildren, useEffect, useState } from 'react'

import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'

import { useAppSelector } from '@/hooks/Redux'
import { useAuth } from '@/hooks/useAuth'

import Sidebar from '../Sidebar/Sidebar'

import styles from './ProfileLayout.module.scss'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	const { isLoading, user } = useAppSelector(state => state.user)
	// const [user, setUser] = useState<any>(null)
	// useEffect(() => {
	// 	setUser(currentUser)
	// }, [currentUser])
	return !isLoading ? (
		<div className={styles.layout}>
			<Container>
				<div className={styles['bread-crumbs']}>
					<Breadcrumbs />
				</div>
				<div className={styles.content}>
					<Sidebar user={user} />
					{children}
				</div>
			</Container>
		</div>
	) : (
		<div className="mx-auto my-auto text-lg">Loading...</div>
	)
}

export default ProfileLayout
