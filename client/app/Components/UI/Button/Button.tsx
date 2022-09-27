import cn from 'classnames'
import Link from 'next/link'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import { iconsTypes } from '@/shared/types/iconTypes'

import MaterialIcon from '../MaterialIcon'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	link: string
	background: 'base' | 'primary'
	className?: string
	endIcon?: iconsTypes
}
const buttonClassName = {
	base: styles.baseButton,
	primary: styles.primaryButton,
}
const Button: FC<PropsWithChildren<IButton>> = ({
	background,
	link,
	children,
	className,
	endIcon,
	...rest
}) => {
	return link ? (
		<Link href={link}>
			<a>
				<button
					className={cn(buttonClassName[background], className)}
					{...rest}
				>
					{children}
					{endIcon && <MaterialIcon name={endIcon} />}
				</button>
			</a>
		</Link>
	) : (
		<button className={cn(buttonClassName[background], className)} {...rest}>
			{children}
		</button>
	)
}

export default Button
