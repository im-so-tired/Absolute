const monthValues = {
	narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
	abbreviated: [
		'янв.',
		'фев.',
		'март',
		'апр.',
		'май',
		'июнь',
		'июль',
		'авг.',
		'сент.',
		'окт.',
		'нояб.',
		'дек.',
	],
	wide: [
		'январь',
		'февраль',
		'март',
		'апрель',
		'май',
		'июнь',
		'июль',
		'август',
		'сентябрь',
		'октябрь',
		'ноябрь',
		'декабрь',
	],
}
const formattingMonthValues = {
	narrow: ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'],
	abbreviated: [
		'янв.',
		'фев.',
		'мар.',
		'апр.',
		'мая',
		'июн.',
		'июл.',
		'авг.',
		'сент.',
		'окт.',
		'нояб.',
		'дек.',
	],
	wide: [
		'Января',
		'Февраля',
		'Mарта',
		'Апреля',
		'Мая',
		'Июня',
		'Июля',
		'Августа',
		'Сентября',
		'Октября',
		'Ноября',
		'Декабря',
	],
}
const monthLocalize: any = () => ({
	values: formattingMonthValues,
	defaultWidth: 'wide',
	formattingValues: formattingMonthValues,
	defaultFormattingWidth: 'wide',
})
export default monthLocalize

export function buildLocalizeFn(arg0: {
	values: any
	defaultWidth: string
	formattingValues: any
	defaultFormattingWidth: string
}): (...args: any[]) => any {
	return () => arg0
}
