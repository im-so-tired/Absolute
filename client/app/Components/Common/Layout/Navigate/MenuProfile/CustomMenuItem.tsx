import { ListItemIcon } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import { useAuth } from '@/hooks/useAuth'

import { IMenuItem } from './MenuItem.interface'
import styles from './MenuProfile.module.scss'

interface ICustomMenuItemProps {
	menuItem: IMenuItem
	baseUrl: string
}

const CustomMenuItem: FC<ICustomMenuItemProps> = ({ menuItem, baseUrl }) => {
	return (
		<Link href={baseUrl}>
			<MenuItem>
				<ListItemIcon>
					<MaterialIcon name={menuItem.icon} color="#BC9CFF" />
				</ListItemIcon>
				{menuItem.title}
			</MenuItem>
		</Link>
	)
}

export default CustomMenuItem
