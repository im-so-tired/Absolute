import { FC } from 'react'

import CheckBox from '@/components/UI/Fields/CheckBox/CheckBox'
import { ILabel } from '@/components/UI/Fields/CheckBox/CheckBox.interface'

import {
	comfortsType,
	reachType,
	termsType,
} from '@/store/Slices/MainForm/MainForm.interface'

import styles from './CheckboxMenu.module.scss'

interface ICheckboxMenu {
	header: string
	items: ILabel[]
	onChange: (slug: comfortsType | reachType | termsType) => void
	value: string[]
}
const CheckboxMenu: FC<ICheckboxMenu> = ({
	header,
	items,
	onChange,
	value,
}) => {
	return (
		<div className={styles.checkboxMenu}>
			<h1>{header}</h1>
			{items?.map(item => (
				<CheckBox
					onChange={onChange}
					key={item.slug}
					label={item}
					className="mt-2"
					value={!!value.find(vl => item.slug === vl)}
				/>
			))}
		</div>
	)
}

export default CheckboxMenu
