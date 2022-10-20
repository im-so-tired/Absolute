import { Rating } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

import ImageSlider from '@/components/Common/ImageSlider/ImageSlider'

import { IRoom } from '@/shared/types/room.types'

import Comforts from './Comforts'
import styles from './RoomsList.module.scss'

const RoomItem: FC<{ info: IRoom }> = ({ info }) => {
	return (
		<div className={styles.roomItem}>
			<Comforts arrayComforts={info.comforts} />
			<div className={styles.top}>
				<ImageSlider imgArray={info.images} />
			</div>
			<Link href={`rooms/${info._id}`}>
				<a>
					<div className="px-5 py-[10px]">
						<div className={styles.middle}>
							<p>
								<span className={styles.nomer}>№</span>
								{info.roomNumber}
							</p>
							<p>
								<span className="font-semibold">{info.price}&#8381;</span> в
								сутки
							</p>
						</div>
						<div className={styles.bottom}>
							<Rating
								className={styles.rate}
								name="read-only"
								value={info.rate}
								readOnly
							/>
							<span className={styles.reviews}>
								{info.countReviews} Отзывов
							</span>
						</div>
					</div>
				</a>
			</Link>
		</div>
	)
}

export default RoomItem
