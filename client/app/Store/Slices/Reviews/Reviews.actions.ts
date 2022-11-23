import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { ReviewsService } from '@/services/Reviews.service'

import {
	ICreateComment,
	IUpdateCommentData,
} from '@/store/Slices/Reviews/Reviews.interface'

import { errorMessage } from '@/helpers/ErrorMessage'

export const getAllComments = createAsyncThunk(
	'reviews/getAll',
	async (roomId: string, thunkAPI) => {
		try {
			const responce = await ReviewsService.getRoomComments(roomId)
			return responce
		} catch (error) {
			throw thunkAPI.rejectWithValue(error)
		}
	}
)

export const deleteComment = createAsyncThunk(
	'reviews/delete',
	async (commentId: string, thunkAPI) => {
		try {
			const id = await ReviewsService.delete(commentId)
			return id
		} catch (error) {
			throw thunkAPI.rejectWithValue(error)
		}
	}
)

export const likeHandler = createAsyncThunk(
	'reviews/like',
	async (commentId: string, thunkAPI) => {
		try {
			const likes = await ReviewsService.like(commentId)
			return {
				likes,
				commentId,
			}
		} catch (error) {
			if (errorMessage(error) === 'Unauthorized') {
				toastr.error(
					'Вы не авторизованы!',
					'Чтобы ставить лайки нужно авторизоваться'
				)
			}
			throw thunkAPI.rejectWithValue(error)
		}
	}
)

export const updateComment = createAsyncThunk(
	'reviews/update',
	async (payload: IUpdateCommentData, thunkAPI) => {
		try {
			const { commentId, message } = payload
			await ReviewsService.update(commentId, message)
			return payload
		} catch (error) {
			throw thunkAPI.rejectWithValue(error)
		}
	}
)

export const createComment = createAsyncThunk(
	'reviews/create',
	async (payload: ICreateComment, thunkAPI) => {
		try {
			const newComment = await ReviewsService.create(payload)
			return newComment
		} catch (error) {
			if (errorMessage(error) === 'Unauthorized') {
				toastr.error(
					'Вы не авторизованы!',
					'Чтобы оставить комментарий нужно авторизоваться'
				)
			}
			thunkAPI.rejectWithValue(error)
		}
	}
)
