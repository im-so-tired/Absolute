import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FC } from 'react'

import { typeRoom } from '@/shared/types/room.types'

interface IRoomTypeChooseProp {
	value: typeRoom
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	name: string
}
const ChooseRoomType: FC<IRoomTypeChooseProp> = ({ ...rest }) => {
	return (
		<FormControl className="mt-2">
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				className="flex flex-row"
				{...rest}
			>
				<FormControlLabel
					value="Standart"
					control={<Radio />}
					label="Стандарт"
				/>
				<FormControlLabel value="Lux" control={<Radio />} label="Люкс" />
			</RadioGroup>
		</FormControl>
	)
}

export default ChooseRoomType
