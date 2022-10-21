import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

const index = () => {
	const router = useRouter()
	const user = useAuth()
	useEffect(() => {
		router.push(`/profile/${user?.id}`)
	}, [])
	return <></>
}

export default index
