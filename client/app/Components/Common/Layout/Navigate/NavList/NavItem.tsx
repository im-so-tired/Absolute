import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { INavItem } from './NavItem.interface'
import styles from './NavList.module.scss'

const NavItem: FC<{ navItem: INavItem }> = ({ navItem }) => {
	const { asPath } = useRouter()
	return (
		<li className={cn({ 'text-blue-400': asPath === navItem.link })}>
			<Link href={navItem.link}>
				<a>
					<span>{navItem.name}</span>
				</a>
			</Link>
		</li>
	)
}

export default NavItem
