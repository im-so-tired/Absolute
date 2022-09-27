export interface ISliderProps {
	className?: string
	onChange: (event: Event, newValue: number | number[]) => void
	value: number[]
	max?: number
	min?: number
}
