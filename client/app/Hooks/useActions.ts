import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import {
	allFormActions,
	allReviewsActions,
	allUserActions,
} from '@/store/RootActions'

import { useAppDispatch } from './Redux'

export const useMainFormActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(allFormActions, dispatch), [dispatch])
}

export const useUserActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(allUserActions, dispatch), [dispatch])
}

export const useReviewsActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(
		() => bindActionCreators(allReviewsActions, dispatch),
		[dispatch]
	)
}
