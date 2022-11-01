import React, { ReactNode, forwardRef, useState } from 'react'

import MaterialIcon from '@/components/UI/MaterialIcon'

import styles from './Cost.module.scss'

interface Props {
	children?: ReactNode
}
type Ref = HTMLButtonElement
const TooltipComponent = forwardRef<Ref, Props>(function Tooltip(props, ref) {
	const [currentColor, setCurrentColor] = useState('#8F8FA0')
	return (
		<span {...props} ref={ref} className="h-[22px]">
			<button
				className={styles.tooltip}
				onMouseEnter={() => setCurrentColor('#BC9CFF')}
				onMouseLeave={() => setCurrentColor('#8F8FA0')}
			>
				<MaterialIcon name="MdInfoOutline" color={currentColor} />
			</button>
		</span>
	)
})

export default TooltipComponent
