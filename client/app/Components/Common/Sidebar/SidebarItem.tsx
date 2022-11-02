import { MenuItem } from '@mui/material'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import { useAuth } from '@/hooks/useAuth'

import styles from './Sidebar.module.scss'
import { ISidebarItem } from './SidebarItem.interface'

const SidebarItem: FC<{ sidebarItem: ISidebarItem; active: boolean }> = ({
	sidebarItem,
	active,
}) => {
	const { isReady } = useRouter()
	const user = useAuth()
	return (
		<Link href={isReady ? `/profile/${user?.id}${sidebarItem.link}` : ''}>
			<MenuItem sx={{ transition: 'all 0.1s ease-in' }}>
				<div className={styles['sidebar-item__content']}>
					<MaterialIcon
						name={sidebarItem.icon}
						color={active ? '#B99DFC' : '#54556E'}
						size={24}
					/>
					<span>{sidebarItem.title}</span>
				</div>
			</MenuItem>
		</Link>
	)
}

export default SidebarItem
