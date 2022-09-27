import { useRouter } from 'next/router'
import React, { FC } from 'react'

import AuthLayout from '@/components/Common/AuthLayout/AuthLayout'

import { useUserActions } from '@/hooks/useActions'

import { IEmailPassword } from '@/store/Slices/User/user.interface'

import FormAuth from './FormAuth'
import { useAuthRedirect } from './useAuthRedirect'

const Login: FC = () => {
	useAuthRedirect()
	const { login } = useUserActions()
	const onSubmit = (values: IEmailPassword) => {
		login(values)
	}

	return (
		<AuthLayout header="Войти">
			<FormAuth onSubmit={onSubmit} type="login" />
		</AuthLayout>
	)
}

export default Login
