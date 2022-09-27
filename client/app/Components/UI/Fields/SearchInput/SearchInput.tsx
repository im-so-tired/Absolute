import { FC, useState } from 'react'

import FieldBase from '../FieldBase/FieldBase'

import { ISearchInputProps } from './SearchInput.interface'
import styles from './SearchInput.module.scss'

const SearchInput: FC<ISearchInputProps> = ({
	label,
	className,
	name,
	value,
	...rest
}) => {
	const [labelClass, setLabelClass] = useState<string>('top-1/2 left-[14px]')
	return (
		<FieldBase className={className || ''} dynamicLabel={!value}>
			<div className={styles.searchInput}>
				<label htmlFor={name} className={labelClass}>
					{label}
				</label>
				<input
					id={name}
					value={value}
					{...rest}
					onFocus={() =>
						setLabelClass('top-0 left-[10px] px-1 text-blue-500 text-sm')
					}
					onBlur={() => setLabelClass('top-1/2 left-[14px]')}
				></input>
			</div>
		</FieldBase>
	)
}

export default SearchInput
