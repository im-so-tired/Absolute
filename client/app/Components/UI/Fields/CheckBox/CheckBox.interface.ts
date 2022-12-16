import {
	comfortsType,
	reachType,
	termsType,
} from '@/store/Slices/MainForm/MainForm.interface'

export interface ILabel {
	slug: comfortsType | termsType | reachType
	text: string
	title?: string
}
export interface ICheckBox {
	label: ILabel
	className?: string
	onChange: (slug: comfortsType & termsType & reachType) => void
	value: boolean
	name?: string
}
