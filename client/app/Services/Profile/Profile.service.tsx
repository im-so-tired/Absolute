import { axiosClassic } from 'Api/intersaptors'

import { IRoom } from '@/shared/types/room.types'

export const ProfileService = {
	async getRoomsById(ids: string[] | undefined) {
		const rooms: IRoom[] = []
		let isLoading: boolean = false
		ids?.map(
			async id =>
				await axiosClassic
					.get<IRoom>(`/rooms/${id}`)
					.then(data => {
						isLoading = true
						rooms.push(data.data)
					})
					.catch(err => {
						isLoading = false
					})
		)
		return { rooms, isLoading }
	},
}
