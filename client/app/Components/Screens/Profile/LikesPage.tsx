import { FC } from 'react'

import ProfileLayout from '@/components/Common/ProfileLayout/ProfileLayout'

import LikesList from './LikesList/LikesList'

const LikesPage: FC = () => {
	return (
		<ProfileLayout>
			<LikesList />
		</ProfileLayout>
	)
}

export default LikesPage
