import Image from 'next/image'
import React, { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { IUser } from '@/shared/types/user'

import defaultAvatar from '@/assets/image/defaultAvatar.svg'

import styles from './MainForm.module.scss'

const MainForm: FC = () => {
	const CurrentUser = useAuth()
	const [user, setUser] = useState<any>()
	useEffect(() => {
		setUser(CurrentUser)
	}, [])
	return (
		<div className={styles.wrapper}>
			<h1>Страница пользователя {`${user?.firstName} ${user?.secondName}`}</h1>
			<div className={styles.card}>
				<div className={styles.image}>
					<Image height={150} width={150} src={defaultAvatar} />
				</div>
				<div className={styles.info}>
					<p>Имя: {user?.firstName}</p>
					<p>Фамилия: {user?.secondName}</p>
					<p>Пол: {user?.gender}</p>
					<p>Статус: {user?.isAdmin ? 'Администратор' : 'Пользователь'}</p>
					<p>Дата рождения: {user?.birthYear}</p>
				</div>
			</div>
		</div>
	)
}

export default MainForm
