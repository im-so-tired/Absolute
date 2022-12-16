import { useCallback, useEffect, useState } from 'react'

function usePagination<T>(
	items: Array<T>,
	defaultPageSize?: number,
	defaultCurrentPage?: number
) {
	const [currentPage, setCurrentPage] = useState<number>(
		defaultCurrentPage || 1
	)
	const [pageSize, setPageSize] = useState(defaultPageSize || 5)

	useEffect(() => {
		if (items.length < pageSize) {
			setCurrentPage(1)
		}
	}, [items, pageSize])

	const handleChangePage = useCallback((event: MouseEvent, value: number) => {
		setCurrentPage(value)
	}, [])

	const handleChangePageSize = useCallback(
		(event: React.MouseEvent<HTMLInputElement>) => {
			setPageSize(parseInt((event?.target as HTMLInputElement).value, 10))
			setCurrentPage(1)
		},
		[]
	)

	const itemsListCrop = items.slice(
		(currentPage - 1) * pageSize,
		(currentPage - 1) * pageSize + pageSize
	)

	return {
		itemsListCrop,
		currentPage,
		pageSize,
		handleChangePage,
		handleChangePageSize,
	} as any
	// const theme = useTheme()
	// const { count, page, rowsPerPage, onPageChange } = props

	// const handleFirstPageButtonClick = event => {
	// 	onPageChange(event, 0)
	// }

	// const handleBackButtonClick = event => {
	// 	onPageChange(event, page - 1)
	// }

	// const handleNextButtonClick = event => {
	// 	onPageChange(event, page + 1)
	// }

	// const handleLastPageButtonClick = event => {
	// 	onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
	// }
}

export default usePagination
