import { RoomsModel } from '../rooms.model'
export const sliceRoosm = (
	rooms: RoomsModel[],
	page: number,
	perPage: number
) => {
	const lastIndex = page * perPage
	const firstIndex = lastIndex - perPage
	return rooms.slice(firstIndex, lastIndex)
}
