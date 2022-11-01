import { FC } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import styles from '../Room.module.scss'

import { IRoomDetails } from './RoomDetails.data'

const DetailsItem: FC<{ data: IRoomDetails }> = ({ data }) => {
	return (
		<div className={styles.detailsItem}>
			<div className="mr-2">
				<MaterialIcon color="#BC9CFF" name={data.icon} />
			</div>
			<div>
				<h4>{data.title}</h4>
				<p>{data.description}</p>
			</div>
		</div>
	)
}

export default DetailsItem
