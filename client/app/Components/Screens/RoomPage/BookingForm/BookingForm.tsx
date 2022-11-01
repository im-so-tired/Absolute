import { FC, useState } from 'react'

import CalculateCost from '@/components/Common/CalculateCost/CalculateCost'
import CountPeople from '@/components/Common/CountPeople/CountPeople'
import DateFields from '@/components/Common/DateFields/DateFields'
import Price from '@/components/Common/RoomInfo/Price'
import RoomNumber from '@/components/Common/RoomInfo/RoomNumber'
import Button from '@/components/UI/Button/Button'
import MaterialIcon from '@/components/UI/MaterialIcon'

import { useAppSelector } from '@/hooks/Redux'

import { IBookingForm } from '../Room.interface'

import styles from './BookingForm.module.scss'
import { useBooking } from './useBooking'

const BookingForm: FC<IBookingForm> = ({
	favourites,
	favouritesHandler,
	roomInfo,
}) => {
	const { countBooking, mutateAsync } = useBooking()
	console.log(countBooking)
	const [resultPrice, setResultPrice] = useState<number>(0)
	const { date, countPeople } = useAppSelector(state => state.mainForm)
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
		<div className={styles.form}>
			<button className={styles.buttonFavourites} onClick={favouritesHandler}>
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
				>
					Забронировать
				</Button>
			</div>
		</div>
	)
}

export default BookingForm
