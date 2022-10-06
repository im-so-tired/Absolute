import DateFnsAdapter from '@date-io/date-fns'
import TextField from '@mui/material/TextField'
import { DatePicker } from '@mui/x-date-pickers'
import { fromUnixTime } from 'date-fns'
import { FC, useState } from 'react'

import { IDateOfStayProps } from './DateOfStay.interface'

const DateOfStay: FC<IDateOfStayProps> = ({ defaultDate, ...rest }) => {
	// const result = typeof value === 'number' ? fromUnixTime(value) : value
	return (
		<DatePicker
			inputFormat="dd.LL.yyyy"
			mask="__.__.____"
			renderInput={params => <TextField {...params} />}
			{...rest}
		/>
	)
}

export default DateOfStay
