import { axiosAuth, axiosClassic } from 'Api/intersaptors'
import Cookies from 'js-cookie'

import { IEditProfile } from '@/shared/types/user'

export const UserService = {
	async changeFavourites(roomId: string) {
		const { data } = await axiosAuth.put('/user/favourites', { roomId })
		return data
	},
	async getFavoritesRooms() {
		const { data } = await axiosAuth.get('/user/favorites')
		return data
	},
	async editProfile(user: IEditProfile) {
		const { data } = await axiosAuth.put('/user/profile', user)
		return data
	},
}
