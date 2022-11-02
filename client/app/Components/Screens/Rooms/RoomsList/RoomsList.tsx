import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, FC, useState } from 'react'

import SearchInput from '@/components/UI/Fields/SearchInput/SearchInput'
import SelectField from '@/components/UI/Fields/SelectField/SelectField'

import { useAppSelector } from '@/hooks/Redux'
import { useDebounce } from '@/hooks/useDebounce'

import { IRoom } from '@/shared/types/room.types'

import { RoomsService } from '@/services/Rooms/Rooms.service'

import { amountOption, sortOption } from '@/utils/constants'

import styles from './RoomsList.module.scss'

const RoomsList: FC = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const debouncedValue = useDebounce(searchValue, 500)
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}
	const formValue = useAppSelector(state => state.mainForm)
	// const {
	// 	data: roomsList,
	// 	isLoading,
	// 	refetch,
	// } = useQuery(
	// 	['get rooms', formValue, debouncedValue],
	// 	() => RoomsService.getRooms(formValue, debouncedValue),
	// 	{
	// 		select: ({ data }): IRoom[] => data,
	// 	}
	// )

	return (
		<div className={styles.roomsList}>
			<div className={styles.header}>
				<SearchInput
					name="searc rooms"
					label="Поиск"
					className={styles.search}
					placeholder="Поиск по номеру..."
					value={searchValue}
					onChange={handleChange}
				/>
				<SelectField
					id="select rooms"
					label="Сортировать"
					options={sortOption}
					className="w-[200px] mr-4"
					defaultValue="des"
				/>
				<SelectField
					id="amount rooms"
					label="Отображать по"
					options={amountOption}
					className="w-[140px]"
					defaultValue="12"
				/>
			</div>
		</div>
	)
}

export default RoomsList
