import { Rating, Tooltip } from '@mui/material'
import { UseMutateAsyncFunction, useQuery } from '@tanstack/react-query'
import { parseISO } from 'date-fns'
import Image from 'next/image'
import { FC, useEffect, useState } from 'react'

import { updateCommentData } from '@/components/Screens/RoomPage/Comments/useComments'
import MaterialIcon from '@/components/UI/MaterialIcon'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/User.service'

import newAvatar from '@/assets/image/newAvatar.svg'

import { updateTime } from '@/utils/UpdateTime'

import { UserState } from '@/store/Slices/User/user.interface'

import { IComment } from './Comments.interface'
import styles from './Comments.module.scss'
import TooltipButton from './TooltipButton'

const CommentItem: FC<{
	comment: IComment
	updateComment: UseMutateAsyncFunction<
		IComment,
		unknown,
		updateCommentData,
		unknown
	>
}> = ({ comment, updateComment }) => {
	const currentUser = useAuth()
	const { data: user, isLoading } = useQuery<Omit<UserState, '_id'>>(
		['user', comment],
		() => UserService.getById(comment.userId),
		{
			select: value => ({
				...value,
				id: comment._id,
			}),
		}
	)
	const timeMessage = updateTime(
		parseISO(comment.createdAt),
		parseISO(comment.updatedAt)
	)
	if (isLoading) {
		return <div>Loading...</div>
	}
	console.log(user)
	return (
		<div className={styles.comment}>
			<div className={styles.top}>
				<div className={styles.userInfo}>
					<p className="mr-3 flex-center flex-col">
						<Image
							height={48}
							width={48}
							src={newAvatar}
							className={styles.avatar}
						/>
						<button className={styles.likeBtn}>
							<MaterialIcon name="MdFavoriteBorder" color="#BC9CFF" />
							{comment.likes?.length || 0}
						</button>
					</p>
					<div>
						<p className="flex items-center">
							<span
								className={styles.name}
							>{`${user?.firstName} ${user?.secondName}`}</span>
							{currentUser?.id === comment?.userId ? (
								<>
									<Tooltip title="Редактировать" placement="top">
										<TooltipButton iconName="MdEdit" secondColor="#2196F3" />
									</Tooltip>
									<Tooltip title="Удалить" placement="top">
										<TooltipButton iconName="MdClose" secondColor="#EB0008" />
									</Tooltip>
								</>
							) : null}
						</p>
						<span className="block mb-3">{timeMessage}</span>
						<span className={styles.message}>{comment.message}</span>
					</div>
				</div>
				<div>
					<Rating value={comment.rating} readOnly className={styles.rate} />
				</div>
			</div>
			<div></div>
		</div>
	)
}

export default CommentItem
