import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { userState } from '@/store/Slices/User/user.interface'

import Container from '../../Container/Container'

import Buttons from './Buttons/Buttons'
import Logo from './Logo'
import NavList from './NavList/NavList'
import styles from './Navigate.module.scss'
import Profile from './Profile/Profile'

const Navigate: FC = () => {
	const user = useAuth()
	const [currentUser, setCurrentUser] = useState<userState | null>()
	useEffect(() => {
		setCurrentUser(user)
	}, [user])
	return (
		<div className="shadow-xl">
			<Container className={styles.wrapper}>
				<Logo />
				<NavList />
				{currentUser ? <Profile user={currentUser} /> : <Buttons />}
			</Container>
		</div>
	)
}

export default Navigate
