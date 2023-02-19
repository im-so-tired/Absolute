import {FC} from 'react'

import CountPeople from '@/components/Common/CountPeople/CountPeople'
import DateFields from '@/components/Common/DateFields/DateFields'
import Button from '@/components/UI/Button/Button'

import {useMainFormActions} from '@/hooks/useActions'

import styles from './HomeForm.module.scss'


const HomeForm: FC = () => {
	const {resetData} = useMainFormActions()
	return (
		<div className={styles.homeForm}>
			<div className="flex flex-col">
				<h2>Найдём номера под ваши пожелания</h2>
				<DateFields className={styles.dateFields}/>
				<CountPeople className="mt-4"/>
				<Button background="base" link="" className="mt-4" onClick={() => resetData()}>
					Очистить
				</Button>
				<Button
					background="primary"
					link="/rooms"
					className="mt-4 w-[100%] py-2"
					endIcon="MdChevronRight"
				>
					Подобрать номера
				</Button>
			</div>
		</div>
	)
}

export default HomeForm
