import cn from 'classnames'
import Link from 'next/link'
import { FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'
import ButtonBase, { IButton } from './ButtonBase'

const Button: FC<PropsWithChildren<IButton>> = props => {
	return props.link ? (
		<Link href={props.link}>
			<a>
				<ButtonBase {...props} />
			</a>
		</Link>
	) : (
		<ButtonBase {...props} />
	)
}

export default Button
