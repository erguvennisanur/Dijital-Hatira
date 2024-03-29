const Contact = () => {
  return (
    <div className='flex flex-col w-full h-[64vh] items-center justify-center'>
      <h2 className='font-bold text-2xl px-10 pb-5 md:pb-10'>İletişim</h2>
      <div className='flex flex-col md:flex-row items-center justify-center w-full px-5'>
        {/* İletişim Formu */}
        <form className='flex flex-col md:w-2/3 gap-5 mx-5 md:mx-0 border-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-5'>
          <div className='flex flex-col md:flex-row md:space-x-4'>
            <input
              type='text'
              placeholder='Adınız'
              className='flex-1 border-2 rounded-md py-2 px-3 focus:outline-none focus:border-red-500'
            />
            <input
              type='text'
              placeholder='Soyadınız'
              className='flex-1 border-2 rounded-md py-2 px-3 focus:outline-none focus:border-red-500'
            />
            <input
              type='text'
              placeholder='Telefon Numarası'
              className='flex-1 border-2 rounded-md py-2 px-3 focus:outline-none focus:border-red-500'
            />
            <input
              type='text'
              placeholder='E-posta Adresiniz'
              className='flex-1 border-2 rounded-md py-2 px-3 focus:outline-none focus:border-red-500'
            />
          </div>
          <textarea
            placeholder='Mesajınız'
            rows='5'
            className='border-2 rounded-md py-2 px-3 focus:outline-none focus:border-red-500'
          ></textarea>
          <button
            type='submit'
            className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500'
          >
            Gönder
          </button>
        </form>
        {/* İletişim Bilgileri */}
        <div className='md:w-1/3 px-5 mt-5 md:mt-0'>
          <h3 className='text-xl font-semibold mb-3'>İletişim Bilgileri</h3>
          <p>
            Adres: 123 Sokak, Şehir, Ülke
            <br />
            Telefon: +123 456 7890
            <br />
            E-posta: info@dijitalhatira.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
