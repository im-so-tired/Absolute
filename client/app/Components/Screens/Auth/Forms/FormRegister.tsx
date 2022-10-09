import DateFnsAdapter from '@date-io/date-fns'
import { getUnixTime, sub } from 'date-fns'
import { Formik } from 'formik'
import { FC, useState } from 'react'

import ChooseGender from '@/components/Common/ChooseGender/ChooseGender'
import Button from '@/components/UI/Button/Button'
import AuthField from '@/components/UI/Fields/AuthField/AuthField'
import DateOfStay from '@/components/UI/Fields/DateOfStay/DateOfStay'

import { useUserActions } from '@/hooks/useActions'

import { RegisterData } from '@/store/Slices/User/user.interface'

import styles from '../Login.module.scss'

import FooterForm from './FooterForm'
import { schemaRegister } from './Schemas'

const initialState: RegisterData = {
	firstName: '',
	secondName: '',
	email: '',
	birthYear: getUnixTime(sub(Date.now(), { years: 18 })),
	gender: 'male',
	password: '',
}

const FormRegister: FC = () => {
	const { register } = useUserActions()
	const [birthDate, setBirthDate] = useState<number>()
	const dateFns = new DateFnsAdapter()
	return (
		<Formik
			initialValues={initialState}
			validationSchema={schemaRegister}
			onSubmit={value => {
				register(value)
			}}
		>
			{({ values, handleChange, handleSubmit }) => (
				<form className="flex flex-col" onSubmit={handleSubmit}>
					<AuthField
						type="text"
						label="Имя"
						name="firstName"
						onChange={handleChange}
						className={styles.textField}
						value={values.firstName}
					/>
					<AuthField
						type="text"
						label="Фамилия"
						name="secondName"
						onChange={handleChange}
						className={styles.textField}
						value={values.secondName}
					/>
					<ChooseGender
						name="gender"
						value={values.gender}
						onChange={handleChange}
					/>
					<DateOfStay
						label="Дата рождения"
						value={values.birthYear}
						onChange={newValue => {
							if (!newValue) return
							const result =
								typeof newValue !== 'number' ? getUnixTime(newValue) : newValue
							values.birthYear = result
							setBirthDate(values.birthYear)
						}}
						name="birthYear"
						maxDate={dateFns.date(Date.now())}
						defaultDate={initialState.birthYear}
						className={styles.textField}
					/>
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
						Зарегистрироваться
					</Button>
					<FooterForm type="register" />
				</form>
			)}
		</Formik>
	)
}

export default FormRegister
