import { FC, memo, useState } from 'react'

import CalculateCost from '@/components/Common/CalculateCost/CalculateCost'
import CountPeople from '@/components/Common/CountPeople/CountPeople'
import DateFields from '@/components/Common/DateFields/DateFields'
import Price from '@/components/Common/RoomInfo/Price'
import RoomNumber from '@/components/Common/RoomInfo/RoomNumber'
import Button from '@/components/UI/Button/Button'
import MaterialIcon from '@/components/UI/MaterialIcon'

import Modal from '../Modal'
import { IBookingForm } from '../Room.interface'

import styles from './BookingForm.module.scss'
import { useBooking } from './useBooking'

const BookingForm: FC<IBookingForm> = memo(
	({ favourites, favouritesHandler, roomInfo }) => {
		const {
			countBooking,
			mutateAsync,
			buttonActive,
			error,
			openModal,
			handleClose,
			date,
			countPeople,
		} = useBooking()
		const [resultPrice, setResultPrice] = useState<number>(0)
		const changePrice = (value: number) => {
			setResultPrice(value)
		}
		const clickHandler = () => {
			mutateAsync({
				dateComing: date.dateComing || 0,
				dateExit: date.dateExit || 0,
				adults: countPeople[0].count + countPeople[1].count,
				babies: countPeople[2].count,
				roomId: roomInfo.id,
				totalPrice: resultPrice,
			})
		}
		const bool = favourites.filter(id => id === roomInfo.id).length === 0
		return (
			<div className={styles.wrapper}>
				<div className={styles.form}>
					<Modal open={openModal} handleClose={handleClose} date={date} />
					<button
						className={styles.buttonFavourites}
						onClick={favouritesHandler}
					>
						<MaterialIcon name={bool ? 'MdStarBorder' : 'MdStar'} />
					</button>
					<div className="w-full">
						<div className={styles.header}>
							<RoomNumber
								roomNumber={roomInfo.number}
								type={roomInfo.type}
								size="big"
							/>
							<Price price={roomInfo.price} />
						</div>
						<DateFields className={styles.dateFields} />
						<CountPeople className="mt-4 text-sm" />
						<CalculateCost
							countBooking={countBooking}
							price={roomInfo.price}
							date={date}
							className="mt-4"
							changePrice={changePrice}
						/>
						<Button
							background="primary"
							className="mt-6 w-full py-3"
							endIcon="MdChevronRight"
							onClick={clickHandler}
							disabled={!buttonActive}
						>
							Забронировать
						</Button>
					</div>
					{error && <span className="text-red-600 text-sm mt-2">{error}</span>}
				</div>
			</div>
		)
	}
)

export default BookingForm
