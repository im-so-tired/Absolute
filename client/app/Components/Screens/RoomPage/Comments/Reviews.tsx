import { FC } from 'react'

import Comments from '@/components/Common/Comments/Comments'

import { useComments } from './useComments'

const Reviews: FC<{ roomId: string }> = ({ roomId }) => {
	const { isLoading, comments } = useComments(roomId)
	return comments?.length ? (
		<div style={{ gridArea: 'review' }}>
			<Comments comments={comments} />
		</div>
	) : null
}

export default Reviews
