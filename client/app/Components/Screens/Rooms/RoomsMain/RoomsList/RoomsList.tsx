import Pagination from '@mui/material/Pagination'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'

import { useAppSelector } from '@/hooks/Redux'

import { IRoom } from '@/shared/types/room.types'

import { RoomsService } from '@/services/Rooms/Rooms.service'

import { IFilters } from '../RoomsList.interface'

import Loader from './Loader'
import RoomItem from './RoomItem'
import styles from './RoomsList.module.scss'

const RoomsList: FC<{
	filters: IFilters
	changePage: (value: number) => void
}> = ({ filters, changePage }) => {
	const formState = useAppSelector(state => state.mainForm)
	const { data: response, isLoading } = useQuery(
		['get rooms', formState, filters],
		() => RoomsService.getRooms(formState, filters),
		{ select: data => data?.data }
	)
	return isLoading ? (
		<div className={styles.roomsList}>
			<h1>Номера, которые мы для вас подобрали</h1>
			<Loader perPage={Number(filters.perPage)} />
		</div>
	) : (
		<div className={styles.roomsList}>
			{response?.totalCount === 0 ? (
				<h1>Мы не нашли для вас подходящих номеров по вашим параметрам</h1>
			) : (
				<>
					<h1>Номера, которые мы для вас подобрали</h1>
					<div className={styles.gridContainer}>
						{response?.data.map((room: IRoom) => (
							<RoomItem key={room._id} info={room} />
						))}
					</div>
					{(response?.totalCount ?? 0) > Number(filters.perPage) && (
						<Pagination
							className={styles.pagination}
							page={filters.page}
							onChange={(event: React.ChangeEvent<unknown>, value: number) =>
								changePage(value)
							}
							variant="outlined"
							color="secondary"
							count={Math.ceil(
								(response?.totalCount ?? 0) / Number(filters.perPage)
							)}
						/>
					)}
				</>
			)}
		</div>
	)
}

export default RoomsList
