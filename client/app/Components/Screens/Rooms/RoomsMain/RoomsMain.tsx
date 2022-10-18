import React, { FC, useState } from 'react'

import styles from '../Rooms.module.scss'

import { IFilters } from './RoomsList.interface'
import RoomsList from './RoomsList/RoomsList'
import RoomsOption from './RoomsOption'

const RoomsMain: FC = () => {
	const [filters, setFilters] = useState<IFilters>({
		page: 1,
		perPage: '6',
		searchTerm: '',
		sortOption: 'des',
	})
	return (
		<div className={styles.roomsMain}>
			<RoomsOption filters={filters} setFilters={setFilters} />
			<RoomsList filters={filters} />
		</div>
	)
}

export default RoomsMain
