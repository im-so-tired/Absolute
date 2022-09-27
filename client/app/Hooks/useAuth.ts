import { useAppSelector } from './Redux'

export const useAuth = () => {
	const user = useAppSelector(state => state.user.user)
	return user
}
