import { FC } from 'react'

import { useAppSelector } from '@/hooks/Redux'

import styles from './CountPeople.module.scss'
import PersonType from './PersonType'
import { getBadyMessage, getGuestMessage } from '@/helpers/correctMessage'

const CountPeople: FC<{ className?: string }> = ({ className }) => {
	const arrayTypePeople = useAppSelector(state => state.mainForm.countPeople)
	return (
		<div className={className}>
			<div className={styles.heading}>
				<span>{getGuestMessage(arrayTypePeople)}</span>
				<span>{getBadyMessage(arrayTypePeople[2].count)}</span>
			</div>
			<div className={styles.main}>
				{arrayTypePeople.map(item => (
					<PersonType key={item.type} people={item} />
				))}
			</div>
		</div>
	)
}

export default CountPeople
