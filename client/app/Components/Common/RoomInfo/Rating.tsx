import { Rating as Rate, RatingProps } from '@mui/material'
import cn from 'classnames'
import React, { FC } from 'react'

import styles from './Room.module.scss'

const Rating: FC<RatingProps> = ({ className, ...rest }) => {
	return <Rate className={cn(styles.rate, className)} {...rest} />
}

export default Rating
