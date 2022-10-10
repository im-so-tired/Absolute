import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getValueLocalStorage } from '@/utils/localStorage'

import { UserState } from '@/store/Slices/User/user.interface'

import Container from '../../Container/Container'

import Buttons from './Buttons/Buttons'
import Logo from './Logo'
import NavList from './NavList/NavList'
import styles from './Navigate.module.scss'
import Profile from './Profile/Profile'

const Navigate: FC = () => {
	const user = useAuth()
	const [userState, setUserState] = useState<null | UserState>(null)

	useEffect(() => {
		setUserState(user)
	}, [user])
	return (
		<div className="shadow-xl">
			<Container className={styles.wrapper}>
				<Logo />
				<NavList />
				{userState ? <Profile user={userState} /> : <Buttons />}
			</Container>
		</div>
	)
}

export default Navigate
