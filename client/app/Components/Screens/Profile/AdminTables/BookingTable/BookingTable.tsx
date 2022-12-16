import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from '@mui/material'
import React from 'react'

import { booking } from '@/shared/types/room.types'

import BookingTableRow from './BookingTableRow'

// import BookingTableRow from './BookingTableRow'

type BookingTableProps = {
	bookings: booking[]
	roomNumber: string | number
	bookingsRefetch: any
}

const BookingTable: React.FC<BookingTableProps> = ({
	bookings,
	roomNumber,
	bookingsRefetch,
}) => {
	const headCells = [
		{ id: 'bookingId', label: 'ID' },
		{ id: 'arrivalDate', label: 'Дата заезда' },
		{ id: 'departureDate', label: 'Дата выезда' },
		{ id: 'guests', label: 'Кол-во гостей' },
		{ id: 'totalPrice', label: 'Цена', numeric: true },
	]
	return (
		<>
			<h3 className="m-3 font-bold text-lg">{`Список бронирований номера №${roomNumber}`}</h3>
			{/* <Table size='small' aria-label='purchases'>
                <TableHeader headCells={headCells} />
                <TableBody>
                {bookings.map(bookingRow => (
                    <BookingTableRow key={bookingRow._id} row={bookingRow} />
                ))}
                </TableBody>
            </Table> */}
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							{headCells.map(cell => (
								<TableCell
									key={String(cell.id)}
									align={cell?.numeric ? 'right' : 'left'}
								>
									{cell.label}
								</TableCell>
							))}
							{/* <TableCell>Dessert (100g serving)</TableCell>
							<TableCell align="right">Calories</TableCell>
							<TableCell align="right">Fat&nbsp;(g)</TableCell>
							<TableCell align="right">Carbs&nbsp;(g)</TableCell>
							<TableCell align="right">Protein&nbsp;(g)</TableCell> */}
						</TableRow>
					</TableHead>
					<TableBody>
						{bookings.map(bookingRow => (
							<BookingTableRow
								bookingsRefetch={bookingsRefetch}
								key={bookingRow._id}
								row={bookingRow}
							/>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	)
}

export default BookingTable
