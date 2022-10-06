import React, { FC } from 'react'

import AuthLayout from '@/components/Common/AuthLayout/AuthLayout'

import FormRegister from './Forms/FormRegister'
import { useAuthRedirect } from './useAuthRedirect'

const Register: FC = () => {
	useAuthRedirect()
	return (
		<AuthLayout header="Регистрация">
			<FormRegister />
		</AuthLayout>
	)
}

export default Register
