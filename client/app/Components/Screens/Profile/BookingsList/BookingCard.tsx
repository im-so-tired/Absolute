import { Button as MuiButton, Paper } from '@mui/material'
import { useMutation, useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from '@/components/UI/Button/Button'

import { IRoom, booking } from '@/shared/types/room.types'

import { BookingService } from '@/services/Booking.service'
import { RoomsService } from '@/services/Rooms/Rooms.service'

import { getDateByNumber } from '@/utils/getDateByNumber'
import { toastrError } from '@/utils/toastrError'

import RoomItem from '../../Rooms/RoomsMain/RoomsList/RoomItem'

import styles from './BookingsList.module.scss'
import { getBadyMessage, getGuestMessage } from '@/helpers/correctMessage'

const BookingCard: FC<{ booking: booking; deleteHandler: any }> = ({
	booking: {
		_id,
		dateComing,
		dateExit,
		adults,
		userId,
		babies,
		totalPrice,
		roomId,
	},
	deleteHandler,
}) => {
	const handleRemoveBooking = () => {
		// dispatch(removeBooking(_id))
		// dispatch(removeBookingRoom({ roomId, _id: _id || '' }))
	}
	const {
		data: room,
		isLoading,
		refetch: roomsRefetch,
	} = useQuery(
		['get room by id in profile bookings', roomId],
		() => RoomsService.getRoomById(roomId),
		{
			select: data => data,
			onError: error => toastrError('Неправильный запрос', error),
		}
	)

	return !isLoading ? (
		<Paper className={styles.bookingCard}>
			<div className="flex justify-between">
				<div className="booking-content">
					<h2 className="ml-3 font-bold text-xl">
						№ <span>{_id}</span>
					</h2>
					<h3 className="ml-3 font-bold text-lg mt-5">
						Информация о бронировании
					</h3>
					<table className={styles.bookingInfo}>
						<tbody className={styles['bookingInfo-body']}>
							<tr className={styles['bookingInfo-item']}>
								<td>Дата прибытия:</td>
								<td>
									<span>{`${getDateByNumber(dateComing, {
										day: 'numeric',
										month: 'long',
										year: 'numeric',
									})}`}</span>
								</td>
							</tr>
							<tr className={styles['bookingInfo-item']}>
								<td>Дата выезда:</td>
								<td>
									<span>{`${getDateByNumber(dateExit, {
										day: 'numeric',
										month: 'long',
										year: 'numeric',
									})}`}</span>
								</td>
							</tr>
							<tr className={styles['bookingInfo-item']}>
								<td>Количество гостей:</td>
								<td>
									<span>{`${getGuestMessage([
										{ type: 'adults', count: adults },
										{ type: 'babies', count: babies || 0 },
									])}
                                    ${getBadyMessage(babies || 0)}
                                    `}</span>
								</td>
							</tr>
							<tr className={styles['bookingInfo-item']}>
								<td>Стоимость бронирования:</td>
								<td>
									<span>{`${totalPrice}`}&#8381;</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className={styles['bookingCard-btns']}>
					<div className="w-full">
						<RoomItem info={room as IRoom} />
					</div>
					<Link href={`/rooms/${roomId}`}>
						<a>
							<Button background="primary" className="w-full p-2 mt-6 text-sm">
								Перейти на страницу номера
							</Button>
						</a>
					</Link>
					<div className="mt-5">
						<MuiButton
							// size="large"
							className="w-full"
							variant="outlined"
							color="error"
							onClick={() => deleteHandler(_id)}
						>
							Отменить бронирование
						</MuiButton>
					</div>
				</div>
			</div>
		</Paper>
	) : (
		<div>Loading...</div>
	)
}

export default BookingCard
