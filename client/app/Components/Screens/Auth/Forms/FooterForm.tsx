import { FC } from 'react'

import Button from '@/components/UI/Button/Button'

import styles from '../Login.module.scss'

const FooterForm: FC<{ type: 'register' | 'login' }> = ({ type }) => {
	return type === 'login' ? (
		<div className={styles.footer}>
			<span>Нет аккаунта на Toxin?</span>
			<Button link="/auth/register" background="base" className="p-1 text-sm">
				Зарегистрироваться
			</Button>
		</div>
	) : (
		<div className={styles.footer}>
			<span>Уже есть аккаунт на Toxin?</span>
			<Button link="/auth/login" background="base" className="p-1 text-sm">
				Войти
			</Button>
		</div>
	)
}

export default FooterForm
