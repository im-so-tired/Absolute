import DateFnsAdapter from '@date-io/date-fns'
import { useQuery } from '@tanstack/react-query'
import { getUnixTime, sub } from 'date-fns'
import { Formik } from 'formik'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import ChooseGender from '@/components/Common/ChooseGender/ChooseGender'
import Button from '@/components/UI/Button/Button'
import AuthField from '@/components/UI/Fields/AuthField/AuthField'
import DateOfStay from '@/components/UI/Fields/DateOfStay/DateOfStay'

import { useUserActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { IEditProfile, genderType } from '@/shared/types/user'

import { UserService } from '@/services/User.service'

import { toastrError } from '@/utils/toastrError'

import { RegisterData } from '@/store/Slices/User/user.interface'

import styles from './EditProfileForm.module.scss'
import { schemaEditProfile } from './Schemas'

const FormRegister: FC = () => {
	const currentUser = useAuth()
	const { push } = useRouter()
	const [user, setUser] = useState<any>(null)
	const initialState: IEditProfile = {
		firstName: user?.firstName || '',
		secondName: user?.secondName || '',
		birthYear: user?.birthYear || getUnixTime(sub(Date.now(), { years: 18 })),
		gender: user?.gender || 'male',
	}
	const { editProfile } = useUserActions()
	const dateFns = new DateFnsAdapter()

	useEffect(() => {
		setUser(currentUser)
	}, [currentUser])

	const onSubmitHandle = (value: IEditProfile) => {
		editProfile(value)
		push(`/profile`)
	}

	return !user ? (
		<div>Loading</div>
	) : (
		<Formik
			initialValues={initialState}
			validationSchema={schemaEditProfile}
			onSubmit={onSubmitHandle}
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
						}}
						name="birthYear"
						maxDate={dateFns.date(Date.now())}
						defaultDate={initialState.birthYear}
						className={styles.textField}
					/>
					<Button
						link=""
						background="primary"
						type="submit"
						className="w-full p-2 mt-6"
					>
						Обновить
					</Button>
				</form>
			)}
		</Formik>
	)
}

export default FormRegister
