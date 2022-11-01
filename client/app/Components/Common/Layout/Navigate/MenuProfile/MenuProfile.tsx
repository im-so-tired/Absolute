import { IconButton, Tooltip } from '@mui/material'
import Button from '@mui/material/Button'
import Fade from '@mui/material/Fade'
import Menu from '@mui/material/Menu'
import { useRouter } from 'next/router'
import { FC, MouseEvent, PropsWithChildren, useEffect, useState } from 'react'

import { useUserActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import CustomMenuItem from './CustomMenuItem'
import { DataMenuItem } from './Menu.data'
import styles from './MenuProfile.module.scss'

const MenuProfile: FC<PropsWithChildren> = ({ children }) => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const user = useAuth()
	const { logout } = useUserActions()
	const { push, query } = useRouter()
	const open = Boolean(anchorEl)
	const handleClick = (event: MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handleLogout = async () => {
		push('/')
		logout()
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
				{DataMenuItem.map((item, index) => {
					const isDisplayAdmin = item.forAdmin && !user?.isAdmin
					return (
						!isDisplayAdmin && (
							<div key={item.id} onClick={handleClose}>
								<CustomMenuItem
									baseUrl={`/profile/${user?.id}${item.link}`}
									menuItem={item}
								/>
							</div>
						)
					)
				})}
				<button onClick={handleLogout} className="w-full">
					<CustomMenuItem
						baseUrl=""
						menuItem={{
							id: 6,
							title: 'Выйти',
							icon: 'MdExitToApp',
							link: '',
							forAdmin: false,
						}}
					/>
				</button>
			</Menu>
		</div>
	)
}

export default MenuProfile
