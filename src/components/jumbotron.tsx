import SectionTwoSVG from "./../assets/ccchaos1.svg"

export default function Jumbotron() {
  return (
    <section className="mb-6 bg-cover bg-opacity-75 h-screen bg-center max-h-28" style={{
      backgroundImage:
        `url(${SectionTwoSVG})`,
    }}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center">
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Join the SASHA Community now!</h1>
      </div>
    </section>

  )
}