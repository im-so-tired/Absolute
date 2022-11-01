import { useMutation, useQuery } from '@tanstack/react-query'

import { useAuth } from '@/hooks/useAuth'

import { booking } from '@/shared/types/room.types'

import { BookingService } from '@/services/Booking.service'

export const useBooking = () => {
	const user = useAuth()

	const { mutateAsync } = useMutation((data: Omit<booking, 'userId'>) =>
		BookingService.book({ ...data, userId: user?.id || '' })
	)

	const { data: countBooking, isLoading } = useQuery(
		['user booking'],
		() => BookingService.bookingUser(user?.id || ''),
		{
			select: data => data.length,
		}
	)
	return { countBooking, mutateAsync }
}
