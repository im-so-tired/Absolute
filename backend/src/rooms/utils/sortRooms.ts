import { RoomsModel } from '../rooms.model'

export const sortRooms = (rooms: RoomsModel[], sortOption: string) => {
	switch (sortOption) {
		case 'des':
			rooms.sort((a, b) => a.roomNumber - b.roomNumber)
			break
		case 'asc':
			rooms.sort((a, b) => b.roomNumber - a.roomNumber)
			break
		case 'popular':
			rooms.sort((a, b) => a.countReviews - b.countReviews)
			break
		case 'high-rating':
			rooms.sort((a, b) => a.rate - b.rate)
			break
		case 'cheap-first':
			rooms.sort((a, b) => a.price - b.price)
			break
		case 'dear-first':
			rooms.sort((a, b) => b.price - a.price)
			break
	}
	return rooms
}
