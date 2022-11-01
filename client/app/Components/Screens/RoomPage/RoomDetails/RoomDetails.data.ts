import { iconsTypes } from '@/shared/types/iconTypes'

export interface IRoomDetails {
	icon: iconsTypes
	title: string
	description: string
}
export const roomDetails: IRoomDetails[] = [
	{
		title: 'Комфорт',
		description: 'Шумопоглащающие стены',
		icon: 'MdWifiTetheringOff',
	},
	{
		title: 'Удобство',
		description: 'Окно в каждой из спален',
		icon: 'MdApartment',
	},
	{
		title: 'Уют',
		description: 'Номер оснащен камином',
		icon: 'MdWhatshot',
	},
]
