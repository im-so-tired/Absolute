import { axiosAuth, axiosClassic } from 'Api/intersaptors'

import { booking } from '@/shared/types/room.types'

export const BookingService = {
	async book(data: booking) {
		await axiosClassic.post('/booking', data)
	},
	async bookingUser(userId: string) {
		const { data } = await axiosAuth.get<booking[]>(`booking/${userId}`)
		return data
	},
}
