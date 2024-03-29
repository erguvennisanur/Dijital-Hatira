import Slider from '../../components/Slider'
import Comments from '../../components/Comments'
const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <div className='flex flex-row h-full w-full justify-center '>
        <Slider />
      </div>

      <div className='flex flex-row gap-10  h-[64vh] w-full p-5 md:p-10'>
        <div className='flex flex-col w-1/2 h-full bg-slate-400 p-5 md:p-10 rounded-2xl border border-slate-500'>
          BİZ KİM KÖPEK
        </div>
        <div className='flex flex-col w-1/2 h-full bg-slate-800 p-5 md:p-10 rounded-2xl border border-slate-500'>
          KÖPEK FOTOSU
        </div>
      </div>
      <div className='flex flex-row gap-5 px-5 md:px-10 items-center justify-center  h-[30vh] w-full'>
        <div className='flex w-1/3 h-2/3 bg-slate-300 p-5 md:p-10'>
          KAÇ KULLANICI VAR
        </div>
        <div className='flex w-1/3 h-2/3 bg-slate-300 p-5 md:p-10'>
          MEMNUNİYET ORANI
        </div>
        <div className='flex w-1/3 h-2/3 bg-slate-300 p-5 md:p-10'>
          SİPARİŞ SAYISI
        </div>
      </div>
      <div className='flex flex-col  items-center justify-center p-5 md:p-10'>
        <Comments />
      </div>
    </div>
  )
}

export default HomePage
