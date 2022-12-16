import { MultiValue, SingleValue } from 'react-select'

import { IOptions } from '@/shared/types/select'

export interface IMultiSelectFieldProps {
	id: string
	label: string
	className?: string
	labelClassName?: string
	name?: string
	options: IOptions[]
	defaultValue?: string
	value: string[]
	onChange: (newValue: MultiValue<IOptions>) => void
}
