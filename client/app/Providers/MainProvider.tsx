import AdapterDateFns from '@date-io/date-fns'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'

import Layout from '@/components/Common/Layout/Layout'

import { TypeComponentsAuthFields } from '@/shared/types/auth.types'

import { store } from '@/store/Store'

import AuthProvider from './Auth/AuthProvider'
import ReduxToastr from './ReduxToastr'

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } },
})
const MainProvider: FC<PropsWithChildren<TypeComponentsAuthFields>> = ({
	children,
	Component,
}) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<AuthProvider Component={Component}>
					<LocalizationProvider dateAdapter={AdapterDateFns}>
						<ReduxToastr />
						<Layout>{children}</Layout>
					</LocalizationProvider>
				</AuthProvider>
			</Provider>
		</QueryClientProvider>
	)
}

export default MainProvider
