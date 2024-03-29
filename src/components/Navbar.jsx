import { RiUserHeartLine } from 'react-icons/ri'
import { useEffect, useState } from 'react'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 transition duration-300 ${
        isScrolled ? 'bg-opacity-80' : 'bg-opacity-100'
      }`}
    >
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a
          href='/'
          className='flex items-center space-x-3 rtl:space-x-reverse'
        >
          <img
            src='../../public/dijitalLogo.png'
            className='h-12 md:h-10 w-auto'
            alt='Dijital Hatıra Logo'
          />
        </a>
        <div className='md:hidden'>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='focus:outline-none'
          >
            <svg
              className='w-6 h-6 text-gray-900 dark:text-gray-100'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              {isMobileMenuOpen ? (
                <path d='M6 18L18 6M6 6l12 12'></path>
              ) : (
                <path d='M4 6h16M4 12h16m-7 6h7'></path>
              )}
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } md:block w-full md:w-auto md:order-1`}
        >
          <ul className='flex flex-col md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <a
                href='/'
                className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                aria-current='page'
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Hakkımızda
              </a>
            </li>
            <li>
              <a
                href='/products'
                className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Ürünlerimiz
              </a>
            </li>
            <li>
              <a
                href='/Ata'
                className='block py-2 px-3 md:p-0 text-red-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 d:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Atatürk
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-red-700 md:dark:hover:text-red-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
              >
                İletişim
              </a>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex items-center space-x-3 md:order-2'>
          <a href='/login'>
            <button className='flex items-center gap-2 font-medium tracking-wide py-2 px-5 sm:px-8 border border-red-500 text-red-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-red-500 hover:text-white transition-all hover:shadow-red '>
              Giriş Yap <RiUserHeartLine />
            </button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
