import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import CommentItem from '@/screens/RoomPage/Comments/CommentItem'
import styles from '@/screens/RoomPage/Comments/Comments.module.scss'
import CreateReview from '@/screens/RoomPage/Comments/CreateReview/CreateReview'
import roomStyles from '@/screens/RoomPage/Room.module.scss'

import { useAppSelector } from '@/hooks/Redux'
import { useReviewsActions } from '@/hooks/useActions'

import { IComment } from '@/store/Slices/Reviews/Reviews.interface'

import { countReviews } from '@/helpers/countReviews'

const Reviews: FC<{ comments: IComment[] }> = ({ comments }) => {
	const { comments: commentsState, loading: isLoading } = useAppSelector(
		state => state.reviews
	)

	const { writeComments } = useReviewsActions()
	useEffect(() => {
		writeComments(comments)
	}, [comments])
	// if (isLoading) return <div>Loading...</div>
	return (
		<div style={{ gridArea: 'review' }}>
			{commentsState?.length ? (
				<div className={styles.comments}>
					<div className={styles.heading}>
						<h2 className={cn(roomStyles.heading, 'mb-0')}>
							Отзывы посетителей номера
						</h2>
						<span className={styles.commentSpan}>
							{countReviews(comments.length)}
						</span>
					</div>
					<section>
						{commentsState.map(comment => (
							<CommentItem key={comment._id} comment={comment} />
						))}
					</section>
				</div>
			) : null}
			<CreateReview />
		</div>
	)
}

export default Reviews
