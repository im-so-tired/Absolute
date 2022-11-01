import { FC } from 'react'

import Rating from '@/components/Common/RoomInfo/Rating'

import styles from './Room.module.scss'

const RoomRating: FC<{ value: number }> = ({ value }) => {
	return (
		<div className={styles.rating}>
			<h3 className={styles.heading}>Впечатления от номера</h3>
			<p>
				Общая оценка: <span>{value} из 5</span>
			</p>
			<Rating className={styles.rate} readOnly value={value} />
		</div>
	)
}

export default RoomRating
