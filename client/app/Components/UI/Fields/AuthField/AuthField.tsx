import { TextField } from '@mui/material'
import cn from 'classnames'
import { ErrorMessage, useField } from 'formik'
import { FC } from 'react'
import { InputHTMLAttributes } from 'react'

import styles from './AuthField.module.scss'

export interface IAuthField extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	name: string
}

const AuthField: FC<IAuthField> = ({ label, className, ...props }) => {
	const [field, meta] = useField(props)
	return (
		<div className="relative">
			<TextField
				className={cn(className, {
					[styles.borderError]: meta.error && meta.touched,
				})}
				variant="outlined"
				label={label}
				inputProps={props}
			/>
			<ErrorMessage
				name={field.name ?? ''}
				className={styles.errorMessage}
				component="div"
			/>
		</div>
	)
}

export default AuthField
