import { FC } from 'react'
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md'
import Slider, { CustomArrowProps } from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

function SlickPrev(props: CustomArrowProps) {
	const { onClick, style } = props
	return (
		<button
			onClick={onClick}
			className="slick-arrow slick-arrow prev"
			style={{ ...style, color: 'white', zIndex: '2' }}
		>
			<MdArrowBackIos />
		</button>
	)
}

function SlickNext(props: CustomArrowProps) {
	const { onClick, style } = props
	return (
		<button
			onClick={onClick}
			className="slick-arrow slick-arrow next"
			style={{ ...style, color: 'white', zIndex: '2' }}
		>
			<MdArrowForwardIos />
		</button>
	)
}

const ImageSlider: FC<{ imgArray: string[] }> = ({ imgArray }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SlickNext />,
		prevArrow: <SlickPrev />,
	}
	return (
		<Slider {...settings}>
			{imgArray.map((img, index) => (
				<div key={index}>
					<div
						className="sliderImage"
						style={{ backgroundImage: `url(${img}` }}
					></div>
				</div>
			))}
		</Slider>
	)
}

export default ImageSlider
