import DateFnsAdapter from '@date-io/date-fns'
import { TextField } from '@mui/material'
import { DatePicker, DesktopDatePicker } from '@mui/x-date-pickers'
import { useQuery } from '@tanstack/react-query'
import { fromUnixTime, getUnixTime, sub } from 'date-fns'
import { Formik } from 'formik'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import ChooseGender from '@/components/Common/ChooseGender/ChooseGender'
import Button from '@/components/UI/Button/Button'
import AuthField from '@/components/UI/Fields/AuthField/AuthField'
import DateOfStay from '@/components/UI/Fields/DateOfStay/DateOfStay'

import { useAppSelector } from '@/hooks/Redux'
import { useUserActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { IEditProfile, genderType } from '@/shared/types/user'

import { UserService } from '@/services/User.service'

import { toastrError } from '@/utils/toastrError'

import { RegisterData, UserState } from '@/store/Slices/User/user.interface'

import styles from './EditProfileForm.module.scss'
import { schemaEditProfile } from './Schemas'

const FormRegister: FC<{ user: UserState }> = ({ user }) => {
	const { push } = useRouter()
	const [birthYear, setBirthYear] = useState<number>(
		user.birthYear || getUnixTime(sub(Date.now(), { years: 18 }))
	)
	const initialState: IEditProfile = {
		firstName: user?.firstName || '',
		secondName: user?.secondName || '',
		gender: user?.gender || 'male',
	}
	const { editProfile } = useUserActions()
	const dateFns = new DateFnsAdapter()

	const onSubmitHandle = (value: IEditProfile) => {
		editProfile({ ...value, birthYear })
		push(`/profile/${user?.id}`)
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
						label="??????"
						name="firstName"
						onChange={handleChange}
						className="w-[420px] mt-3 mb-3"
						value={values.firstName}
					/>
					<AuthField
						type="text"
						label="??????????????"
						name="secondName"
						onChange={handleChange}
						className="w-[420px] mt-3 mb-3"
						value={values.secondName}
					/>
					<ChooseGender
						name="gender"
						value={values.gender}
						onChange={handleChange}
					/>
					<DateOfStay
						label="???????? ????????????????"
						name="birthYear"
						value={birthYear}
						onChange={newValue => {
							if (!newValue) return
							const result =
								typeof newValue !== 'number' ? getUnixTime(newValue) : newValue
							setBirthYear(result)
						}}
						maxDate={dateFns.date(Date.now())}
						defaultDate={birthYear}
						className={styles.textField}
					/>
					<Button
						link=""
						background="primary"
						type="submit"
						className="w-full p-2 mt-6"
					>
						????????????????
					</Button>
				</form>
			)}
		</Formik>
	)
}

export default FormRegister
