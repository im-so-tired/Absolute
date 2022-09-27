import Link from 'next/link'
import { FC } from 'react'

import Button from '@/components/UI/Button/Button'

import styles from './Buttons.module.scss'

const Buttons: FC = () => {
	return (
		<div className={styles.buttonsContainer}>
			<Button background="base" link="/auth/login">
				Войти
			</Button>
			<Button background="primary" link="/auth/register">
				Зарегистрироваться
			</Button>
		</div>
	)
}

export default Buttons
