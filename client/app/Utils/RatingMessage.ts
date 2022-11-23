export const ratingMessage = (rating: number) => {
	switch (rating) {
		case 1:
			return 'Разочарован'
		case 2:
			return 'Удовлетворительно'
		case 3:
			return 'Хорошо'
		case 4:
			return 'Отлично'
		case 5:
			return 'Великолепно'
	}
}
