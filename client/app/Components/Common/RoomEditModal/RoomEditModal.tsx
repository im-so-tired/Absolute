import 'date-fns'
import { FC } from 'react'

import Button from '@/components/UI/Button/Button'
import MaterialIcon from '@/components/UI/MaterialIcon'
import ModalBase, { IModal } from '@/components/UI/Modal/Modal'

import { IRoom } from '@/shared/types/room.types'

import styles from './RoomEditModal.module.scss'
import RoomEditModalForm from './RoomEditModalForm'

interface IModalProps extends IModal {
	roomData: IRoom
	roomsRefetch: any
}
const Modal: FC<IModalProps> = ({
	roomData,
	open,
	handleClose,
	roomsRefetch,
}) => {
	return (
		<ModalBase open={open} handleClose={handleClose}>
			<div className={styles.modal}>
				<h4>Редактирование</h4>
				<h3>
					<span>Редактировать номер {roomData.roomNumber}</span>
				</h3>
				<RoomEditModalForm
					roomsRefetch={roomsRefetch}
					room={roomData}
					handleClose={handleClose}
				/>
				{/* <div className={styles.dateOfStay}>
					<p>
						<span>Дата прибытия:</span>
						<span>{dateComing}</span>
					</p>
					<p>
						<span>Дата выезда:</span>
						<span>{dateExit}</span>
					</p>
				</div> */}
				{/* <div className={styles.buttons}>
					<Button background="primary" link="/rooms" className="p-2 mr-2">
						Назад
					</Button>
					<Button background="base" link="/profile" className="p-2">
						Мои бронирования
					</Button>
				</div> */}
			</div>
		</ModalBase>
	)
}

export default Modal
