import { formatDistanceToNow, getUnixTime } from 'date-fns'
import { ru } from 'date-fns/locale'

export const updateTime = (
	createdAt: Date | number,
	updatedAt: Date | number
) => {
	let value
	getUnixTime(createdAt) === getUnixTime(updatedAt)
		? (value = `Опубликован: ${formatDistanceToNow(createdAt, {
				locale: ru,
		  })} назад`)
		: (value = `Редактирован: ${formatDistanceToNow(updatedAt, {
				locale: ru,
		  })} назад`)

	return value
}
