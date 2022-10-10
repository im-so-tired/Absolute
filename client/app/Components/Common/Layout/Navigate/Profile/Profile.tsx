import Image from 'next/image'
import { FC } from 'react'

import defaultAvatar from '@/assets/image/defaultAvatar.svg'

import { UserState } from '@/store/Slices/User/user.interface'

import MenuProfile from '../MenuProfile/MenuProfile'

import styles from './Profile.module.scss'

const Profile: FC<{ user: UserState }> = ({ user }) => {
	return (
		<div className={styles.profile}>
			<div className={styles.picture}>
				<MenuProfile>
					<Image height={40} width={40} src={defaultAvatar} />
				</MenuProfile>
			</div>
			<div className={styles.info}>
				<span>Добро пожаловать!</span>
				<div>{user.email}</div>
			</div>
		</div>
	)
}

export default Profile
