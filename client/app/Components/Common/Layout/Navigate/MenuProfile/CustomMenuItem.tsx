import { ListItemIcon } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import { IMenuItem } from './MenuItem.interface'
import styles from './MenuProfile.module.scss'

const CustomMenuItem: FC<{ menuItem: IMenuItem }> = ({ menuItem }) => {
	return (
		<Link href={menuItem.link}>
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
