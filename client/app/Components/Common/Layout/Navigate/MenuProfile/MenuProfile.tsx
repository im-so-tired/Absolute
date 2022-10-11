import { IconButton, Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Menu from '@mui/material/Menu'
import { FC, MouseEvent, PropsWithChildren, useEffect, useState } from 'react'

import CustomMenuItem from './CustomMenuItem'
import { DataMenuItem } from './Menu.data'
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
			<Tooltip title="Открыть меню" arrow>
				<IconButton onClick={handleClick}>{children}</IconButton>
			</Tooltip>
			<Menu
				id="fade-menu"
				MenuListProps={{
					'aria-labelledby': 'fade-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				TransitionComponent={Fade}
				className={styles.menu}
			>
				{DataMenuItem.map(item => {
					return <CustomMenuItem key={item.id} menuItem={item} />
				})}
			</Menu>
		</div>
	)
}

export default MenuProfile
