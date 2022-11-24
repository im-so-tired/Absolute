import { useQuery } from '@tanstack/react-query'
import React, { FC, useEffect, useState } from 'react'

import ProfileLayout from '@/components/Common/ProfileLayout/ProfileLayout'

import { useAppSelector } from '@/hooks/Redux'

import { IRoom } from '@/shared/types/room.types'

import { UserService } from '@/services/User.service'

import { toastrError } from '@/utils/toastrError'

import Loader from '../Rooms/RoomsMain/RoomsList/Loader'
import RoomItem from '../Rooms/RoomsMain/RoomsList/RoomItem'
import styles from '../Rooms/RoomsMain/RoomsList/RoomsList.module.scss'

const ProfileFavorites: FC = () => {
	const favoritesList = useAppSelector(state => state.user.user?.favourites)
	const [favorites, setFavorites] = useState<string[]>([])
	const { data: response, isLoading } = useQuery(
		['get favorites rooms'],
		() => UserService.getFavoritesRooms(),
		{
			select: data => data,
			onError: error => toastrError('Неправильный запрос', error),
		}
	)

	useEffect(() => {
		setFavorites(favoritesList as string[])
	}, [favoritesList])

	return (
		<ProfileLayout>
			<div className="w-full mb-10">
				<h1 className="font-bold text-2xl mb-6">Мои любимые номера</h1>
				{isLoading ? (
					<div className={styles.roomsList}>
						<Loader perPage={Number(favorites?.length)} />
					</div>
				) : (
					<div className={styles.roomsList}>
						{response?.length === 0 ? (
							<h1>Список пуст</h1>
						) : (
							<>
								<div className={styles.gridContainer}>
									{response.map((room: IRoom) => (
										<RoomItem key={room._id} info={room} />
									))}
								</div>
							</>
						)}
					</div>
				)}
			</div>
		</ProfileLayout>
	)
}

export default ProfileFavorites
