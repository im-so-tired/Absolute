import { FC } from 'react'

import { dataNavItem } from './Nav.data'
import NavItem from './NavItem'
import styles from './NavList.module.scss'

const NavList: FC = () => {
	return (
		<ul className={styles.navList}>
			{dataNavItem.map(item => (
				<NavItem key={item.id} navItem={item} />
			))}
		</ul>
	)
}

export default NavList
