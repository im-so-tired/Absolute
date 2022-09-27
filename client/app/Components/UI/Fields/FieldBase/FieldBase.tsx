import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import styles from './FieldBase.module.scss'

interface IFieldBaseProps {
	className?: string
	dynamicLabel: boolean
}
const FieldBase: FC<PropsWithChildren<IFieldBaseProps>> = ({
	children,
	className,
	dynamicLabel,
}) => {
	const labelStyles = dynamicLabel ? '' : styles.labelStyles
	return (
		<div className={cn(styles.container, className, labelStyles)}>
			{children}
		</div>
	)
}

export default FieldBase
