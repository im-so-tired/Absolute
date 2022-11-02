import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from './useAuth'

export const useRedirect = (href: string, condition: boolean = true) => {
	const router = useRouter()
	useEffect(() => {
		if (condition) router.push(href)
	}, [router])
}
// /profile/${user?.id}
