import cn from 'classnames'
import React, { ButtonHTMLAttributes, FC } from 'react'

import { iconsTypes } from '@/shared/types/iconTypes'

import MaterialIcon from '../MaterialIcon'

import styles from './Button.module.scss'

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	link?: string
	background: 'base' | 'primary'
	className?: string
	endIcon?: iconsTypes
}
const buttonClassName = {
	base: styles.baseButton,
	primary: styles.primaryButton,
}
const ButtonBase: FC<IButton> = ({
	background,
	link,
	children,
	className,
	endIcon,
	...rest
}) => {
	return (
		<button className={cn(buttonClassName[background], className)} {...rest}>
			<span>{children}</span>
			{endIcon && <MaterialIcon name={endIcon} />}
		</button>
	)
}

export default ButtonBase
