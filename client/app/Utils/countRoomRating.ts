import { IComment } from '@/store/Slices/Reviews/Reviews.interface'

export const countRoomRating = (comments: IComment[]) => {
	return Number(
		(
			comments.reduce((sumRate, comment) => sumRate + comment.rating, 0) /
			comments.length
		).toFixed(1)
	)
}
