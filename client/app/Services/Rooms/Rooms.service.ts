import { axiosClassic } from 'Api/intersaptors'

import { IMainFormValue } from '@/store/Slices/MainForm/MainForm.interface'

import { convertParams } from './helpers'

export const RoomsService = {
	async getRooms(params: IMainFormValue, searchTerm: string) {
		const query = convertParams(params)
		const rooms = await axiosClassic.get('/rooms', {
			params: {
				...query,
			},
		})
		console.log(rooms)
		return rooms
	},
}
