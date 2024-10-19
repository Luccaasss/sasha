import heroImg from '../assets/openart-b344a656ff7d4c3893bf9aaac4224724_raw-1.webp'

export default function SectionHero() {
  return (
    <div className="bg-cover h-screen bg-center" style={{
      backgroundImage:
        `url(${heroImg})`,

    }}>
      <div className='flex flex-col items-center h-[100%]  justify-center'>
        <div className='font-Sora font-extrabold text-[#00DED1] mb-6 text-6xl sm:text-8xl md:text-9xl'>SASHA</div>
        <div className='text-base text-[#00DED1] sm:text-3xl'>FAIR LAUNCH ◽ NO PREMINT</div>
      </div>

    </div>
  )
}


