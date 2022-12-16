import cn from 'classnames'
import { FC, useRef, useState } from 'react'
import Select, { ActionMeta } from 'react-select'
import { SingleValue } from 'react-select'

import { IOptions } from '@/shared/types/select'

import FieldBase from '../FieldBase/FieldBase'

import { ISelectFieldProps } from './SelectField.interface'
import styles from './SelectField.module.scss'

const SelectField: FC<ISelectFieldProps> = ({
	label,
	className,
	id,
	options,
	value: currentOption,
	onChange,
	name,
}) => {
	const labelRef = useRef() as React.MutableRefObject<HTMLLabelElement>
	const getValue = () =>
		currentOption
			? options.find(op => op.value === currentOption)
			: { label: '', value: '' }
	const labelStyles = styles.labelStyles
	return (
		<FieldBase className={className} dynamicLabel={false}>
			<div className={styles.selectField}>
				<label ref={labelRef} htmlFor={id}>
					{label}
				</label>
				<div className="main-select">
					<Select
						name={name}
						instanceId={id}
						options={options}
						value={getValue()}
						onChange={onChange}
						classNamePrefix="custom-select"
						onFocus={() => labelRef.current.classList.toggle(labelStyles)}
						onBlur={() => labelRef.current.classList.toggle(labelStyles)}
						// menuIsOpen
					/>
				</div>
			</div>
		</FieldBase>
	)
}

export default SelectField
