export const countReviews = (count: number) => {
	const message =
		count !== 1
			? count < 5 && count !== 0
				? `${count} отзыва`
				: `${count} отзывов`
			: `${count} отзыв`
	return message
}
