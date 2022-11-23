import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'

import { useReviewsActions } from '@/hooks/useActions'

export const useCreateReviews = () => {
	const { createComment } = useReviewsActions()
	const { query } = useRouter()
	const roomId: string = String(query.id)
	const [fieldValue, setFieldValue] = useState<string>('')
	const [error, setError] = useState<boolean>(false)
	const [rating, setRating] = useState<number>(5)
	const [hover, setHover] = useState<number>(-1)

	const handleChangeField = (event: ChangeEvent<HTMLInputElement>) => {
		!event.target.value.length ? setError(true) : setError(false)
		setFieldValue(event.target.value)
	}

	const changeRating = (newValue: number | null) => {
		newValue ? setRating(newValue) : null
	}

	const changeHover = (newHover: number) => {
		setHover(newHover)
	}

	const addComment = () => {
		setFieldValue('')
		createComment({ rating, message: fieldValue, roomId })
	}

	return {
		fieldValue,
		error,
		rating,
		hover,
		handleChangeField,
		changeHover,
		changeRating,
		addComment,
	}
}
