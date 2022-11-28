import { FC, useCallback } from 'react'

import Container from '@/components/Common/Container/Container'
import ImageSlider from '@/components/Common/ImageSlider/ImageSlider'
import Loader from '@/components/UI/Loader'

import { useAppSelector } from '@/hooks/Redux'
import { useUserActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { IRoom } from '@/shared/types/room.types'

import { IComment } from '@/store/Slices/Reviews/Reviews.interface'

import BookingForm from './BookingForm/BookingForm'
import Reviews from './Comments/Reviews'
import styles from './Room.module.scss'
import RoomDetails from './RoomDetails/RoomDetails'
import RoomRating from './RoomRating'
import { useRoom } from './useRoom'

const Room: FC<{ room: IRoom; comments: IComment[] }> = ({
	room,
	comments,
}) => {
	const user = useAuth()
	const rate = useAppSelector(state => state.reviews.rate)
	const { changeFavourites } = useUserActions()
	const clickHandler = useCallback(() => {
		changeFavourites(room._id)
	}, [room])
	return (
		<Container>
			<div className="big-slider h-[500px] mt-4">
				<ImageSlider imgArray={room.images} />
			</div>
			<div className={styles.gridContainer}>
				<RoomDetails />
				<RoomRating value={rate || 0} />
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
				<Reviews comments={comments} />
			</div>
		</Container>
	)
}

export default Room
