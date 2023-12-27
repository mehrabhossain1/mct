import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import bannerImg from '../../assets/banner/18963.jpg'

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={bannerImg} />
        <p className='legend'>Legend 1</p>
      </div>
      <div>
        <img src={bannerImg} />
        <p className='legend'>Legend 2</p>
      </div>
      <div>
        <img src={bannerImg} />
        <p className='legend'>Legend 3</p>
      </div>
    </Carousel>
  )
}

export default Banner
