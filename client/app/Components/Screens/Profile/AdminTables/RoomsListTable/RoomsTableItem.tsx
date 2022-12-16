// import EditIcon from '@mui/icons-material/Edit'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import {
	Collapse,
	IconButton,
	TableCell,
	TableRow,
	Tooltip,
} from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import Chip from '@/components/Common/Chip/Chip'
import RoomEditModal from '@/components/Common/RoomEditModal/RoomEditModal'
import MaterialIcon from '@/components/UI/MaterialIcon'

import { useAppSelector } from '@/hooks/Redux'

import { IRoom, booking } from '@/shared/types/room.types'

import { BookingService } from '@/services/Booking.service'

import { toastrError } from '@/utils/toastrError'

import BookingTable from '../BookingTable/BookingTable'

// import Tooltip from '../../../../common/Tooltip'
// import RoomEditModal from '../../../modals/RoomEditModal'
// import BookingTable from '../BookingTable/BookingTable'

type RoomsListTableRowProps = {
	row: IRoom
	bookings: booking[]
	isLoading: boolean
	roomsRefetch: any
	bookingsRefetch: any
}

const RoomsListTableRow: React.FC<RoomsListTableRowProps> = ({
	row,
	bookings,
	isLoading,
	roomsRefetch,
	bookingsRefetch,
}) => {
	const [open, setOpen] = useState(false)
	const [showEditModal, setShowEditModal] = useState(false)
	const isBooking = bookings?.filter(item => item.roomId === row._id)

	useEffect(() => {
		if (isBooking?.length === 0) {
			setOpen(false)
		}
	}, [bookings])

	return !isLoading && isBooking ? (
		<>
			<TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
				<TableCell component="th" scope="row" className="text-blue-500">
					<Link href={`/rooms/${row._id}`}>
						<a>{row.roomNumber}</a>
					</Link>
				</TableCell>
				<TableCell>{row.type === 'Lux' ? 'Люкс' : 'Страндарт'}</TableCell>
				<TableCell align="right">{row.rate}</TableCell>
				<TableCell align="right">{row.price}&#8381;</TableCell>
				<TableCell align="right">
					{(isBooking as booking[]).length > 0 ? (
						<>
							<Chip
								label="Забронирован"
								color="error"
								onMouseDown={e => {
									e.stopPropagation()
								}}
								onDelete={() => setOpen(!open)}
								deleteIcon={
									<Tooltip title="Подробнее" disableInteractive>
										<IconButton aria-label="expand row" size="small">
											{open ? (
												<MaterialIcon name="MdKeyboardArrowDown" />
											) : (
												<MaterialIcon name="MdKeyboardArrowUp" />
											)}
										</IconButton>
									</Tooltip>
								}
							/>
						</>
					) : (
						<Chip label="Свободен" color="success" />
					)}
				</TableCell>
				<TableCell align="right">
					<Tooltip title="Редактировать номер" disableInteractive={true}>
						<IconButton
							aria-label="expand row"
							size="small"
							color="primary"
							onClick={() => setShowEditModal(true)}
						>
							<MaterialIcon name="MdEdit" color="#1E79C9" />
						</IconButton>
					</Tooltip>
				</TableCell>
			</TableRow>

			<TableRow>
				<TableCell style={{ padding: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<BookingTable
							bookingsRefetch={bookingsRefetch}
							bookings={isBooking}
							roomNumber={row.roomNumber}
						/>
					</Collapse>
				</TableCell>
			</TableRow>

			{showEditModal && (
				<RoomEditModal
					roomsRefetch={roomsRefetch}
					open={showEditModal}
					handleClose={() => setShowEditModal(false)}
					roomData={row}
				/>
			)}
		</>
	) : null
}

export default RoomsListTableRow
