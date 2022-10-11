import { IQueryFilter } from '../rooms.interface'

export const parametrHandler = (query: IQueryFilter) => {
	if (!query.price) query.price = [0, 15000]
	const mainObj: any = {
		$and: [
			{ price: { $lte: query.price[1] } },
			{ price: { $gte: query.price[0] } },
		],
	}
	if (query.adults) mainObj.adults = { $gte: query.adults }
	if (query.babies) mainObj.babies = { $gte: query.babies }
	if (query.comforts) mainObj.comforts = { $all: query.comforts }
	if (query.livingСonditions)
		mainObj.livingСonditions = { $all: query.livingСonditions }
	if (query.accessibility) mainObj.accessibility = { $all: query.accessibility }
	if (query.type) mainObj.type = query.type
	return mainObj
}
