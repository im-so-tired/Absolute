import cn from 'classnames'
import { FC, useEffect } from 'react'

import CommentItem from '@/screens/RoomPage/Comments/CommentItem'
import styles from '@/screens/RoomPage/Comments/Comments.module.scss'
import roomStyles from '@/screens/RoomPage/Room.module.scss'

import { useAppSelector } from '@/hooks/Redux'
import { useReviewsActions } from '@/hooks/useActions'

import { countReviews } from '@/helpers/countReviews'

const Reviews: FC<{ roomId: string }> = ({ roomId }) => {
	const { comments, loading: isLoading } = useAppSelector(
		state => state.reviews
	)
	const { getAllComments } = useReviewsActions()
	useEffect(() => {
		getAllComments(roomId)
	}, [])
	if (isLoading) return <div>Loading...</div>
	return comments?.length ? (
		<div style={{ gridArea: 'review' }}>
			<div className={styles.comments}>
				<div className={styles.heading}>
					<h2 className={cn(roomStyles.heading, 'mb-0')}>
						Отзывы посетителей номера
					</h2>
					<span>{countReviews(comments.length)}</span>
				</div>
				<section>
					{comments.map(comment => (
						<CommentItem
							key={comment._id}
							comment={comment}
							// deleteComment={deleteComment}
						/>
					))}
				</section>
			</div>
		</div>
	) : null
}

export default Reviews
