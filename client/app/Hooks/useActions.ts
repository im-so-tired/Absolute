import { bindActionCreators } from '@reduxjs/toolkit'
import { useMemo } from 'react'

import { allUserActions, allFormActions } from '@/store/RootActions'

import { useAppDispatch } from './Redux'

export const useMainFormActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(
		() => bindActionCreators(allFormActions, dispatch),
		[dispatch]
	)
}

export const useUserActions = () => {
	const dispatch = useAppDispatch()
	return useMemo(() => bindActionCreators(allUserActions, dispatch), [dispatch])
}
