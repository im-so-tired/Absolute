import { ISidebarItem } from './SidebarItem.interface'

export const DataSidebarItem: ISidebarItem[] = [
	{
		id: 1,
		title: 'Мой профиль',
		forAdmin: false,
		icon: 'MdPersonOutline',
		link: '',
	},
	{
		id: 2,
		title: 'Панель администратора',
		forAdmin: true,
		icon: 'MdAddModerator',
		link: '/dashboard',
	},
	{
		id: 3,
		title: 'Мои Бронирования',
		forAdmin: false,
		icon: 'MdStarBorder',
		link: '/booking',
	},
	{
		id: 4,
		title: 'Понравилось',
		forAdmin: false,
		icon: 'MdFavoriteBorder',
		link: '/likes',
	},
	{
		id: 5,
		title: 'Избранное',
		forAdmin: false,
		icon: 'MdTurnedInNot',
		link: '/favorites',
	},
	{
		id: 6,
		title: 'Редактировать профиль',
		forAdmin: false,
		icon: 'MdSettings',
		link: '/edit',
	},
]
