import type { AppProps } from 'next/app'

import { TypeComponentsAuthFields } from '@/shared/types/auth.types'

import '../styles/globals.scss'

import MainProvider from '@/providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentsAuthFields
function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
