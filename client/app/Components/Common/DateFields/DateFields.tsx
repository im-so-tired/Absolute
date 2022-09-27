import DateFnsAdapter from '@date-io/date-fns'
import cn from 'classnames'
import { addDays } from 'date-fns'
import { FC } from 'react'

import DateOfStay from '@/components/UI/Fields/DateOfStay/DateOfStay'

import { useAppSelector } from '@/hooks/Redux'
import { useMainFormActions } from '@/hooks/useActions'

const DateFields: FC<{ className?: string }> = ({ className }) => {
	const dateFns = new DateFnsAdapter()
	const minDateComing = dateFns.date(Date.now())
	const { dateComing, dateExit } = useAppSelector(state => state.mainForm.date)
	const minDateExit = addDays(dateComing || dateFns.date(Date.now()), 1)
	const { changeDateComing, changeDateExit } = useMainFormActions()
	return (
		<div className={className}>
			<DateOfStay
				label="Дата прибытия"
				minDate={minDateComing}
				defaultDate={dateComing}
				value={dateComing}
				onChange={newValue => changeDateComing(newValue)}
			/>
			<DateOfStay
				label="Дата выезда"
				minDate={minDateExit}
				defaultDate={dateExit}
				value={dateExit}
				onChange={newValue => changeDateExit(newValue)}
			/>
		</div>
	)
}

export default DateFields
