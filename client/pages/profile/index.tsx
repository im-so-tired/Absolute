import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

const index: NextPage = () => {
	const router = useRouter()
	const user = useAuth()
	useEffect(() => {
		router.push(`/profile/${user?.id}`)
	}, [user])
	return <></>
}

export default index
