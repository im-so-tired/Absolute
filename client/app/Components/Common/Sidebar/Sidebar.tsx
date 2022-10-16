import { MenuItem, MenuList } from '@mui/material'
import cn from 'classnames'
import Link from 'next/link'
import React, { FC } from 'react'

import { useAuth } from '@/hooks/useAuth'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	const user = useAuth()
	return (
		<MenuList className={cn([styles.sidebar, styles['MuiList-root']])}>
			<Link href="profile/">
				<MenuItem>Мой профиль</MenuItem>
			</Link>
			{user?.isAdmin && (
				<Link href="/profile/dashboard">
					<MenuItem>Панель администратора</MenuItem>
				</Link>
			)}
			<Link href="/profile/booking">
				<MenuItem>Мои Бронирования</MenuItem>
			</Link>
			<Link href="/profile/likes">
				<MenuItem>Понравилось</MenuItem>
			</Link>
			<Link href="/profile/favorites">
				<MenuItem>Избранное</MenuItem>
			</Link>
			<Link href="/profile/edit">
				<MenuItem>Редактировать профиль</MenuItem>
			</Link>
		</MenuList>
	)
}

export default Sidebar
