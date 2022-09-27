import cn from 'classnames'
import { FC } from 'react'

import { ICheckBox } from './CheckBox.interface'
import styles from './CheckBox.module.scss'

const CheckBox: FC<ICheckBox> = ({
	label,
	className,
	onChange: changeFunc,
	value,
}) => {
	return (
		<label className={cn(styles.container, className)}>
			<span className={styles.labelText}>{label.text}</span>
			<input
				type="checkbox"
				onChange={() => changeFunc(label.slug)}
				checked={value}
			/>
			<span className={styles.checkmark}></span>
		</label>
	)
}

export default CheckBox
