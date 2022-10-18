import { SingleValue } from 'react-select'

import { IOptions } from '@/shared/types/select'

export interface ISelectFieldProps {
	id: string
	label: string
	className?: string
	options: IOptions[]
	defaultValue?: string
	value: string
	onChange: (newValue: SingleValue<IOptions>) => void
}
