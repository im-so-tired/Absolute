import { FC } from 'react'
import { HiMinus, HiPlus } from 'react-icons/hi'

import { useMainFormActions } from '@/hooks/useActions'

import { ICountPeople } from '@/shared/types/countPeople'

import styles from './CountPeople.module.scss'

const PersonType: FC<{ people: ICountPeople }> = ({ people }) => {
	const { addHuman, removeHuman } = useMainFormActions()

	return (
		<div className={styles.personType}>
			<span>{people.type}</span>
			<div>
				<button onClick={() => removeHuman(people.type)}>
					<HiMinus />
				</button>
				<span>{people.count}</span>
				<button onClick={() => addHuman(people.type)}>
					<HiPlus />
				</button>
			</div>
		</div>
	)
}

export default PersonType
