export interface IComment {
	_id: string
	userId: string
	roomId: string
	message: string
	rating: number
	likes: string[]
	createdAt: string
	updatedAt: string
}
export interface IReviewsState {
	comments: IComment[] | []
	loading: boolean
	error: string | null
}

export interface IUpdateCommentData {
	commentId: string
	message: string
}
