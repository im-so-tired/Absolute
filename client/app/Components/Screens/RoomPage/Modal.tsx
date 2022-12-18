import { format, fromUnixTime } from 'date-fns'
import 'date-fns'
import { ru } from 'date-fns/locale'
import dynamic from 'next/dynamic'
import { FC, useEffect, useState } from 'react'

import Button from '@/components/UI/Button/Button'
import MaterialIcon from '@/components/UI/MaterialIcon'
import ModalBase, { IModal } from '@/components/UI/Modal/Modal'

import { useAuth } from '@/hooks/useAuth'

import { IDateOfStay } from '@/store/Slices/MainForm/MainForm.interface'

import styles from './Room.module.scss'

interface IModalProps extends IModal {
	date: IDateOfStay
}
const Modal: FC<IModalProps> = ({ date, open, handleClose }) => {
	const user = useAuth()
	// const [user, setUser] = useState<any>(null)
	// useEffect(() => {
	// 	setUser(currentUser)
	// }, [currentUser])
	const dateComing = format(
		fromUnixTime(date.dateComing || Date.now()),
		'd MMMM y',
		{
			locale: ru,
		}
	)
	const dateExit = format(
		fromUnixTime(date.dateExit || Date.now()),
		'd MMMM y',
		{
			locale: ru,
		}
	)
	return (
		<ModalBase open={open} handleClose={handleClose}>
			<div className={styles.modal}>
				<h4>Бронирование номера</h4>
				<h3>
					<span>Номер успешно забронирован</span>
					<MaterialIcon name="MdOutlineCheckCircleOutline" />
				</h3>
				<div className={styles.dateOfStay}>
					<p>
						<span>Дата прибытия:</span>
						<span>{dateComing}</span>
					</p>
					<p>
						<span>Дата выезда:</span>
						<span>{dateExit}</span>
					</p>
				</div>
				<div className={styles.buttons}>
					<Button background="primary" link="/rooms" className="p-2 mr-2">
						Назад
					</Button>
					<Button
						background="base"
						link={`/profile/${user?.id}/booking`}
						className="p-2"
					>
						Мои бронирования
					</Button>
				</div>
			</div>
		</ModalBase>
	)
}

export default Modal
