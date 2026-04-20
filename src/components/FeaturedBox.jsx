const FeaturedBox = () => {
  return (
    <section className="bg-[#f5f5f3] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[28px] bg-[#e9e9e6] min-h-[520px]">
          
          {/* Imagen izquierda */}
          <div className="h-[520px] w-full lg:w-[62%]">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80"
              alt="Paciente en clínica de fisioterapia"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Caja de contenido derecha */}
          <div className="relative lg:absolute lg:right-12 lg:top-1/2 lg:w-[42%] lg:-translate-y-1/2">
            <div className="m-4 rounded-[24px] bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.12)] sm:p-10 md:p-12">
              <h2 className="text-3xl font-extrabold leading-tight text-black sm:text-4xl">
                Recupera tu bienestar con un tratamiento{' '}
                <span className="text-yellow-500">personalizado</span>
              </h2>

              <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">
                En Fisioprotema estudiamos tu caso de forma individual para ayudarte
                a reducir el dolor, mejorar tu movilidad y acelerar tu recuperación
                con un enfoque profesional y cercano.
              </p>

              <div className="mt-8">
                <a
                  href="https://wa.me/34637883587"
                  target="_blank"
                  rel="noreferrer"
className="inline-flex rounded-xl bg-yellow-400 px-7 py-4 text-base font-bold text-black transition hover:bg-yellow-300"                >
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