import { FC } from 'react'

import CheckboxMenu from '@/components/Common/CheckboxMenu/CheckboxMenu'
import CountPeople from '@/components/Common/CountPeople/CountPeople'
import DateFields from '@/components/Common/DateFields/DateFields'
import PriceRange from '@/components/Common/PriceRange/PriceRange'
import Button from '@/components/UI/Button/Button'

import { useAppSelector } from '@/hooks/Redux'
import { useMainFormActions } from '@/hooks/useActions'

import { arrayComforts, arrayReach, arrayTerms } from '@/utils/constants'

import {
	comfortsType,
	reachType,
	termsType,
} from '@/store/Slices/MainForm/MainForm.interface'

import styles from './RoomsForm.module.scss'

const RoomsForm: FC = () => {
	const { resetData, changeComforts, changeTerms, changeReach } =
		useMainFormActions()
	const { reach, terms, comforts } = useAppSelector(state => state.mainForm)
	const changeComfortsFunc = (slug: comfortsType) => {
		changeComforts(slug)
	}
	const changeTermsFunc = (slug: termsType) => {
		changeTerms(slug)
	}
	const changeReachFunc = (slug: reachType) => {
		changeReach(slug)
	}
	return (
		<div className={styles.roomsForm}>
			<h1>Дата прибытия в отеле</h1>
			<DateFields className={styles.dateFields} />
			<CountPeople className="mt-7" />
			<PriceRange />
			<CheckboxMenu
				onChange={changeComfortsFunc}
				header="Удобства"
				items={arrayComforts}
				value={comforts}
			/>
			<CheckboxMenu
				onChange={changeTermsFunc}
				header="Условия размещения"
				items={arrayTerms}
				value={terms}
			/>
			<CheckboxMenu
				onChange={changeReachFunc}
				header="Доступность"
				items={arrayReach}
				value={reach}
			/>
			<Button
				background="primary"
				className="w-full mt-4 py-2"
				onClick={resetData}
			>
				Сбросить фильтры
			</Button>
		</div>
	)
}

export default RoomsForm
