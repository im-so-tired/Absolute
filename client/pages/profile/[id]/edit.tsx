import { NextPage } from 'next'

import EditProfile from '@/components/Screens/Profile/EditProfile'

import { NextPageAuth } from '@/shared/types/auth.types'

const edit: NextPageAuth = () => {
	return <EditProfile />
}

edit.isOnlyUser = true
export default edit
