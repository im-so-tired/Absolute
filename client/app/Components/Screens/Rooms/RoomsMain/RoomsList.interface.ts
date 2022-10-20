import { iconsTypes } from '@/shared/types/iconTypes'

export interface IFilters {
	searchTerm: string
	page: number
	perPage: string
	sortOption: string
}
export interface IComfortsData {
	hasWifi: iconsTypes
	hasConditioner: iconsTypes
	hasWorkSpace: iconsTypes
}
