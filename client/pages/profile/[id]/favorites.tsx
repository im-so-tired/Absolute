import { NextPage } from 'next'

import ProfileFavorites from '@/components/Screens/Profile/ProfileFavorites'

import { NextPageAuth } from '@/shared/types/auth.types'

const FavoritesPage: NextPageAuth = () => {
	return <ProfileFavorites />
}

FavoritesPage.isOnlyUser = true
export default FavoritesPage
