import { typeRoom } from '@/shared/types/room.types'

interface IRoomInfo {
	id: string
	number: number
	price: number
	type: typeRoom
}
export interface IBookingForm {
	roomInfo: IRoomInfo
	favourites: string[]
	favouritesHandler: () => void
}
