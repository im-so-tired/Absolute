import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'

import { useAppSelector } from '@/hooks/Redux'

import { IRoom } from '@/shared/types/room.types'

import { RoomsService } from '@/services/Rooms/Rooms.service'

import { IFilters } from '../RoomsList.interface'

import RoomItem from './RoomItem'
import styles from './RoomsList.module.scss'

const RoomsList: FC<{ filters: IFilters }> = ({ filters }) => {
	const formState = useAppSelector(state => state.mainForm)
	const {
		data: response,
		isLoading,
		refetch,
	} = useQuery(
		['get rooms', formState, filters],
		() => RoomsService.getRooms(formState, filters),
		{ select: data => data?.data }
	)
	if (isLoading) {
		return <h1>Loading...</h1>
	}
	return (
		<div>
			<h1>Номера, которые мы для вас подобрали</h1>
			<div className={styles.roomsList}>
				{response.data.map((room: IRoom) => (
					<RoomItem key={room._id} info={room} />
				))}
			</div>
		</div>
	)
}

export default RoomsList
