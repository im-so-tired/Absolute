import ProfileLayout from '@/components/Common/ProfileLayout/ProfileLayout'

import { useAuth } from '@/hooks/useAuth'

import EditProfileForm from './Forms/EditProfileForm/EditProfileForm'

const EditProfile = () => {
	const user = useAuth()
	return user ? (
		<ProfileLayout>
			<EditProfileForm user={user} />
		</ProfileLayout>
	) : (
		<></>
	)
}

export default EditProfile
