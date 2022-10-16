import { IQueryFilter } from '../rooms.interface'

export const parametrHandler = (query: IQueryFilter) => {
	if (!query.price) query.price = [0, 15000]
	if (!query.adults) query.adults = 1
	const mainObj: any = {
		$and: [
			{ price: { $lte: query.price[1] } },
			{ price: { $gte: query.price[0] } },
		],
	}
	mainObj['maxCountPeople.adults'] = { $gte: Number(query.adults) }
	if (query.babies)
		mainObj['maxCountPeople.babies'] = { $gte: Number(query.babies) }
	if (query.comforts) mainObj.comforts = { $all: query.comforts }
	if (query.livingСonditions)
		mainObj.livingСonditions = { $all: query.livingСonditions }
	if (query.accessibility) mainObj.accessibility = { $all: query.accessibility }
	if (query.type) mainObj.type = query.type
	return mainObj
}
