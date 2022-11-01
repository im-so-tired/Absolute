import classNames from 'classnames'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import styles from './RoomsList.module.scss'

const Loader: FC<{ perPage: number }> = ({ perPage }) => {
	const array = []
	for (let i = 0; i < perPage; i++) {
		array.push(i)
	}
	return (
		<div className={styles.gridContainer}>
			{array.map(index => (
				<div key={index} className="-z-2">
					<Skeleton height={200} />
					<Skeleton height={30} className="mt-3" />
					<Skeleton height={30} className="mt-3" />
				</div>
			))}
		</div>
	)
}

export default Loader
