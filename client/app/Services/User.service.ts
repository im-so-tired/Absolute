import { axiosAuth, axiosClassic } from 'Api/intersaptors'
import Cookies from 'js-cookie'

export const UserService = {
	async changeFavourites(roomId: string) {
		const { data } = await axiosAuth.put('/user/favourites', { roomId })
		return data
	},
}
