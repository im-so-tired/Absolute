import { FC } from 'react'

import styles from './Room.module.scss'

const Price: FC<{ price: number }> = ({ price }) => {
	return (
		<p className={styles.price}>
			<span className="font-semibold">{price}&#8381;</span> в сутки
		</p>
	)
}

export default Price
