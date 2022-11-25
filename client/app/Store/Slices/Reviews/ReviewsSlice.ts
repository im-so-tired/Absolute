import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { countRoomRating } from '@/utils/countRoomRating'

import {
	createComment,
	deleteComment,
	getAllComments,
	likeHandler,
	updateComment,
} from '@/store/Slices/Reviews/Reviews.actions'
import {
	IComment,
	IReviewsState,
} from '@/store/Slices/Reviews/Reviews.interface'

import { errorMessage } from '@/helpers/ErrorMessage'

const initialState: IReviewsState = {
	comments: [],
	loading: true,
	error: null,
	rate: 0,
}
export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {
		writeComments: (state, { payload }: PayloadAction<IComment[]>) => {
			state.comments = payload
		},
	},
	extraReducers: builder => {
		builder
			.addCase(getAllComments.fulfilled, (state, { payload }) => {
				state.comments = payload
				state.loading = false
				state.rate = countRoomRating(state.comments)
			})
			.addCase(getAllComments.pending, state => {
				state.loading = true
			})
			.addCase(getAllComments.rejected, (state, { payload }) => {
				state.loading = false
				state.comments = []
			})
			.addCase(deleteComment.fulfilled, (state, { payload }) => {
				payload
					? (state.comments = state.comments.filter(
							comment => comment._id !== payload
					  ))
					: null
				state.rate = countRoomRating(state.comments)
				state.loading = false
			})
			.addCase(deleteComment.rejected, (state, { payload }) => {
				state.loading = false
			})
			.addCase(likeHandler.fulfilled, (state, { payload }) => {
				state.comments = state.comments.map(comment => {
					if (comment._id === payload.commentId) {
						comment.likes = payload.likes
					}
					return comment
				})
				state.loading = false
			})
			.addCase(updateComment.fulfilled, (state, { payload }) => {
				const index = state.comments.findIndex(
					comment => comment._id === payload?.commentId
				)
				state.comments[index].message = payload?.message || 'Default comment'
				state.comments[index].lastUpdate = Date.now()
				state.comments.sort((a, b) => b.lastUpdate - a.lastUpdate)
			})
			.addCase(updateComment.rejected, (state, { payload }) => {
				state.error = errorMessage(payload)
			})
			.addCase(createComment.fulfilled, (state, { payload }) => {
				if (payload) {
					state.comments.unshift(payload)
					state.rate = countRoomRating(state.comments)
				}
			})
	},
})
export const reviewsActions = reviewsSlice.actions
export default reviewsSlice.reducer
