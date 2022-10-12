import { useAuth } from '@/hooks/useAuth'
import { Container } from '@mui/system'
import React, { FC } from 'react'

const Profile: FC = () => {
	const user = useAuth();
	console.log(user?.id)
  return (
    <div className="mt-4">
      <Container>
        {user?.email}
      </Container>
    </div>
  )
}

export default Profile
