import { axiosAuth, axiosClassic } from 'Api/intersaptors'

import { booking } from '@/shared/types/room.types'

export const BookingService = {
	async book(data: Omit<booking, '_id'>) {
		await axiosAuth.post('/booking', data)
	},
	async bookingUser(userId: string) {
		const { data } = await axiosAuth.get<booking[]>(`booking/${userId}`)
		return data
	},
	async getAllbookings() {
		const { data } = await axiosAuth.get<booking[]>(`booking/`)
		return data
	},
	async delete(bookId: string) {
		await axiosAuth.delete(`booking/${bookId}`)
	},
}
