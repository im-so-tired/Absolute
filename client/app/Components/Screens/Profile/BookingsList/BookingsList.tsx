import { useMutation, useQuery } from '@tanstack/react-query'
import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { BookingService } from '@/services/Booking.service'

import { toastrError } from '@/utils/toastrError'

import BookingCard from './BookingCard'

const BookingsList: FC = () => {
	const currentUser = useAuth()
	const [user, setUser] = useState<any>(null)
	useEffect(() => {
		setUser(currentUser)
		// bookingsRefetch()
	}, [currentUser])
	const {
		data: bookings,
		isLoading,
		refetch: bookingsRefetch,
	} = useQuery(
		['get user bookings in profile bookings'],
		() => BookingService.bookingUser(user?.id),
		{
			select: data => data,
			onError: error => toastrError('Неправильный запрос', error),
			enabled: !!user,
		}
	)
	const { mutateAsync: deleteBooking } = useMutation(
		['delete booking in profile bookings'],
		(bookId: string) => BookingService.delete(bookId),
		{
			onSuccess: () => {
				bookingsRefetch()
			},
			onError: error => toastrError('Неправильный запрос', error),
		}
	)
	// console.log(user?.id)
	return !isLoading ? (
		<div className="w-full">
			<h1 className="m-3 font-bold text-2xl">Мои бронирования</h1>
			<div className="w-full flex-col">
				{bookings?.map(booking => (
					<BookingCard
						key={booking._id}
						booking={booking}
						deleteHandler={deleteBooking}
					/>
				))}
				{bookings?.length === 0 && <h3>Список бронирований пуст</h3>}
			</div>
		</div>
	) : (
		<div>Loading...</div>
	)
}

export default BookingsList
