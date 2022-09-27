import React, { FC } from 'react'

import AuthLayout from '@/components/Common/AuthLayout/AuthLayout'

import { useUserActions } from '@/hooks/useActions'

import { register } from '@/store/Slices/User/User.action'
import { IEmailPassword } from '@/store/Slices/User/user.interface'

import FormAuth from './FormAuth'
import { useAuthRedirect } from './useAuthRedirect'

const Register: FC = () => {
	useAuthRedirect()
	const { register } = useUserActions()
	const onSubmit = (values: IEmailPassword) => {
		register(values)
	}
	return (
		<AuthLayout header="Регистрация">
			<FormAuth onSubmit={onSubmit} type="register" />
		</AuthLayout>
	)
}

export default Register
