export interface IDateOfStayProps {
	label: string
	minDate?: Date
	maxDate?: Date
	defaultDate: Date | number | null
	className?: string
	value: Date | number | null
	name?: string
	onChange: (value: Date | number | null, keyboardInputValue?: string) => void
}
