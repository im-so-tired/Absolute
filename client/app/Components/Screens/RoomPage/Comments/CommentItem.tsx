import { Rating, Tooltip } from '@mui/material'
import cn from 'classnames'
import { parseISO } from 'date-fns'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import EditField from '@/screens/RoomPage/Comments/EditField'

import { useReviewsActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/User.service'

import newAvatar from '@/assets/image/newAvatar.svg'

import { updateTime } from '@/utils/UpdateTime'

import { IComment } from '@/store/Slices/Reviews/Reviews.interface'
import { UserState } from '@/store/Slices/User/user.interface'

import styles from './Comments.module.scss'
import TooltipButton from './TooltipButton'

const CommentItem: FC<{ comment: IComment }> = ({ comment }) => {
	const currentUser = useAuth()
	const [author, setAuthor] = useState<UserState | null>(null)
	const timeMessage = updateTime(
		parseISO(comment.createdAt),
		parseISO(comment.updatedAt)
	)
	const { deleteComment, likeHandler, updateComment } = useReviewsActions()
	const [edited, setEdited] = useState<boolean>(false)
	useEffect(() => {
		const fetchUser = async () => {
			const data = await UserService.getById(comment.userId)
			setAuthor(data)
		}
		fetchUser()
	}, [])
	const finishEditing = (newValue: string) => {
		updateComment({ commentId: comment._id, message: newValue })
		setEdited(false)
	}
	if (!author) {
		return <div>Loading...</div>
	}
	const liked = comment.likes.includes(currentUser?.id || '')
	return (
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
						onClick={() => likeHandler(comment._id)}
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
								className={styles.name}
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
											onClick={() => deleteComment(comment._id)}
										/>
									</Tooltip>
								</>
							) : null}
						</p>
						<span className="block mb-3">{timeMessage}</span>
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
					<span className={styles.message}>{comment.message}</span>
				)}
			</div>
		</div>
	)
}

export default CommentItem
