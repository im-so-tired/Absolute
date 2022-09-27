import { Formik } from 'formik'
import { FC, FormEventHandler } from 'react'
import * as yup from 'yup'

import Button from '@/components/UI/Button/Button'
import AuthField from '@/components/UI/Fields/AuthField/AuthField'

import { IEmailPassword } from '@/store/Slices/User/user.interface'

import FooterForm from './FooterForm'
import styles from './Login.module.scss'

const FormAuth: FC<{
	onSubmit: (
		data: IEmailPassword
		// e: FormEventHandler<HTMLButtonElement>
	) => void
	type: 'register' | 'login'
}> = ({ onSubmit, type }) => {
	const validate = yup.object({
		email: yup.string().email('Email is invalid').required('Email is required'),
		password: yup
			.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required'),
	})
	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={value => {
				onSubmit(value)
			}}
			validationSchema={validate}
		>
			{({ values, handleChange, handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<AuthField
						name="email"
						label="Email"
						value={values.email}
						onChange={handleChange}
						className={styles.textField}
					/>
					<AuthField
						name="password"
						label="Password"
						value={values.password}
						onChange={handleChange}
						className={styles.textField}
					/>
					<Button
						link=""
						background="primary"
						type="submit"
						className="w-full p-2 mt-6"
					>
						{type === 'login' ? 'Войти' : 'Зарегистрироваться'}
					</Button>
					<FooterForm type={type} />
				</form>
			)}
		</Formik>
	)
}

export default FormAuth
