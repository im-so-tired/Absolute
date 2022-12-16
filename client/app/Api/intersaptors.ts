import axios from 'axios'
import Cookies from 'js-cookie'

export const axiosClassic = axios.create({
	baseURL: `http://localhost:9000/api`,
	headers: {
		'Content-Type': 'application/json',
	},
})

export const axiosAuth = axios.create({
	baseURL: `http://localhost:9000/api`,
	headers: {
		'Content-Type': 'application/json',
	},
})
axiosAuth.interceptors.request.use(config => {
	const accessToken = Cookies.get('accessToken')
	if (config.headers && accessToken)
		config.headers.Authorization = `Bearer ${accessToken}`
	return config
})
