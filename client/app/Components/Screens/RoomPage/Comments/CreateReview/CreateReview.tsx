import { TextField } from '@mui/material'
import cn from 'classnames'
import { ChangeEvent, FC, useEffect, useState } from 'react'

import Rating from '@/components/Common/RoomInfo/Rating'
import Button from '@/components/UI/Button/Button'

import styles from '@/screens/RoomPage/Comments/Comments.module.scss'
import { useCreateReviews } from '@/screens/RoomPage/Comments/CreateReview/useCreateReviews'

import { ratingMessage } from '@/utils/RatingMessage'

import mainStyles from '../../Room.module.scss'

const CreateReview = () => {
	const {
		fieldValue,
		handleChangeField,
		error,
		rating,
		changeHover,
		hover,
		changeRating,
		addComment,
	} = useCreateReviews()
	return (
		<div className={styles.createReview}>
			<h3 className={mainStyles.heading}>Оставить отзыв</h3>
			<p className="relative">
				<TextField
					id="outlined-textarea"
					label="Оставить отзыв"
					multiline
					rows={4}
					value={fieldValue}
					onChange={handleChangeField}
					error={error}
					className="w-full"
				/>
				{error ? (
					<span className={styles.errorMessage}>
						Поле не должно быть пустым
					</span>
				) : null}
			</p>
			<div className={styles.rating}>
				<span>Ваша оценка: </span>
				<Rating
					value={rating}
					onChange={(event, newValue) => changeRating(newValue)}
					onChangeActive={(event, newHover) => changeHover(newHover)}
					className={cn(mainStyles.rate, 'mx-2')}
				/>
				<span className={styles.commentSpan}>
					{ratingMessage(hover === -1 ? rating : hover)}
				</span>
			</div>
			<Button background="primary" className="py-2 px-4" onClick={addComment}>
				Опубликовать
			</Button>
		</div>
	)
}

export default CreateReview
