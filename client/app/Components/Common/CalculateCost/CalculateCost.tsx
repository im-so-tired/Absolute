import { Tooltip } from '@mui/material'
import cn from 'classnames'
import { differenceInCalendarDays, fromUnixTime } from 'date-fns'
import React, { FC, useEffect } from 'react'

import { IDateOfStay } from '@/store/Slices/MainForm/MainForm.interface'

import styles from './Cost.module.scss'
import TooltipComponent from './TooltipComponent'

interface ICalculateCost {
	price: number
	className?: string
	date: IDateOfStay
	changePrice: (value: number) => void
}
const CalculateCost: FC<ICalculateCost> = ({
	price,
	className,
	date,
	changePrice,
}) => {
	const days = differenceInCalendarDays(
		fromUnixTime(date.dateExit ?? 0),
		fromUnixTime(date.dateComing ?? 0)
	)
	const priceDetails = {
		totalPrice: days * price,
		discount: 0,
		services: 300,
	}
	const resultPrice =
		priceDetails.totalPrice - priceDetails.discount + priceDetails.services
	useEffect(() => {
		changePrice(resultPrice)
	}, [date])
	return (
		<div className={cn(styles.container, className)}>
			<div>
				<span>
					{price}₽ x {days} суток
				</span>
				<span>{priceDetails.totalPrice}₽</span>
			</div>
			<div>
				<p className="flex items-center">
					<span className="inline-block mr-2">Сбор за доп. услуги</span>
					<Tooltip
						title="Чаевые для персонала уже включены в счёт"
						placement="top"
					>
						<TooltipComponent />
					</Tooltip>
				</p>
				<span>300₽</span>
			</div>
			<div className={styles.result}>
				<span>Итого</span>
				<span>{resultPrice}₽</span>
			</div>
		</div>
	)
}

export default CalculateCost
