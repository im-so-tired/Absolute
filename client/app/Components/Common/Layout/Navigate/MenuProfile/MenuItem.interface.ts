import { iconsTypes } from '@/shared/types/iconTypes'

export interface IMenuItem {
	id: number
	title: string
	icon: iconsTypes
	link: string
	forAdmin?: boolean
	handler?: () => void
}
