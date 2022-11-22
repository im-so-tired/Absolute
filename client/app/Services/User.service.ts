import { axiosAuth, axiosClassic } from 'Api/intersaptors'

import { UserState } from '@/store/Slices/User/user.interface'

export const UserService = {
	async changeFavourites(roomId: string) {
		const { data } = await axiosAuth.put(`/user/favourites/${roomId}`)
		return data
	},

	async getById(id: string) {
		const { data: user } = await axiosClassic.get(`/user/${id}`)
		return user
	},
}
