import { format, fromUnixTime } from 'date-fns'
import 'date-fns'
import ru from 'date-fns/esm/locale/ru'
import { FC } from 'react'

import Button from '@/components/UI/Button/Button'
import MaterialIcon from '@/components/UI/MaterialIcon'
import ModalBase, { IModal } from '@/components/UI/Modal/Modal'

import { IDateOfStay } from '@/store/Slices/MainForm/MainForm.interface'

import styles from './Room.module.scss'
import monthLocalize, { buildLocalizeFn } from '@/helpers/localize'

interface IModalProps extends IModal {
	date: IDateOfStay
}
const Modal: FC<IModalProps> = ({ date, open, handleClose }) => {
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
					<Button background="base" link="/profile" className="p-2">
						Мои бронирования
					</Button>
				</div>
			</div>
		</ModalBase>
	)
}

export default Modal
