import { MenuItem, MenuList } from '@mui/material'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { DataSidebarItem } from './Sidebar.data'
import styles from './Sidebar.module.scss'
import SidebarItem from './SidebarItem'

const Sidebar: FC = () => {
	const user = useAuth()
	const { asPath } = useRouter()
	const [activeLink, setActiveLink] = useState<number>(1)

	return (
		<MenuList className={cn([styles.sidebar, styles['MuiList-root']])}>
			{DataSidebarItem.map(item => {
				if (item.forAdmin && !user?.isAdmin) return
				const isActive = asPath === `/profile/${user?.id}${item.link}`
				return (
					<div
						key={item.id}
						onClick={() => setActiveLink(item.id)}
						className={cn(styles['sidebar-item'], {
							[styles.active]: isActive,
						})}
					>
						<SidebarItem sidebarItem={item} active={isActive} />
					</div>
				)
			})}
			{/* <Link href="profile/" className={cn([styles['sidebar-item']])}>
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
			</Link> */}
		</MenuList>
	)
}

export default Sidebar
