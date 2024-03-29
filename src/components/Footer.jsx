import { IoLogoInstagram } from 'react-icons/io5'
import { CiLinkedin } from 'react-icons/ci'

function Footer() {
  return (
    <footer className=' bg-slate-50 dark:bg-gray-900  '>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='flex flex-col w-1/4 space-y-5'>
            <div className='mb-6 md:mb-0'>
              <a
                href='/'
                className='flex items-center'
              >
                <img
                  src='../../public/dijitalLogo.png'
                  className='h-8 me-3'
                  alt='Dijital Hatıra Logo'
                />
              </a>
            </div>
            <div className='flex flex-col'>
              <h3 className='mb-3 text-xs font-normal text-gray-900 dark:text-white'>
                Dijital Hatıra: Geleceğe Ulaşan Anılar Dijital Hatıra,
                anılarınızı modern teknolojiyle birleştirerek özel ve ölümsüz
                bir deneyim sunar. Biz, anılarınızın değerini ve anlamını daha
                önce hiç olmadığı kadar yükseltiyoruz.
              </h3>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-3 text-md font-semibold text-gray-900 uppercase dark:text-white'>
                Kısa Linkler
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li>
                  <a
                    href='/about'
                    className='hover:underline'
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    href='/Ata'
                    className='hover:underline'
                  >
                    ATATÜRK Köşesi
                  </a>
                </li>
                <li>
                  <a
                    href='/delivery&return'
                    className='hover:underline'
                  >
                    Teslimat ve İade
                  </a>
                </li>
                <li>
                  <a
                    href='/contact'
                    className='hover:underline'
                  >
                    İletişim
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-3 text-md font-semibold text-gray-900 uppercase dark:text-white'>
                Hesabım{' '}
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li>
                  <a
                    href='/login'
                    className='hover:underline'
                  >
                    Giriş Yap
                  </a>
                </li>
                <li>
                  <a
                    href='/signIn'
                    className='hover:underline'
                  >
                    Kayıt Ol
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className='mb-3 text-md font-semibold text-gray-900 uppercase dark:text-white'>
                Yasal
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li>
                  <a
                    href='/kvkk'
                    className='hover:underline'
                  >
                    KVKK
                  </a>
                </li>
                <li>
                  <a
                    href='/politics'
                    className='hover:underline'
                  >
                    Çerez Politikası
                  </a>
                </li>
                <li>
                  <a
                    href='/sellingContract'
                    className='hover:underline'
                  >
                    Mesafeli Satış Sözleşmesi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-md text-gray-500 sm:text-center dark:text-gray-400'>
            © 2023{' '}
            <a
              href='https://dijitalhatira.com/'
              className='hover:underline'
            >
              DijitalHatıra
            </a>
            . Tüm Hakları Saklıdır.
          </span>
          <div className='flex mt-4 justify-center items-center sm:mt-0'>
            <a
              href='https://www.instagram.com/dijitalhatiralar/'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white'
            >
              <IoLogoInstagram className='text-lg  hover:text-red-500' />
              <span className='sr-only'>Instagram</span>
            </a>
            <a
              href='https://www.linkedin.com/company/dijital-hat%C4%B1ra/'
              className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'
            >
              <CiLinkedin className='text-xl  hover:text-red-500' />
              <span className='sr-only'>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
