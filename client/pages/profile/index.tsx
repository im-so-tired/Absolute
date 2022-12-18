import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { NextPageAuth } from '@/shared/types/auth.types'

const index: NextPageAuth = () => {
	const router = useRouter()
	const user = useAuth()
	useEffect(() => {
		router.push(`/profile/${user?.id}`)
	}, [user])
	return <></>
}

index.isOnlyUser = true
export default index
