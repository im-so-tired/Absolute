import { IconButton, TableCell, TableRow, Tooltip } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'

import MaterialIcon from '@/components/UI/MaterialIcon'

import { booking } from '@/shared/types/room.types'

import { BookingService } from '@/services/Booking.service'

import { getDateByNumber } from '@/utils/getDateByNumber'
import { toastrError } from '@/utils/toastrError'

import { getBadyMessage, getGuestMessage } from '@/helpers/correctMessage'

type BookingTableRowProps = {
	row: booking
	bookingsRefetch: any
}

const BookingTableRow: React.FC<BookingTableRowProps> = ({
	row,
	bookingsRefetch,
}) => {
	const { mutateAsync } = useMutation(
		['delete booking in dashboard'],
		(bookId: string) => BookingService.delete(bookId),
		{
			onSuccess: () => {
				bookingsRefetch()
			},
			onError: error => toastrError('Неправильный запрос', error),
		}
	)
	const handleRemoveBooking = async () => {
		await mutateAsync(row._id)
	}

	return (
		<TableRow>
			<TableCell component="th" scope="row">
				{row._id}
			</TableCell>
			<TableCell component="th" scope="row">
				{getDateByNumber(row.dateComing, {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})}
			</TableCell>
			<TableCell>
				{getDateByNumber(row.dateExit, {
					day: 'numeric',
					month: 'long',
					year: 'numeric',
				})}
			</TableCell>
			<TableCell>
				{`${getGuestMessage([
					{ type: 'adults', count: row.adults },
					{ type: 'babies', count: row.babies || 0 },
				])}
                ${getBadyMessage(row.babies || 0)}
                `}
			</TableCell>
			<TableCell align="right">{row.totalPrice}&#8381;</TableCell>
			<TableCell>
				<div>
					<Tooltip title="Отменить бронирование" disableInteractive={true}>
						<IconButton
							aria-label="expand row"
							size="small"
							color="error"
							onClick={handleRemoveBooking}
						>
							<MaterialIcon name="MdCancel" color="red" />
						</IconButton>
					</Tooltip>
				</div>
			</TableCell>
		</TableRow>
	)
}

export default BookingTableRow
