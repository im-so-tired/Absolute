import { UseMutateAsyncFunction } from '@tanstack/react-query'
import cn from 'classnames'
import { FC } from 'react'

import { updateCommentData } from '@/components/Screens/RoomPage/Comments/useComments'

import roomStyles from '../../Screens/RoomPage/Room.module.scss'

import CommentItem from './CommentItem'
import { IComment } from './Comments.interface'
import styles from './Comments.module.scss'
import { useComment } from './useComment'
import { countReviews } from '@/helpers/countReviews'

const Comments: FC<{
	comments: IComment[]
}> = ({ comments }) => {
	const { updateComment } = useComment()
	return (
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
						updateComment={updateComment}
					/>
				))}
			</section>
		</div>
	)
}

export default Comments
