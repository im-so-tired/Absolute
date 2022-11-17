import { useMutation } from '@tanstack/react-query'

import { ReviewsService } from '@/services/Reviews.service'

export interface updateCommentData {
	id: string
	message: string
}

export const useComment = () => {
	const { mutateAsync: updateComment } = useMutation(
		(value: updateCommentData) => ReviewsService.update(value.id, value.message)
	)

	const { mutateAsync: deleteComment } = useMutation((commentId: string) =>
		ReviewsService.delete(commentId)
	)
	// const {mutateAsync:deleteComment} = useMutation((id:string) => ReviewsService)
	return { updateComment, deleteComment }
}
