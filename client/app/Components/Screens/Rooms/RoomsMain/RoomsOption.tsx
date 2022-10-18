import { ChangeEvent, FC, useEffect, useState } from 'react'

import SearchInput from '@/components/UI/Fields/SearchInput/SearchInput'
import SelectField from '@/components/UI/Fields/SelectField/SelectField'

import { useDebounce } from '@/hooks/useDebounce'

import { amountOption, sortOption } from '@/utils/constants'

import styles from '../Rooms.module.scss'

import { IFilters } from './RoomsList.interface'

const RoomsOption: FC<{ filters: IFilters; setFilters: any }> = ({
	filters,
	setFilters,
}) => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	const debouncedValue = useDebounce(searchTerm, 500)
	useEffect(() => {
		setFilters((prev: IFilters) => ({ ...prev, searchTerm: debouncedValue }))
	}, [debouncedValue])
	return (
		<div className={styles.roomsOption}>
			<div className={styles.header}>
				<SearchInput
					name="searc rooms"
					label="Поиск"
					className={styles.search}
					placeholder="Поиск по номеру..."
					value={searchTerm}
					onChange={handleChange}
				/>
				<SelectField
					id="select rooms"
					label="Сортировать"
					options={sortOption}
					className="w-[200px] mr-4"
					value={filters.sortOption}
					onChange={newValue =>
						setFilters((prev: IFilters) => ({
							...prev,
							sortOption: newValue?.value || 'des',
						}))
					}
				/>
				<SelectField
					id="amount rooms"
					label="Отображать по"
					options={amountOption}
					className="w-[140px]"
					value={filters.perPage}
					onChange={newValue =>
						setFilters((prev: IFilters) => ({
							...prev,
							perPage: newValue?.value || '12',
						}))
					}
				/>
			</div>
		</div>
	)
}

export default RoomsOption
