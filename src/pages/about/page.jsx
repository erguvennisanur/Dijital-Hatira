const About = () => {
  return (
    <div className='flex flex-col w-full h-[72vh] items-center justify-center'>
      <div className='flex flex-col md:flex-row items-center justify-center'>
        {/* Resim */}
        {/* <div className='md:w-1/3 px-5 mb-5 md:mb-0'>
          <img
            src='https://dijitalhatira.com/images/about/about.png?v=BNm-i7ogwyxd5J2hUudSmSyiKg0KDOz4vJYu-forQAI'
            className='w-full'
            alt='Hakkımızda'
          />
        </div> */}
        {/* Metin */}
        <div className='flex flex-col md:w-2/3 gap-5 mx-5 md:mx-0 border-1 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] p-5'>
          <h2 className='font-bold text-3xl'>Hakkımızda</h2>

          <p className='font-semibold text-xl'>
            Anılarınız için Dijital Hatıra
          </p>
          <p>
            "Dijital Hatıra: Mezar Taşlarına Anlamlı Bir Dokunuş İstanbul'da
            2023 yılında kurulan Dijital Hatıra, anıların sonsuzluğunu mezar
            taşlarına taşıma misyonu ile yola çıkan bir girişimdir. Şirket,
            ölümden sonra sevdiklerinizi hatırlamanın modern ve özgün bir yolunu
            sunar. Dijital Hatıra'nın vizyonu, geleneksel anma ritüellerini
            modern teknolojiyle buluşturarak, insanların sevdiklerini unutulmaz
            bir şekilde anmalarına yardımcı olmaktır. Mezar taşları artık sadece
            birer anıt değil, sevdiklerinizi hatırlamanın ve hikayelerini
            paylaşmanın yeni bir yolu haline gelmiştir. Dijital Hatıra, ölümden
            sonra sevdiklerinizi anarken teknolojinin gücünü kullanmanın güzel
            ve anlamlı bir yolunu sunar. Şirketin vizyonu, gelecekte daha fazla
            insanın bu özel hizmetten faydalanmasını sağlamak ve sevdiklerimizi
            unutulmaz bir şekilde hatırlamak için yeni yollar yaratmaktır."
          </p>
          <p className='font-semibold'>
            Dijital Hatıra'nın 4 kurucu ortağı, mezar taşları üzerine QR kodlar
            ekleyerek ölen insanların fotoğraflarını ve biyografilerini paylaşma
            fikrini geliştirdi. Bu inovasyon, sevdiklerinin yaşam hikayelerini
            ve anılarını ziyaretçileriyle paylaşma fırsatı sunarken, mezar
            taşlarını sadece bir anıt değil, aynı zamanda etkileşimli bir
            platform haline getiriyor.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
