import cn from 'classnames'
import { FC } from 'react'

import { typeRoom } from '@/shared/types/room.types'

import styles from './Room.module.scss'

const RoomNumber: FC<{
	roomNumber: number
	type: typeRoom
	size?: 'default' | 'big'
}> = ({ roomNumber, type, size = 'default' }) => {
	return (
		<p className={styles.roomNumber}>
			<span
				className={cn(styles.nomer, { [styles.hugeNomer]: size === 'big' })}
			>
				№
			</span>
			{roomNumber}
			<span className={cn(styles.type, { [styles.hugeType]: size === 'big' })}>
				{type === 'Lux' ? 'Люкс' : size === 'big' ? 'Стандарт' : null}
			</span>
		</p>
	)
}

export default RoomNumber
