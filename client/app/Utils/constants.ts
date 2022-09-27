import { ILabel } from '@/components/UI/Fields/CheckBox/CheckBox.interface'

import { ICountPeople } from '@/shared/types/countPeople'
import { IOptions } from '@/shared/types/select'

export const arrayTypePeople: ICountPeople[] = [
	{ type: 'Взрослые', count: 1 },
	{ type: 'Дети', count: 0 },
	{ type: 'Младенцы', count: 0 },
]

export const arrayComforts: ILabel[] = [
	{ text: 'Wi-Fi', slug: 'hasWifi' },
	{ text: 'Кондиционер', slug: 'hasConditioner' },
	{ text: 'Рабочее место', slug: 'hasWorkSpace' },
]

export const arrayTerms: ILabel[] = [
	{ text: 'Можно c питомцами', slug: 'canPets' },
	{ text: 'Можно курить', slug: 'canSmoke' },
	{ text: 'Можно пригласить гостей (до 10 человек)', slug: 'canInvite' },
]

export const arrayReach: ILabel[] = [
	{ text: 'Ширина коридоров в номере не менее 91см', slug: 'hasWideCorridor' },
	{
		text: 'На 1 этаже вас встретит специалист и проводит до номера',
		slug: 'hasDisabledAssistant',
	},
]

export const sortOption: IOptions[] = [
	{ value: 'Сортировать', label: 'Сортировать', isDisabled: true },
	{ value: 'des', label: 'По убыванию' },
	{ value: 'asc', label: 'По возрастанию' },
	{ value: 'popular', label: 'Популярное' },
	{ value: 'high-rating', label: 'Высокий рейтинг' },
	{ value: 'cheap-first', label: 'Сначала дешёвые' },
	{ value: 'dear-first', label: 'Сначала дорогие' },
]

export const amountOption: IOptions[] = [
	{ value: 'Сортировать', label: 'Отображать по', isDisabled: true },
	{ value: '6', label: '6' },
	{ value: '12', label: '12' },
	{ value: '18', label: '18' },
	{ value: '24', label: '24' },
]
