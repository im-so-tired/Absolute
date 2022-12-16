// import FirstPageIcon from '@mui/icons-material/FirstPage'
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
// import LastPageIcon from '@mui/icons-material/LastPage'
import { TableHead, TableSortLabel } from '@mui/material'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import { useTheme } from '@mui/material/styles'
import { useQuery } from '@tanstack/react-query'
import PropTypes from 'prop-types'

import TableBody from '@/components/Common/Table/TableBody'

import { useAppSelector } from '@/hooks/Redux'
import usePagination from '@/hooks/usePagination'
import useSort from '@/hooks/useSort'

import { IRoom } from '@/shared/types/room.types'

import { BookingService } from '@/services/Booking.service'
import { RoomsService } from '@/services/Rooms/Rooms.service'

import { toastrError } from '@/utils/toastrError'

import styles from '../AdminTables.module.scss'

import RoomsListTableRow from './RoomsTableItem'

// function TablePaginationActions(props) {
// 	const theme = useTheme()
// 	const { count, page, rowsPerPage, onPageChange } = props

// 	const handleFirstPageButtonClick = event => {
// 		onPageChange(event, 0)
// 	}

// 	const handleBackButtonClick = event => {
// 		onPageChange(event, page - 1)
// 	}

// 	const handleNextButtonClick = event => {
// 		onPageChange(event, page + 1)
// 	}

// 	const handleLastPageButtonClick = event => {
// 		onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
// 	}

// return (
// 	<Box sx={{ flexShrink: 0, ml: 2.5 }}>
// 		<IconButton
// 			onClick={handleFirstPageButtonClick}
// 			disabled={page === 0}
// 			aria-label="first page"
// 		>
// 			{theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
// 		</IconButton>
// 		<IconButton
// 			onClick={handleBackButtonClick}
// 			disabled={page === 0}
// 			aria-label="previous page"
// 		>
// 			{theme.direction === 'rtl' ? (
// 				<KeyboardArrowRight />
// 			) : (
// 				<KeyboardArrowLeft />
// 			)}
// 		</IconButton>
// 		<IconButton
// 			onClick={handleNextButtonClick}
// 			disabled={page >= Math.ceil(count / rowsPerPage) - 1}
// 			aria-label="next page"
// 		>
// 			{theme.direction === 'rtl' ? (
// 				<KeyboardArrowLeft />
// 			) : (
// 				<KeyboardArrowRight />
// 			)}
// 		</IconButton>
// 		<IconButton
// 			onClick={handleLastPageButtonClick}
// 			disabled={page >= Math.ceil(count / rowsPerPage) - 1}
// 			aria-label="last page"
// 		>
// 			{theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
// 		</IconButton>
// 	</Box>
// )
// }

interface IHeadCeils {
	id: keyof IRoom | 'bookings'
	numeric?: boolean
	disablePadding?: boolean
	label: string
}

const headCeils: IHeadCeils[] = [
	{
		id: 'roomNumber',
		numeric: false,
		disablePadding: false,
		label: '№ Номера',
	},
	{
		id: 'type',
		numeric: false,
		disablePadding: false,
		label: 'Тип',
	},
	{
		id: 'rate',
		numeric: true,
		disablePadding: false,
		label: 'Рейтинг',
	},
	{
		id: 'price',
		numeric: true,
		disablePadding: false,
		label: 'Аренда в сутки',
	},
	{
		id: 'bookings',
		numeric: true,
		disablePadding: false,
		label: 'Статус',
	},
]

export const RoomsListTable = () => {
	const rowsPerPageOptions = [5, 10, 25]
	// const rooms = useAppSelector(state => state.)
	// const roomsIsLoading = useAppSelector()

	const {
		data: rooms,
		isLoading,
		refetch: roomsRefetch,
	} = useQuery(
		['get rooms in admin dashboard'],
		() => RoomsService.getAllRooms(),
		{
			select: data => data?.data,
			onError: error => toastrError('Неправильный запрос', error),
		}
	)

	const {
		data: bookings,
		isLoading: isBookingsLoading,
		refetch: bookingsRefetch,
	} = useQuery(
		['get bookings in admin dashboard'],
		() => BookingService.getAllbookings(),
		{
			select: data => data,
			onError: error => toastrError('Неправильный запрос', error),
		}
	)

	const { sortedItems, sortBy, handleRequestSort } = useSort(
		rooms?.data.map(room => ({
			...room,
			bookings: !!bookings?.filter(item => item.roomId === room._id).length,
		})) || [],
		{
			path: 'bookings',
			order: 'desc',
		}
	)

	const createSortHandler =
		(property: any) => (event: React.MouseEvent<unknown>) => {
			if (handleRequestSort) {
				handleRequestSort(event, property)
			}
		}

	const {
		itemsListCrop: roomsCroppedList,
		currentPage,
		pageSize,
		handleChangePage,
		handleChangePageSize,
	} = usePagination(sortedItems, rowsPerPageOptions[0])

	// console.log(rooms?.data)

	return (
		<>
			{!isLoading && (
				<Box sx={{ width: '100%' }} className="mt-4 mb-1">
					<TableContainer component={Paper} className="min-h-fit">
						<h1 className="font-bold text-2xl ml-8 mt-4">Список номеров</h1>
						<Table>
							<TableHead>
								<TableRow>
									{headCeils.map(headCell => (
										<TableCell
											key={String(headCell.id)}
											align={headCell?.numeric ? 'right' : 'left'}
											padding={headCell?.disablePadding ? 'none' : 'normal'}
											sortDirection={
												sortBy && sortBy.path === headCell.id
													? sortBy.order
													: false
											}
										>
											{sortBy && (
												<TableSortLabel
													active={sortBy.path === headCell.id}
													direction={
														sortBy.path === headCell.id ? sortBy.order : 'asc'
													}
													onClick={createSortHandler(headCell.id)}
												>
													{headCell.label}
													{sortBy.path === headCell.id ? (
														<span className={styles['visually-hidden']}>
															{sortBy.order === 'desc'
																? 'sorted descending'
																: 'sorted ascending'}
														</span>
													) : null}
												</TableSortLabel>
											)}
											{!sortBy && headCell.label}
										</TableCell>
									))}
									<TableCell />
								</TableRow>
							</TableHead>
							<TableBody
								itemsCount={sortedItems.length}
								page={currentPage - 1}
								rowsPerPage={pageSize}
							>
								{roomsCroppedList.map((row: IRoom) => (
									<RoomsListTableRow
										roomsRefetch={roomsRefetch}
										bookingsRefetch={bookingsRefetch}
										bookings={bookings || []}
										isLoading={isBookingsLoading}
										key={row._id}
										row={row}
									/>
								))}
							</TableBody>
							{/* <TableBody>
							<TableRow>
								<TableCell>
									<p>ss</p>
								</TableCell>
								<TableCell>
									<p>ss</p>
								</TableCell>
								<TableCell>
									<p>ss</p>
								</TableCell>
							</TableRow>
						</TableBody> */}
							{/* {roomsCroppedList.map(row => (
								<RoomsListTableRow key={row._id} row={row} />
							))} */}
							{/* </TableBody> */}
						</Table>
						<TablePagination
							rowsPerPageOptions={[5, 10, 25]}
							component="div"
							count={Number(rooms?.totalCount)}
							rowsPerPage={pageSize}
							page={currentPage - 1}
							onPageChange={(event, value) =>
								handleChangePage(event, value + 1)
							}
							onRowsPerPageChange={handleChangePageSize}
							labelRowsPerPage="Номеров на странице"
						/>
					</TableContainer>
				</Box>
			)}
		</>
	)
}

export default RoomsListTable
