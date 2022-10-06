import React, { FC } from 'react'

import AuthLayout from '@/components/Common/AuthLayout/AuthLayout'

import FormLogin from './Forms/FormLogin'
import { useAuthRedirect } from './useAuthRedirect'

const Login: FC = () => {
	useAuthRedirect()

	return (
		<AuthLayout header="Войти">
			<FormLogin />
		</AuthLayout>
	)
}

export default Login
