import DateFnsAdapter from '@date-io/date-fns'
import { FormControl, InputLabel, MenuItem, TextField } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getUnixTime, sub } from 'date-fns'
import { Field, Formik } from 'formik'
import { useRouter } from 'next/router'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'
import Select from 'react-select/dist/declarations/src/Select'

import ChooseGender from '@/components/Common/ChooseGender/ChooseGender'
import Button from '@/components/UI/Button/Button'
import AuthField from '@/components/UI/Fields/AuthField/AuthField'
import CheckBox from '@/components/UI/Fields/CheckBox/CheckBox'
import DateOfStay from '@/components/UI/Fields/DateOfStay/DateOfStay'
import FieldBase from '@/components/UI/Fields/FieldBase/FieldBase'
import MultiSelectField from '@/components/UI/Fields/MultiSelectField/MultiSelectField'
import SelectField from '@/components/UI/Fields/SelectField/SelectField'

import { useUserActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { IRoom, typeRoom } from '@/shared/types/room.types'
import { IOptions } from '@/shared/types/select'

import { RoomsService } from '@/services/Rooms/Rooms.service'
// import { IEditProfile, genderType } from '@/shared/types/user'
import { UserService } from '@/services/User.service'

import {
	arrayComforts,
	arrayComfortsOptions,
	arrayReach,
	arrayTerms,
} from '@/utils/constants'
import { toastrError } from '@/utils/toastrError'

import {
	comfortsType,
	reachType,
	termsType,
} from '@/store/Slices/MainForm/MainForm.interface'
import { RegisterData } from '@/store/Slices/User/user.interface'

import ChooseRoomType from '../ChooseRoomType/ChooseRoomType'

import styles from './RoomEditModal.module.scss'
import { schemaEditRoom } from './Schemas'

export interface IEditRoom {
	roomNumber: number
	// canPets: string
	// canSmoke: string
	// canInvite: string
	livingСonditions: termsType[]
	accessibility: reachType[]
	// hasWideCorridor: boolean
	// hasDisabledAssistant: boolean
	comforts: comfortsType[]
	price: number
	type: typeRoom
}

const RoomEditModalForm: FC<{
	room: IRoom
	handleClose: () => void
	roomsRefetch: any
}> = ({ room, handleClose, roomsRefetch }) => {
	const [initialState, setInitialState] = useState<IEditRoom>({
		roomNumber: room.roomNumber,
		livingСonditions: room.livingСonditions,
		// canPets: room.livingСonditions.includes('canPets'),
		// canSmoke: room.livingСonditions.includes('canSmoke'),
		// canInvite: room.livingСonditions.includes('canInvite'),
		accessibility: room.accessibility,
		// hasWideCorridor: room.accessibility.includes('hasWideCorridor'),
		// hasDisabledAssistant: room.accessibility.includes('hasDisabledAssistant'),
		comforts: room.comforts,
		price: room.price,
		type: room.type,
	})
	// const { reload } = useRouter()

	const { mutateAsync } = useMutation(
		['update room in dashboard'],
		(data: IEditRoom) => RoomsService.update(room._id, data),
		{
			onSuccess: () => {
				// push('/profile/{}/dashboard')
				roomsRefetch()
			},
			onError: error => toastrError('Неправильный запрос', error),
		}
	)

	const onSubmitHandle = async (e: FormEvent) => {
		// editProfile(value)
		e.preventDefault()
		handleClose()
		await mutateAsync({
			...room,
			...initialState,
		})
	}
	// console.log(initialState)
	return (
		<form className="flex flex-col" onSubmit={onSubmitHandle}>
			<TextField
				variant="outlined"
				type="text"
				label="№ Номера"
				name="roomNumber"
				onChange={e =>
					setInitialState(state => ({ ...state, roomNumber: +e.target.value }))
				}
				className={styles.textField}
				value={initialState.roomNumber}
			/>
			<span className="text-sm text-gray-500 font-medium mt-2">Тип номера</span>
			<ChooseRoomType
				name="type"
				value={initialState.type}
				onChange={e =>
					setInitialState(state => ({
						...state,
						type: e.target.value as typeRoom,
					}))
				}
			/>
			<TextField
				variant="outlined"
				type="text"
				label="Аренда в сутки (₽)"
				name="price"
				onChange={e =>
					setInitialState(state => ({ ...state, price: +e.target.value }))
				}
				className={styles.textField}
				value={initialState.price}
			/>
			<MultiSelectField
				name="comforts"
				id="select-comforts"
				label="Удобства"
				labelClassName={styles.selectLabel}
				options={arrayComfortsOptions}
				className="w-[420px] mt-6 text-gray-500 font-medium text-sm"
				value={initialState.comforts}
				onChange={e =>
					setInitialState(state => ({
						...state,
						comforts: e.map(item => item.value) as comfortsType[],
					}))
				}
			/>
			<div className={styles.checkboxContainer}>
				{arrayTerms.map(option => {
					const inArray = initialState.livingСonditions.includes(
						option.slug as termsType
					)
					return (
						<label key={option.slug}>
							<input
								name={option.slug}
								type="checkbox"
								onChange={e =>
									setInitialState(state => ({
										...state,
										livingСonditions: inArray
											? state.livingСonditions.filter(
													item => item !== option.slug
											  )
											: [...state.livingСonditions, option.slug as termsType],
									}))
								}
								checked={inArray}
							/>
							<span className={styles.checkboxLable}>{option.text}</span>
						</label>
					)
				})}
			</div>
			<div className={styles.checkboxContainer}>
				{arrayReach.map(option => {
					const inArray = initialState.accessibility.includes(
						option.slug as reachType
					)
					return (
						<label key={option.slug}>
							<input
								name="hasWideCorridor"
								type="checkbox"
								// label={{ slug: 'canPets', text: 'Можно с питомцами' }}
								onChange={e =>
									setInitialState(state => ({
										...state,
										accessibility: inArray
											? state.accessibility.filter(item => item !== option.slug)
											: [...state.accessibility, option.slug as reachType],
									}))
								}
								checked={inArray}
							/>
							<span className={styles.checkboxLable}>{option.title}</span>
							<p className="text-gray-500 ml-5 select-none">{option.text}</p>
						</label>
					)
				})}
			</div>
			<Button background="primary" type="submit" className="w-full p-2 mt-6">
				Обновить
			</Button>
		</form>
	)
}

export default RoomEditModalForm
