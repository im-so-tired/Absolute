import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { FC } from 'react'

import { genderType } from '@/shared/types/user'

interface IGenderChooseProp {
	value: genderType
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	name: string
}
const ChooseGender: FC<IGenderChooseProp> = ({ ...rest }) => {
	return (
		<FormControl className="mt-4">
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				className="flex flex-row"
				{...rest}
			>
				<FormControlLabel value="female" control={<Radio />} label="Женщина" />
				<FormControlLabel value="male" control={<Radio />} label="Мужчина" />
			</RadioGroup>
		</FormControl>
	)
}

export default ChooseGender
