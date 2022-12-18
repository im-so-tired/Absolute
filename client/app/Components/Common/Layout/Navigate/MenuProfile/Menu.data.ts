import { IMenuItem } from './MenuItem.interface'

export const DataMenuItem: IMenuItem[] = [
	{
		id: 1,
		title: 'Профиль',
		icon: 'MdPersonOutline',
		link: '',
	},
	{
		id: 2,
		title: 'Панель администратора',
		icon: 'MdAddModerator',
		link: '/dashboard',
		forAdmin: true,
	},
	{
		id: 3,
		title: 'Мои бронирования',
		icon: 'MdStarBorder',
		link: '/booking',
	},
	{
		id: 4,
		title: 'Понравилось',
		icon: 'MdFavoriteBorder',
		link: '/likes',
	},
	{
		id: 5,
		title: 'Избранное',
		icon: 'MdTurnedInNot',
		link: '/favorites',
	},
]
