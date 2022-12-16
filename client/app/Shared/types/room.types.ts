import {
	comfortsType,
	reachType,
	termsType,
} from '@/store/Slices/MainForm/MainForm.interface'

export type typeRoom = 'Lux' | 'Standart'
export interface IRoom {
	_id: string
	livingСonditions: termsType[]
	comforts: comfortsType[]
	accessibility: reachType[]
	countReviews: number
	images: string[]
	price: number
	rate: number
	roomNumber: number
	type: typeRoom
	__v: number
}

export interface booking {
	_id: string
	userId: string
	roomId: string
	dateComing: number
	dateExit: number
	adults: number
	babies?: number
	totalPrice: number
}
