import { iconsTypes } from '@/shared/types/iconTypes'

export interface ISidebarItem {
	id: number
	title: string
	icon: iconsTypes
	link: string
	forAdmin: boolean
}
