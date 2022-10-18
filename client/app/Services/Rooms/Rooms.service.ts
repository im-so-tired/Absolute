import { axiosClassic } from 'Api/intersaptors'

import { IFilters } from '@/components/Screens/Rooms/RoomsMain/RoomsList.interface'

import { toastrError } from '@/utils/toastrError'

import { IMainFormValue } from '@/store/Slices/MainForm/MainForm.interface'

import { convertParams } from './helpers'

export const RoomsService = {
	async getRooms(formState: IMainFormValue, filters: IFilters) {
		const query = convertParams(formState)
		try {
			const rooms = await axiosClassic.get('/rooms', {
				params: {
					...query,
					...filters,
					per_page: filters.perPage,
				},
			})
			return rooms
		} catch (error) {
			toastrError('Bad request', error)
		}
	},
}
