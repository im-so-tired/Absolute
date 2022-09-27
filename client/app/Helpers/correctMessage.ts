import { ICountPeople } from '@/shared/types/countPeople'

export const getBadyMessage = (count: number) => {
	const babyMessage =
		count === 0
			? ''
			: `${count} ${
					count > 1 ? (count > 4 ? 'младенцев' : 'младенца') : 'младенец'
			  }`
	return babyMessage
}
export const getGuestMessage = (array: ICountPeople[]) => {
	const countGuest = array.reduce(function (accumulator, currentValue) {
		return accumulator + currentValue.count
	}, 0)
	const countGuestMessage = `${countGuest} ${
		countGuest > 1 ? (countGuest > 4 ? 'гостей' : 'гостя') : 'гость'
	}`
	return countGuestMessage
}
