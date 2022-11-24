export interface IComment {
	_id: string
	userId: string
	roomId: string
	message: string
	rating: number
	likes: string[]
	lastUpdate: number
	createdAt: string
	updatedAt: string
}
export interface IReviewsState {
	comments: IComment[]
	loading: boolean
	error: string | null
	rate: number
}

export interface IUpdateCommentData {
	commentId: string
	message: string
}
export interface ICreateComment {
	message: string
	rating: number
	roomId: string
}
