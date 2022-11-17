import { axiosAuth, axiosClassic } from 'Api/intersaptors'

import { IComment } from '@/components/Common/Comments/Comments.interface'

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
		const deletedComment = await axiosAuth.delete<IComment>(`/reviews/${id}`)
		return deletedComment
	},
}
