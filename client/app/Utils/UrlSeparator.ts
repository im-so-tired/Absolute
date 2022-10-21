export const UrlSeparator = (path: string) => {
	return path.split('/').filter(item => item !== '')
}
