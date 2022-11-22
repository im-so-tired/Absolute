import { FC } from 'react'

import Container from '@/components/Common/Container/Container'

import RoomsForm from './RoomsForm/RoomsForm'
import RoomsMain from './RoomsMain/RoomsMain'

const Rooms: FC = () => {
	return (
		<div className="mt-4">
			<Container>
				<div className="flex">
					<RoomsForm />
					<RoomsMain />
				</div>
			</Container>
		</div>
	)
}

export default Rooms
