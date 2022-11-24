import { Rating } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

import ImageSlider from '@/components/Common/ImageSlider/ImageSlider'
import Price from '@/components/Common/RoomInfo/Price'
import RoomNumber from '@/components/Common/RoomInfo/RoomNumber'

import { IRoom } from '@/shared/types/room.types'

import Comforts from './Comforts'
import styles from './RoomsList.module.scss'
import { countReviews } from '@/helpers/countReviews'

const RoomItem: FC<{ info: IRoom }> = ({ info }) => {
	return (
		<div className={styles.roomItem}>
			<div className={styles.top}>
				<ImageSlider imgArray={info.images} />
			</div>
			<Link href={{ pathname: '/rooms/[id]', query: { id: info._id } }}>
				<a>
					<div className="px-5 py-[10px]">
						<div className={styles.middle}>
							<RoomNumber roomNumber={info.roomNumber} type={info.type} />
							<Price price={info.price} />
						</div>
						<div className={styles.bottom}>
							<Rating
								className={styles.rate}
								name="read-only"
								value={info.rate}
								readOnly
							/>
							<span className={styles.reviews}>
								{countReviews(info.countReviews)}
							</span>
						</div>
					</div>
				</a>
			</Link>
			<Comforts arrayComforts={info.comforts} />
		</div>
	)
}

export default RoomItem
