import { useState, useEffect } from 'react'

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 4
  const images = [
    'https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg',
    'https://dijitalhatira.com/images/homepage/slider03.png',
    'https://www.wonderplugin.com/wp-content/uploads/2019/05/sydney-opera-house.jpg',
    'https://lh3.googleusercontent.com/proxy/hH-znOiELXUWt1iCNlDOZEnFgbRw0nuDFW443SEy7nYL1ygAEeQzCbfmWkTeU1gKfsa7CU8KQCdTNtKfTPKuFq6-dlFV7WD7nFj5NqM1',
  ]

  // Slide değişimi için zamanlayıcı
  useEffect(() => {
    const intervalId = setInterval(() => {
      goToNextSlide()
    }, 3000) // 3 saniyede bir değişim

    // ComponentWillUnmount benzeri, bileşen unmount edildiğinde zamanlayıcıyı temizle
    return () => clearInterval(intervalId)
  }, [currentSlide]) // Her currentSlide değiştiğinde useEffect'i yeniden çağır

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    )
  }

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    )
  }

  return (
    <div
      id='default-carousel'
      className='relative w-2/3 '
      data-carousel='slide'
    >
      {/* Carousel wrapper */}
      <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
        {/* Slides */}
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? 'block' : 'hidden'
            } duration-700 ease-in-out`}
            data-carousel-item
          >
            <img
              src={imageUrl}
              className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      {/* Slider indicators */}
      <div className='absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse'>
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            type='button'
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-300'
            }`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type='button'
        className='absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-prev
        onClick={goToPrevSlide}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M5 1 1 5l4 4'
            />
          </svg>
          <span className='sr-only'>Previous</span>
        </span>
      </button>
      <button
        type='button'
        className='absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
        data-carousel-next
        onClick={goToNextSlide}
      >
        <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
          <svg
            className='w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 6 10'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='m1 9 4-4-4-4'
            />
          </svg>
          <span className='sr-only'>Next</span>
        </span>
      </button>
    </div>
  )
}

export default Carousel
