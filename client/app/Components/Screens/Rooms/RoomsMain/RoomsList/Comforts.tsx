import { FC } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import { comfortsType } from '@/store/Slices/MainForm/MainForm.interface'

import { IComfortsData } from '../RoomsList.interface'

import styles from './RoomsList.module.scss'

const data: IComfortsData = {
	hasWifi: 'MdWifi',
	hasConditioner: 'MdEmergency',
	hasWorkSpace: 'MdComputer',
}
const Comforts: FC<{ arrayComforts: comfortsType[] }> = ({ arrayComforts }) => {
	if (!arrayComforts.length) {
		return null
	}
	return (
		<div className={styles.comforts}>
			{arrayComforts.map(comfort => (
				<MaterialIcon name={data[comfort]} key={comfort} />
			))}
		</div>
	)
}

export default Comforts
