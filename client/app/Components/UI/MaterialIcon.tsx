import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { iconsTypes } from '@/shared/types/iconTypes'

interface IMaterialIconProps {
	name: iconsTypes
	color?: string
	size?: number
}

const MaterialIcon: FC<IMaterialIconProps> = ({
	name,
	color = '#fff',
	size = 22,
}) => {
	const IconComponent = MaterialIcons[name]
	return (
		<IconComponent color={color} size={size} /> || (
			<MaterialIcons.MdDragIndicator color={color} size={size} />
		)
	)
}

export default MaterialIcon
