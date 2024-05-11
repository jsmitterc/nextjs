import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container
    padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28
    lg:py-20 xl:flex-row'>
      <div className='hero-map'/>

      {/* LEFT */}
      <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
        {/* <Image
          src="/camp.svg"
          width={50}
          height={50}
          alt="camp"
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
          /> */}
          <h1 className='bold-52 lg:bold-88'><span className='text-purple-400'>Agenda</span> con tus negocios favoritos</h1>
          <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>Agenda en un solo lugar, busca la comdidad usando el app. Recibe notificaciones para no perder tu cita. Paga online</p>
          {/* <div className='my-11 flex flex-wrap gap-5'>
            <div className='flex items-center gap-2'>
              {Array(5).fill(1).map((_,index) => (
                <Image 
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}

            </div>
            <p className='bold-16 lg:bold-20 text-blue-70'>
              198K
              <span className='regular-16 lg:regular-20 ml-1'>Excelent Reviews</span>
            </p>

          </div> */}
          <div className='flex w-full gap-3  sm:flex-row mt-4'>
              <a className='cursor-pointer' href='https://play.google.com/store/apps/details?id=com.fidelizado.app' target='_blank'>
                <Image
                  src="/images/google-play-badge.png"
                  width={200}
                  height={200}
                  alt='google'
                />                
              </a>

              {/* <Button
                type='button'
                title='Desc'
                variant='btn_green'
              />
              <Button
                type='button'
                title='How We Work?'
                icon='/play.svg'
                variant='btn_white_text'
              /> */}
          </div>
      </div>
      <div className='relative flex flex-1 items-start'>
        {/* <div className='w-[246px] flex z-20 relative flex-col gap-8 top-[-40px] left-[-40px]
        rounded-3xl bg-purple-400 px-7 py-8'>
          <div className='flex flex-col'>
            <div className='flexBetween'>
              <p className='regular-16 text-black'>Local</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className='bold-20 text-white'>Super Lash</p>
          </div>
          <div className='flexBetween'>
            <div className='flex flex-col'>
              <p className='regular-16 block text-black'>Distance</p>
              <p className='bold-20 text-white'>173.28 mi</p>
            </div>
            <div className='flex flex-col'>
              <p className='regular-16 block text-black'>Elevation</p>
              <p className='bold-20 text-white'>2.040 km</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Hero