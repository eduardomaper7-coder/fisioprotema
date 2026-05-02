const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-[130px] md:pt-[170px]"
      style={{
        backgroundImage: "url('/hero-fisio.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/25 to-black/45"></div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-12 text-center md:pb-16">

        {/* LOGO (solo desktop) */}
        <img
          src="/logo-hero.png"
          alt="Fisioprotema"
          className="mb-8 hidden h-16 w-auto md:block md:h-20"
        />

        {/* TÍTULO */}
        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Fisioterapia avanzada en{' '}
          <span className="text-[#E4B525]">Leganés</span>
        </h1>

        {/* TEXTO */}
        <p className="mt-6 max-w-3xl text-base leading-8 text-white/95 sm:text-lg md:mt-8 md:text-xl md:leading-9">
          Tratamientos personalizados para aliviar el dolor, recuperar tu movilidad
          y mejorar tu bienestar con un enfoque profesional, cercano y basado en la evidencia.
        </p>

        {/* BOTONES */}
        <div className="mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center md:mt-10">
          
          {/* SOLO MÓVIL */}
          <a
            href="tel:637883587"
            className="inline-flex justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-black md:hidden"
          >
            Llamar ahora
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/34637883587"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#E4B525] px-8 py-4 text-lg font-bold text-black transition hover:bg-[#C89B00]"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="h-6 w-6 object-contain"
            />
            Pedir cita
          </a>

          {/* SERVICIOS */}
          <a
            href="#servicios"
            className="hidden items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-semibold text-black transition hover:bg-[#f3f3f3] sm:inline-flex"
          >
            Nuestros servicios
          </a>
        </div>

        {/* DESCUBRE MÁS */}
        <a
          href="#servicios"
          className="mt-16 flex flex-col items-center text-white md:mt-24"
        >
          <span className="text-base font-medium text-white">Descubre más</span>
          <span className="mt-2 text-2xl text-white">⌄</span>
        </a>

      </div>
    </section>
  )
}

export default Hero