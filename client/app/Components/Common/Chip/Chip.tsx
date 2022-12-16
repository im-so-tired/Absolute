import { ChipProps, Chip as MuiChip } from '@mui/material'
import { FC } from 'react'

const Chip: FC<ChipProps> = ({ label, color, ...props }) => {
	return <MuiChip label={label} color={color || 'primary'} {...props} />
}

export default Chip
