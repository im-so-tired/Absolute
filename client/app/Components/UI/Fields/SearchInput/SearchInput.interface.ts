import { ChangeEvent, InputHTMLAttributes } from 'react'

export interface ISearchInputProps
	extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	className?: string
	name: string
}
