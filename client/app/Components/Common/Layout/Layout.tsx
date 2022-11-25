import { FC, PropsWithChildren } from 'react'

import Footer from './Footer/Footer'
import styles from './Layout.module.scss'
import Navigate from './Navigate/Navigate'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Navigate />
			<section className={styles.content}>{children}</section>
			<Footer />
		</div>
	)
}

export default Layout
