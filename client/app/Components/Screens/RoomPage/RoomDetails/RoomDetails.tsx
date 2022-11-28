import { FC, memo } from 'react'

import styles from '../Room.module.scss'

import DetailsItem from './DetailsItem'
import { roomDetails } from './RoomDetails.data'

const RoomDetails: FC = memo(() => {
	return (
		<div className={styles.details}>
			<h3 className={styles.heading}>Сведения о номере</h3>
			{roomDetails.map(detail => (
				<DetailsItem key={detail.title} data={detail} />
			))}
		</div>
	)
})

export default RoomDetails
