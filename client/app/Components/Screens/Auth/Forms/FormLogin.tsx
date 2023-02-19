import {Formik} from 'formik'
import {FC, FormEventHandler} from 'react'

import Button from '@/components/UI/Button/Button'
import AuthField from '@/components/UI/Fields/AuthField/AuthField'

import {useUserActions} from '@/hooks/useActions'

import styles from '../Login.module.scss'

import FooterForm from './FooterForm'
import {schemaLogin} from './Schemas'

const FormLogin: FC = () => {
	const {login} = useUserActions()

	return (
		<Formik
			initialValues={{email: '', password: ''}}
			onSubmit={value => {
				login(value)
			}}
			validationSchema={schemaLogin}
		>
			{({values, handleChange, handleSubmit}) => (
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
						label="Пароль"
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
						Войти
					</Button>
					<FooterForm type="login"/>
				</form>
			)}
		</Formik>
	)
}

export default FormLogin
