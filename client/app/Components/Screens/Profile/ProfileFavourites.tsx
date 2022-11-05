import Pagination from '@mui/material/Pagination'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'

import ProfileLayout from '@/components/Common/ProfileLayout/ProfileLayout'

import { useAppSelector } from '@/hooks/Redux'

import { IRoom } from '@/shared/types/room.types'

import { ProfileService } from '@/services/Profile/Profile.service'
import { RoomsService } from '@/services/Rooms/Rooms.service'

import { toastrError } from '@/utils/toastrError'

import { IMainFormValue } from '@/store/Slices/MainForm/MainForm.interface'

import { IFilters } from '../Rooms/RoomsMain/RoomsList.interface'
import Loader from '../Rooms/RoomsMain/RoomsList/Loader'
import RoomItem from '../Rooms/RoomsMain/RoomsList/RoomItem'
import styles from '../Rooms/RoomsMain/RoomsList/RoomsList.module.scss'

const ProfileFavourites: FC = () => {
	const favoritesList = useAppSelector(state => state.user.user?.favourites)
	const { data: response } = useQuery(
		['get favourites rooms', favoritesList],
		() => ProfileService.getRoomsById(favoritesList),
		{
			select: data => data,
			onError: error => toastrError('Неправильный запрос', error),
		}
	)

	return (
		<ProfileLayout>
			<h1>Мои любимые номера</h1>
			{response?.isLoading ? (
				<div className={styles.roomsList}>
					<h1>Номера, которые мы для вас подобрали</h1>
					<Loader perPage={Number(2)} />
				</div>
			) : (
				<div className={styles.roomsList}>
					{response?.rooms.length === 0 ? (
						<h2>Список пуст</h2>
					) : (
						<>
							<div className={styles.gridContainer}>
								{response?.rooms.map((room: IRoom) => (
									<RoomItem key={room._id} info={room} />
								))}
							</div>
						</>
					)}
				</div>
			)}
		</ProfileLayout>
	)
}

export default ProfileFavourites
