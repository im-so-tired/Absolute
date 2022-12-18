import { NextPage } from 'next'

import LikesPage from '@/components/Screens/Profile/LikesPage'
import ProfileFavorites from '@/components/Screens/Profile/ProfileFavorites'

import { NextPageAuth } from '@/shared/types/auth.types'

const FavoritesPage: NextPageAuth = () => {
	return <LikesPage />
}

FavoritesPage.isOnlyUser = true
export default FavoritesPage
