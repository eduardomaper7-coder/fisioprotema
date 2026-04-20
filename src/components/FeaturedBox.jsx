const FeaturedBox = () => {
  return (
    <section className="bg-[#f5f5f3] py-16 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-[#e9e9e6] min-h-[auto] lg:min-h-[520px]">
          
          {/* Imagen */}
          <div className="h-[260px] w-full lg:h-[520px] lg:w-[62%]">
            <img
              src="/fisioterapia.jpg"
              alt="Fisioterapia profesional"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja texto */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-8 md:p-10">
              
              <h2 className="text-2xl font-extrabold leading-tight text-black sm:text-4xl">
                Recupera tu bienestar con un tratamiento{' '}
                <span className="text-[#E4B525]">personalizado</span>
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-600 sm:text-lg">
                En Fisioprotema estudiamos tu caso de forma individual para ayudarte
                a reducir el dolor, mejorar tu movilidad y acelerar tu recuperación.
              </p>

              <div className="mt-6">
                <a
                  href="https://wa.me/34637883587"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-xl bg-[#E4B525] px-6 py-3 text-sm font-bold text-black transition hover:bg-yellow-300 sm:px-7 sm:py-4 sm:text-base"
                >
                  Pide tu cita
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBox