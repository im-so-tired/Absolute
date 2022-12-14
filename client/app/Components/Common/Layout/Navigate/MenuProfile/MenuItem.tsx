import Link from 'next/link'
import React, { FC } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import { IMenuItem } from './MenuItem.interface'

const MenuItem: FC<{ menuItem: IMenuItem }> = ({ menuItem }) => {
	return (
		<li>
			<a>
				<MaterialIcon name={menuItem.icon} />
				<span>{menuItem.title}</span>
			</a>

			<Link href={menuItem.link ?? ''}>
				<a>
					<MaterialIcon name={menuItem.icon} />
					<span>{menuItem.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
