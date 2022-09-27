import Image from 'next/image'
import { FC } from 'react'

import defaultAvatar from '@/assets/image/defaultAvatar.svg'

import { userState } from '@/store/Slices/User/user.interface'

import styles from './Profile.module.scss'

const Profile: FC<{ user: userState }> = ({ user }) => {
	return (
		<div className={styles.profile}>
			<button className={styles.picture}>
				<Image height={40} width={40} src={defaultAvatar} />
			</button>
			<div className={styles.info}>
				<span>Добро пожаловать!</span>
				<div>{user?.email}</div>
			</div>
		</div>
	)
}

export default Profile
