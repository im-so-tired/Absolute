import { ISidebarItem } from './SidebarItem.interface'

export const DataSidebarItem: ISidebarItem[] = [
	{
		id: 1,
		title: 'Мой профиль',
		forAdmin: false,
		icon: 'MdPersonOutline',
		link: 'profile/',
	},
	{
		id: 2,
		title: 'Панель администратора',
		forAdmin: true,
		icon: 'MdPersonOutline',
		link: '/profile/dashboard',
	},
	{
		id: 3,
		title: 'Мои Бронирования',
		forAdmin: false,
		icon: 'MdPersonOutline',
		link: '/profile/booking',
	},
	{
		id: 4,
		title: 'Понравилось',
		forAdmin: false,
		icon: 'MdPersonOutline',
		link: '/profile/likes',
	},
	{
		id: 5,
		title: 'Избранное',
		forAdmin: false,
		icon: 'MdPersonOutline',
		link: '/profile/favorites',
	},
	{
		id: 6,
		title: 'Редактировать профиль',
		forAdmin: false,
		icon: 'MdPersonOutline',
		link: '/profile/edit',
	},
]
