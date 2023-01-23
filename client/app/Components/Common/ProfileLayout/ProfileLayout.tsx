import { Container } from '@mui/system'
import React, { FC, PropsWithChildren } from 'react'

import Breadcrumbs from '@/components/Common/Breadcrumbs/Breadcrumbs'

import { useAppSelector } from '@/hooks/Redux'

import Sidebar from '../Sidebar/Sidebar'

import styles from './ProfileLayout.module.scss'

const ProfileLayout: FC<PropsWithChildren> = ({ children }) => {
	const { isLoading, user } = useAppSelector(state => state.user)
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
