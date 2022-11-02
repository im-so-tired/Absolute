import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'
import { useRedirect } from '@/hooks/useAuthProfileRedirect'

const index = () => {
	const user = useAuth()
	const { query } = useRouter()

	useRedirect(query ? `/profile/${user?.id}` : '')
	return <></>
}

export default index
