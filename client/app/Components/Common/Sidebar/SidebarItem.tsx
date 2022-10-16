import { MenuItem } from '@mui/material'
import cn from 'classnames'
import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import styles from './Sidebar.module.scss'
import { ISidebarItem } from './SidebarItem.interface'

const SidebarItem: FC<{ sidebarItem: ISidebarItem; active: number }> = ({
	sidebarItem,
	active,
}) => {
	return (
		<Link href={sidebarItem.link}>
			<MenuItem>
				<div className={styles['sidebar-item__content']}>
					<MaterialIcon
						name={sidebarItem.icon}
						color={active === sidebarItem.id ? '#B99DFC' : '#54556E'}
						size={20}
					/>
					<span>{sidebarItem.title}</span>
				</div>
			</MenuItem>
		</Link>
	)
}

export default SidebarItem
