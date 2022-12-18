import { useMutation, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

import { useAppSelector } from '@/hooks/Redux'
import { useReviewsActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import { ReviewsService } from '@/services/Reviews.service'

import { toastrError } from '@/utils/toastrError'

import { IComment } from '@/store/Slices/Reviews/Reviews.interface'

import CommentItem from '../../RoomPage/Comments/CommentItem'

import styles from './LikesList.module.scss'
import LikesListItem from './LikesListItem'

const LikesList = () => {
	// const currentUser = useAuth()
	const { user: currentUser, isLoading: isUserLoading } = useAppSelector(
		state => state.user
	)
	const {
		data: likes,
		isLoading,
		refetch: likesRefetch,
	} = useQuery(
		['get likes in profile page'],
		() => ReviewsService.getFavorites(),
		{
			// select: data => data,
			onError: error => toastrError('Неправильный запрос', error),
		}
	)
	const { mutateAsync: deleteComment } = useMutation(
		['delete comment in profile page'],
		(commentId: string) => ReviewsService.delete(commentId),
		{
			onSuccess: () => {
				likesRefetch()
			},
			onError: error => toastrError('Неправильный запрос', error),
		}
	)
	const { mutateAsync: updateComment } = useMutation(
		['update comment in profile page'],
		(obj: { commentId: string; message: string }) =>
			ReviewsService.update(String(obj.commentId), obj.message),
		{
			onSuccess: () => {
				likesRefetch()
			},
			onError: error => toastrError('Неправильный запрос', error),
		}
	)

	const { mutateAsync: likeComment } = useMutation(
		['unlike comment in profile page'],
		(id: string) => ReviewsService.like(id),
		{
			onSuccess: () => {
				likesRefetch()
			},
			onError: error => toastrError('Неправильный запрос', error),
		}
	)

	if (isUserLoading && isLoading) return <div>Загрузка...</div>
	return (
		<div className={styles.likesList}>
			<h1>Вам понравились отзывы:</h1>
			<div className={styles.container}>
				{likes?.map(like => (
					<div key={like._id} className={styles.item}>
						<LikesListItem
							currentUser={currentUser}
							deleteComment={deleteComment}
							likeComment={likeComment}
							updateComment={updateComment}
							key={like._id}
							comment={like}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default LikesList
