import {
	GetStaticPaths,
	GetStaticProps,
	InferGetStaticPropsType,
	NextPage,
} from 'next'
import {ParsedUrlQuery} from 'querystring'
import React, {useEffect, useState} from 'react'

import Room from '@/components/Screens/RoomPage/Room'

import {IRoom} from '@/shared/types/room.types'

import {ReviewsService} from '@/services/Reviews.service'
import {RoomsService} from '@/services/Rooms/Rooms.service'

import {IComment} from '@/store/Slices/Reviews/Reviews.interface'

import {axiosClassic} from '../../app/Api/intersaptors'
import {useRouter} from "next/router";

interface IParams extends ParsedUrlQuery {
	id: string
}

interface staticProps {
	room: IRoom
	comments: IComment[]
}

const RoomPage = () => {
	const [room, setRoom] = useState<IRoom>()
	const [comments, setComments] = useState<IComment[] | null>(null)
	const router = useRouter()
	const id = router.query.id
	const fetchData = async () => {
		const room = await RoomsService.getRoomById(String(id))
		const comments = await ReviewsService.getRoomComments(String(id))
		setRoom(room)
		setComments(comments)
	}
	useEffect(() => {
		fetchData()
	}, [])
	if (!room || !comments) {
		return <h1>Loading...</h1>
	}
	return <Room room={room} comments={comments}/>
}

export default RoomPage

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const { data: allRooms } = await axiosClassic.get('/rooms/all')
// 	const paths = allRooms.data.map((room: IRoom) => ({
// 		params: { id: room._id },
// 	}))
// 	return { paths, fallback: false }
// }
//
// export const getStaticProps: GetStaticProps<staticProps> = async context => {
// 	try {
// 		const { id } = context.params as IParams
// 		const room = await RoomsService.getRoomById(id)
// 		const comments = await ReviewsService.getRoomComments(id)
// 		return {
// 			props: {
// 				room,
// 				comments,
// 			},
// 		}
// 	} catch (e) {
// 		return {
// 			notFound: true,
// 		}
// 	}
// }
