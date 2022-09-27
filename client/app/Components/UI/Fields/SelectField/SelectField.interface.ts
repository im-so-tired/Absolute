import { IOptions } from '@/shared/types/select'

export interface ISelectFieldProps {
	id: string
	label: string
	className?: string
	options: IOptions[]
}
