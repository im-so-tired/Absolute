export const getValueLocalStorage = (key: string) => {
	if (typeof window !== 'undefined' && localStorage !== undefined) {
		const data = localStorage.getItem(key)
		return data ? JSON.parse(data) : null
	}
	return null
}
