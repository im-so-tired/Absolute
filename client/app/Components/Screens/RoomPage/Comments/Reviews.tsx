import cn from 'classnames'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

import CommentItem from '@/screens/RoomPage/Comments/CommentItem'
import styles from '@/screens/RoomPage/Comments/Comments.module.scss'
import CreateReview from '@/screens/RoomPage/Comments/CreateReview/CreateReview'
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
	return (
		<div style={{ gridArea: 'review' }}>
			{comments?.length ? (
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
						{comments.map(comment => (
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
