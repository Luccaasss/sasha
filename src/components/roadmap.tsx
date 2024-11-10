import check from '../assets/check.svg'
import nocheck from '../assets/nocheck.svg'

export default function Roadmap() {

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#00DED1] sm:text-4xl lg:text-5xl">Roadmap
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-400 lg:text-xl lg:leading-8">
            The SASHA team is dedicated to growth, innovation, and community success.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-5">
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"></span>
            <div
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <img src={check} alt="logo" className='h-6' />
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3
                className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Fair Launch Deployment
              </h3>
              <h4 className="mt-2 text-base text-gray-400">Deploy the contract with a fair launch approach.</h4>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"></span>
            <div
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ion-200">
              <img src={check} alt="logo" className='h-6' />
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3
                className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Community Growth
              </h3>
              <h4 className="mt-2 text-base text-gray-400">Continue expanding and engaging the community on Telegram, Twitter, and other social platforms.</h4>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"></span>
            <div
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              <img src={nocheck} alt="logo" className='h-6' />
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3
                className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                CEX Listing
              </h3>
              <h4 className="mt-2 text-base text-gray-400">Work towards getting listed on centralized exchanges (CEX) to increase accessibility and exposure.</h4>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"></span>
            <div
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ">
              <img src={nocheck} alt="logo" className='h-6' />
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3
                className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                NFTs and Additional Features
              </h3>
              <h4 className="mt-2 text-base text-gray-400">Launch an NFT collection and explore further developments, introducing new features and innovations.</h4>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <div
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ">
              <img src={nocheck} alt="logo" className='h-6' />
            </div>
            <div className="ml-6 lg:ml-0 lg:mt-10">
              <h3
                className="text-xl font-bold text-white before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
                Future Updates
              </h3>
              <h4 className="mt-2 text-base text-gray-400">Stay tuned for more updates and exciting additions in the roadmap!</h4>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}