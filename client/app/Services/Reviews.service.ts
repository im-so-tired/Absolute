import { axiosAuth, axiosClassic } from 'Api/intersaptors'

import { IComment } from '@/store/Slices/Reviews/Reviews.interface'

export const ReviewsService = {
	async update(id: string, message: string) {
		const { data: updatedComment } = await axiosAuth.put<IComment>(
			`/reviews/${id}`,
			{
				message,
			}
		)
		return updatedComment
	},

	async getRoomComments(roomId: string) {
		const { data: comments } = await axiosClassic.get<IComment[]>(
			`/reviews/room/${roomId}`
		)
		return comments
	},

	async delete(id: string) {
		await axiosAuth.delete<IComment>(`/reviews/${id}`)
		return id
	},

	async like(commentId: string) {
		const { data: likes } = await axiosAuth.put<string[]>(
			`/reviews/like/${commentId}`
		)
		return likes
	},
}
