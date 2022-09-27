export interface IRoom {
	_id: string
	bookings: any[]
	canInvite: boolean
	canPets: boolean
	canSmoke: boolean
	comforts: string[]
	countReviews: number
	hasDisabledAssistant: boolean
	hasWideCorridor: boolean
	images: string[]
	price: number
	rate: number
	roomNumber: number
	type: string
	__v: number
}
