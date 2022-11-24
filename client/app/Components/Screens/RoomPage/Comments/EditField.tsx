import { TextField } from '@mui/material'
import { FC, useState } from 'react'

import Button from '@/components/UI/Button/Button'

import styles from './Comments.module.scss'

interface IEditFieldProps {
	initState: string
	finishEditing: (newValue: string) => void
}

const EditField: FC<IEditFieldProps> = ({ initState, finishEditing }) => {
	const [fieldValue, setFieldValue] = useState<string>(initState)
	const [error, setError] = useState<boolean>(false)
	const handleClick = () => {
		fieldValue.length ? finishEditing(fieldValue) : setError(true)
	}
	return (
		<div>
			<div className="relative">
				<TextField
					id="outlined-multiline-static"
					label=""
					multiline
					rows={4}
					value={fieldValue}
					onChange={event => setFieldValue(event.target.value)}
					error={error}
					className="w-full"
				/>
				{error ? (
					<span className={styles.errorMessage}>
						Поле не должно быть пустым
					</span>
				) : null}
			</div>
			<Button
				background={'base'}
				onClick={handleClick}
				className={styles.finishEditBtn}
			>
				Применить
			</Button>
		</div>
	)
}

export default EditField
