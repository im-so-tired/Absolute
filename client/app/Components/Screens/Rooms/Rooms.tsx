import { FC } from 'react'

import Container from '@/components/Common/Container/Container'

import RoomsForm from './RoomsForm/RoomsForm'
import RoomsList from './RoomsList/RoomsList'

const Rooms: FC = () => {
	return (
		<div className="mt-4">
			<Container>
				<div className="flex">
					<RoomsForm />
					<RoomsList />
				</div>
			</Container>
		</div>
	)
}

export default Rooms
