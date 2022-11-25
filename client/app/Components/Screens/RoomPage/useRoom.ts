import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'

import { useUserActions } from '@/hooks/useActions'

import { RoomsService } from '@/services/Rooms/Rooms.service'
import { UserService } from '@/services/User.service'

import { toastrError } from '@/utils/toastrError'

export const useRoom = () => {
	const { query } = useRouter()
	const { changeFavourites } = useUserActions()
	const queryId: string = String(query.id)
	const { data: room, isLoading } = useQuery(
		['get room by id', queryId],
		() => RoomsService.getRoomById(queryId),
		{
			enabled: !!query.id,
			onError: error => toastrError('Номер недоступен', error),
		}
	)

	return { room, isLoading, changeFavourites, queryId }
}
