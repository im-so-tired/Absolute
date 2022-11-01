import { NextPage } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

import Room from '@/components/Screens/RoomPage/Room'

const RoomPage: NextPage = () => {
	const { query, isReady } = useRouter()
	return isReady ? <Room /> : null
}

export default RoomPage
