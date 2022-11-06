import { axiosAuth, axiosClassic } from 'Api/intersaptors'

export const UserService = {
	async changeFavourites(roomId: string) {
		const { data } = await axiosAuth.put(`/user/favourites/${roomId}`)
		return data
	},
}
