import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Menu from '@mui/material/Menu'
import { FC, MouseEvent, PropsWithChildren, useEffect, useState } from 'react'

import { DataMenuItem } from './Menu.data'
import MenuItem from './MenuItem'
import styles from './MenuProfile.module.scss'

const MenuProfile: FC<PropsWithChildren> = ({ children }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	return (
		<div className={styles.menuProfile}>
			<Button
				id="fade-button"
				aria-controls={open ? 'fade-menu' : undefined}
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
			>
				{children}
			</Button>
			<Menu
				id="fade-menu"
				MenuListProps={{
					'aria-labelledby': 'fade-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
			>
				{DataMenuItem.map(item => {
					return <MenuItem key={item.id} menuItem={item} />
				})}
			</Menu>
		</div>
	)
}

export default MenuProfile