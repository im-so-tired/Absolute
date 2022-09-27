import { FC, PropsWithChildren } from 'react'

import styles from './AuthLayout.module.scss'

const AuthLayout: FC<PropsWithChildren<{ header: string }>> = ({
	children,
	header,
}) => {
	return (
		<div className={styles.authLayout}>
			<div className={styles.forma}>
				<h2>{header}</h2>
				{children}
			</div>
		</div>
	)
}

export default AuthLayout
