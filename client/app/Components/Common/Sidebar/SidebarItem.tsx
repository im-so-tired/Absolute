import { MenuItem } from '@mui/material'
import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import { useAuth } from '@/hooks/useAuth'

import { IUser } from '@/shared/types/user'

import { UserState } from '@/store/Slices/User/user.interface'

import styles from './Sidebar.module.scss'
import { ISidebarItem } from './SidebarItem.interface'

const SidebarItem: FC<{
	sidebarItem: ISidebarItem
	active: boolean
	user: UserState
}> = ({ sidebarItem, active, user }) => {
	// const user = useAuth()
	// console.log(user)
	return (
		<Link href={`/profile/${user?.id}${sidebarItem.link}`}>
			<a>
				<MenuItem>
					<div className={styles['sidebar-item__content']}>
						<MaterialIcon
							name={sidebarItem.icon}
							color={active ? '#B99DFC' : '#54556E'}
							size={20}
						/>
						<span>{sidebarItem.title}</span>
					</div>
				</MenuItem>
			</a>
		</Link>
	)
}

export default SidebarItem
