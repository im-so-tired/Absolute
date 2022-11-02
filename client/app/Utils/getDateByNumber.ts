export const getDateByNumber = (
	value: number,
	options?: Intl.DateTimeFormatOptions
) => {
	return new Date(value * 1000).toLocaleDateString('ru-RU', options)
}
