import React, { ReactNode, forwardRef, useState } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import { iconsTypes } from '@/shared/types/iconTypes'

import styles from './Comments.module.scss'

interface Props {
	children?: ReactNode
	secondColor: string
	iconName: iconsTypes
	onClick?: () => void
}
type Ref = HTMLButtonElement
const TooltipButton = forwardRef<Ref, Props>(function Tooltip(
	{ onClick, secondColor, iconName, ...rest },
	ref
) {
	const [currentColor, setCurrentColor] = useState('#C7C7CF')
	return (
		<span {...rest} ref={ref} className={styles.tooltip}>
			<button
				onClick={onClick}
				style={{ backgroundColor: currentColor }}
				onMouseEnter={() => setCurrentColor(secondColor)}
				onMouseLeave={() => setCurrentColor('#C7C7CF')}
			>
				<MaterialIcon name={iconName} color="white" />
			</button>
		</span>
	)
})

export default TooltipButton
