import { Rating, Tooltip } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import cn from 'classnames'
import { parseISO } from 'date-fns'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import EditField from '@/screens/RoomPage/Comments/EditField'

import { useReviewsActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { ReviewsService } from '@/services/Reviews.service'
import { UserService } from '@/services/User.service'

import newAvatar from '@/assets/image/newAvatar.svg'

import { updateTime } from '@/utils/UpdateTime'

import { IComment } from '@/store/Slices/Reviews/Reviews.interface'
import { UserState } from '@/store/Slices/User/user.interface'

import TooltipButton from '../../RoomPage/Comments/TooltipButton'

import styles from './LikesList.module.scss'

const LikesListItem: FC<{
	comment: IComment
	deleteComment: any
	likeComment: any
	updateComment: any
	currentUser: any
}> = ({ comment, deleteComment, likeComment, updateComment, currentUser }) => {
	const [author, setAuthor] = useState<UserState | null>(null)
	const timeMessage = updateTime(
		parseISO(comment.createdAt),
		comment.lastUpdate
	)
	// const { mutateAsync } = useMutation(
	// 	['delete booking in dashboard'],
	// 	(bookId: string) => BookingService.delete(bookId),
	// 	{
	// 		onSuccess: () => {
	// 			bookingsRefetch()
	// 		},
	// 		onError: error => toastrError('Неправильный запрос', error),
	// 	}
	// )
	// const { deleteComment, likeHandler, updateComment } = useReviewsActions()
	const [edited, setEdited] = useState<boolean>(false)
	useEffect(() => {
		const fetchUser = async () => {
			const data = await UserService.getById(comment.userId)
			setAuthor(data)
		}
		fetchUser()
	}, [])

	const finishEditing = async (newValue: string) => {
		await updateComment({ commentId: comment._id, message: newValue })
		setEdited(false)
	}
	const liked = comment.likes.includes(currentUser?.id || '')

	// console.log(likesRefetch)
	return currentUser && author ? (
		<div className={styles.comment}>
			<div>
				<p className="mr-3 flex items-center flex-col">
					<Image
						height={48}
						width={48}
						src={newAvatar}
						className={styles.avatar}
						alt="Avatar"
					/>
					<button
						className={cn(styles.likeBtn, { [styles.likedBtn]: liked })}
						onClick={async () => await likeComment(comment._id)}
					>
						<MaterialIcon
							name={liked ? 'MdFavorite' : 'MdFavoriteBorder'}
							color="#BC9CFF"
						/>
						{comment.likes?.length || 0}
					</button>
				</p>
			</div>
			<div className="w-full">
				<div className={styles.top}>
					<div>
						<p className="flex items-center">
							<span
								className={cn(styles.name, styles.commentSpan)}
							>{`${author?.firstName} ${author?.secondName}`}</span>
							{currentUser?.id === comment?.userId ? (
								<>
									<Tooltip title="Редактировать" placement="top">
										<TooltipButton
											iconName="MdEdit"
											secondColor="#2196F3"
											onClick={() => setEdited(true)}
										/>
									</Tooltip>
									<Tooltip title="Удалить" placement="top">
										<TooltipButton
											iconName="MdClose"
											secondColor="#EB0008"
											onClick={async () => await deleteComment(comment._id)}
										/>
									</Tooltip>
								</>
							) : null}
						</p>
						<span className={cn('block mb-3', styles.commentSpan)}>
							{timeMessage}
						</span>
					</div>
					<div>
						<Rating value={comment.rating} readOnly className={styles.rate} />
					</div>
				</div>
				{edited ? (
					<EditField
						finishEditing={finishEditing}
						initState={comment.message}
					/>
				) : (
					<span className={cn(styles.commentSpan, styles.message)}>
						{comment.message}
					</span>
				)}
			</div>
		</div>
	) : (
		<></>
	)
}

export default LikesListItem
