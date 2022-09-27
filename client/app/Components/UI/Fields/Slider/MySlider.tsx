import { Slider } from '@mui/material'
import { FC } from 'react'

import { ISliderProps } from './Slider.interface'

function valueLabelFormat(value: number) {
	return `${value}₽`
}
const MySlider: FC<ISliderProps> = ({ max = 15000, min = 0, ...rest }) => {
	return (
		<Slider
			getAriaLabel={() => 'Temperature range'}
			valueLabelDisplay="auto"
			valueLabelFormat={valueLabelFormat}
			max={max}
			min={min}
			{...rest}
		/>
	)
}

export default MySlider
