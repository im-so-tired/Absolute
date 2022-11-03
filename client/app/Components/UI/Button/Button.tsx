import cn from 'classnames'
import Link from 'next/link'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { iconsTypes } from '@/shared/types/iconTypes'

import MaterialIcon from '../MaterialIcon'

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
