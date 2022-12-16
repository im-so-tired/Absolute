import cn from 'classnames'
import { FC, useRef, useState } from 'react'
import Select, { ActionMeta } from 'react-select'
import { SingleValue } from 'react-select'

import { IOptions } from '@/shared/types/select'

import FieldBase from '../FieldBase/FieldBase'

import { IMultiSelectFieldProps } from './MultiSelectField.interface'
import styles from './MultiSelectField.module.scss'

const MultiSelectField: FC<IMultiSelectFieldProps> = ({
	label,
	className,
	id,
	options,
	value: currentOption,
	onChange,
	name,
	labelClassName,
}) => {
	const labelRef = useRef() as React.MutableRefObject<HTMLLabelElement>
	const getValue = () =>
		currentOption
			? options.filter(op => currentOption.includes(op.value))
			: [{ label: '', value: '' }]
	const labelStyles = styles.labelStyles
	return (
		<FieldBase className={className} dynamicLabel={false}>
			<div className={styles.MultiSelectField}>
				<label className={labelClassName} ref={labelRef} htmlFor={id}>
					{label}
				</label>
				<div className="main-select">
					<Select
						name={name}
						instanceId={id}
						options={options}
						value={getValue()}
						isMulti={true}
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

export default MultiSelectField
