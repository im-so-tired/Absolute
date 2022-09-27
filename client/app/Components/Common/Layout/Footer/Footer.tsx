import { FC } from 'react'

import FieldBase from '@/components/UI/Fields/FieldBase/FieldBase'
import MaterialIcon from '@/components/UI/MaterialIcon'

import Container from '../../Container/Container'
import Logo from '../Navigate/Logo'

import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<Container>
			<div className={styles.footer}>
				<div>
					<div>
						<Logo />
						<span>
							Бронирование номеров в лучшем отеле 2021 года по версии ассоциации
							«Отельные взгляды»
						</span>
					</div>
					<div>
						<h4>Подписка</h4>
						<p>Получайте специальные предложения и новости сервиса</p>
						<FieldBase dynamicLabel={false} className={styles.input}>
							<div>
								<input type="text" placeholder="Email" />
								<button>
									<MaterialIcon name="MdSend" />
								</button>
							</div>
						</FieldBase>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default Footer
