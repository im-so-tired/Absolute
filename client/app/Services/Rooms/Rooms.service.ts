import { axiosAuth, axiosClassic } from 'Api/intersaptors'

import { IEditRoom } from '@/components/Common/RoomEditModal/RoomEditModalForm'
import { IFilters } from '@/components/Screens/Rooms/RoomsMain/RoomsList.interface'

import { IRoom } from '@/shared/types/room.types'

import { toastrError } from '@/utils/toastrError'

import { IMainFormValue } from '@/store/Slices/MainForm/MainForm.interface'

import { convertParams } from './helpers'

export const RoomsService = {
	async getRooms(
		formState: IMainFormValue,
		filters: IFilters = {
			searchTerm: '',
			perPage: '12',
			page: 1,
			sortOption: 'des',
		}
	) {
		const query = convertParams(formState)

		const rooms = await axiosClassic.get<{
			totalCount: number
			data: IRoom[]
		}>('/rooms', {
			params: {
				...query,
				...filters,
				per_page: filters.perPage,
			},
		})
		return rooms
	},
	async getAllRooms() {
		const rooms = await axiosClassic.get<{
			totalCount: number
			data: IRoom[]
		}>('/rooms/all')
		return rooms
	},
	async getRoomById(id: string) {
		const { data: room } = await axiosClassic.get<IRoom>(`/rooms/${id}`)
		return room
	},
	async update(roomId: string, body: IEditRoom) {
		const { data } = await axiosAuth.put(`/rooms/${roomId}`, body)
		return data
	},
}
