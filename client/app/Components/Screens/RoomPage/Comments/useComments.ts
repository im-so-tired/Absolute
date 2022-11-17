import { useMutation, useQuery } from '@tanstack/react-query'

import { ReviewsService } from '@/services/Reviews.service'

export interface updateCommentData {
	id: string
	message: string
}

export const useComments = (roomId: string) => {
	const { data: comments, isLoading } = useQuery(['room comments'], () =>
		ReviewsService.getRoomComments(roomId)
	)

	return { isLoading, comments }
}
