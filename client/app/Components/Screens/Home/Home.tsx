import { FC } from 'react'

import Container from '@/components/Common/Container/Container'

import styles from './Home.module.scss'
import HomeForm from './HomeForm/HomeForm'

const Home: FC = () => {
	return (
		<main className={styles.home}>
			<Container>
				<HomeForm />
			</Container>
		</main>
	)
}

export default Home
