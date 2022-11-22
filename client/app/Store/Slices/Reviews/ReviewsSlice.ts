import { createSlice } from '@reduxjs/toolkit'

import {
	deleteComment,
	getAllComments,
	likeHandler,
	updateComment,
} from '@/store/Slices/Reviews/Reviews.actions'
import { IReviewsState } from '@/store/Slices/Reviews/Reviews.interface'

import { errorMessage } from '@/helpers/ErrorMessage'

const initialState: IReviewsState = {
	comments: [],
	loading: true,
	error: null,
}
export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllComments.fulfilled, (state, { payload }) => {
				state.comments = payload
				state.loading = false
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
			.addCase(likeHandler.rejected, (state, { payload }) => {
				state.loading = false
			})
			.addCase(updateComment.fulfilled, (state, { payload }) => {
				const index = state.comments.findIndex(
					comment => comment._id === payload?.commentId
				)
				console.log(index)
				state.comments[index].message = payload?.message || 'Default comment'
			})
			.addCase(updateComment.rejected, (state, { payload }) => {
				state.error = errorMessage(payload)
			})
	},
})

export default reviewsSlice.reducer
