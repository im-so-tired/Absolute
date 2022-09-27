import { FC, useEffect, useState } from 'react'

import MySlider from '@/components/UI/Fields/Slider/MySlider'
import { useDebounceSlider } from '@/components/UI/Fields/Slider/useDebouceSlider'

import { useAppSelector } from '@/hooks/Redux'
import { useMainFormActions } from '@/hooks/useActions'

import styles from './PriceRange.module.scss'

const PriceRange: FC = () => {
	const priceRangeValue = useAppSelector(state => state.mainForm.priceRange)
	const { changePriceRange } = useMainFormActions()
	const [value, setValue] = useState<number[]>(priceRangeValue)
	const debounceValue = useDebounceSlider(value, 200)
	useEffect(() => {
		changePriceRange(debounceValue)
	}, [debounceValue])
	useEffect(() => {
		setValue(priceRangeValue)
	}, [priceRangeValue])
	return (
		<div className={styles.priceRange}>
			<div>
				<h2>Диапозон цены</h2>
				<span>{`${priceRangeValue[0]}₽ - ${priceRangeValue[1]}₽`}</span>
			</div>
			<MySlider
				onChange={(event: Event, newValue: number | number[]) =>
					setValue(newValue as number[])
				}
				value={value}
			/>
			<span>Стоимость за сутки пребывания в номере</span>
		</div>
	)
}

export default PriceRange
