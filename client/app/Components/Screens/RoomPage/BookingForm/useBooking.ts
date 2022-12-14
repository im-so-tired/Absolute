import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { toastr } from 'react-redux-toastr'

import { useAppSelector } from '@/hooks/Redux'
import { useAuth } from '@/hooks/useAuth'

import { booking } from '@/shared/types/room.types'

import { BookingService } from '@/services/Booking.service'

import { toastrError } from '@/utils/toastrError'

import { errorMessage } from '@/helpers/ErrorMessage'

export const useBooking = () => {
	const user = useAuth()
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [buttonActive, setButtonActive] = useState<boolean>(true)
	const [error, setError] = useState<string>('')
	const { date, countPeople } = useAppSelector(state => state.mainForm)
	const { mutateAsync } = useMutation(
		(data: Omit<Omit<booking, '_id'>, 'userId'>) =>
			BookingService.book({ ...data, userId: user?.id || '' }),
		{
			onError: error => {
				setButtonActive(false)
				setError(errorMessage(error))
				toastrError('Забронировать номер не удалось', error)
			},
			onSuccess: () => setOpenModal(true),
		}
	)

	const { data: countBooking, isLoading } = useQuery(
		['user booking'],
		() => BookingService.bookingUser(user?.id || ''),
		{
			select: data => data.length,
		}
	)

	const handleClose = () => {
		setOpenModal(false)
	}
	useEffect(() => {
		setError('')
		setButtonActive(true)
	}, [date])
	return {
		countBooking,
		mutateAsync,
		openModal,
		buttonActive,
		error,
		handleClose,
		date,
		countPeople,
	}
}
