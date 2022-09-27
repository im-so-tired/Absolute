import { FC, PropsWithChildren } from 'react'

import Footer from './Footer/Footer'
import Navigate from './Navigate/Navigate'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navigate />
			{children}
			<Footer />
		</>
	)
}

export default Layout
