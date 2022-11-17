import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { FC } from 'react'

import Container from '@/components/Common/Container/Container'
import ImageSlider from '@/components/Common/ImageSlider/ImageSlider'

import { useAuth } from '@/hooks/useAuth'

import { RoomsService } from '@/services/Rooms/Rooms.service'

import { toastrError } from '@/utils/toastrError'

import BookingForm from './BookingForm/BookingForm'
import Reviews from './Comments/Reviews'
import styles from './Room.module.scss'
import RoomDetails from './RoomDetails/RoomDetails'
import RoomRating from './RoomRating'
import { useRoom } from './useRoom'

const Room: FC = () => {
	const { isLoading, room, changeFavourites, queryId } = useRoom()
	const user = useAuth()
	if (isLoading || !queryId || !room) {
		return (
			<Container>
				<div>Loading...</div>
			</Container>
		)
	}
	const clickHandler = () => {
		changeFavourites(room._id)
	}
	return (
		<Container>
			<div className="big-slider h-[500px] mt-4">
				<ImageSlider imgArray={room.images} />
			</div>
			<div className={styles.gridContainer}>
				<RoomDetails />
				<RoomRating value={room.rate} />
				<BookingForm
					roomInfo={{
						id: room._id,
						number: room.roomNumber,
						price: room.price,
						type: room.type,
					}}
					favourites={user?.favourites ?? []}
					favouritesHandler={clickHandler}
				/>
				<Reviews roomId={room._id} />
			</div>
		</Container>
	)
}

export default Room
