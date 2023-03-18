import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Banner = () => {
  return (
    <div className='relative'>
      <div className='absolute w-full h-10 z-30 bg-gradient-to-t bottom-0 from-white to-transparent' />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        interval={5000}
      >
        <div className=''>
          <img
            className='h-96 object-cover'
            loading='lazy'
            src='https://cdn.pixabay.com/photo/2019/12/27/01/46/samsung-4721541_1280.jpg'
            alt='carousel-image'
          />
        </div>
        <div>
          <img
            className='h-96 object-cover'
            loading='lazy'
            src='https://cdn.pixabay.com/photo/2016/11/29/06/18/apple-1867762_1280.jpg'
            alt='carousel-image'
          />
        </div>
        <div>
          <img
            className='h-96 object-cover'
            loading='lazy'
            src='https://cdn.pixabay.com/photo/2021/12/15/06/20/watch-6871817_1280.jpg'
            alt='carousel-image'
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Banner
