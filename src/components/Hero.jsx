const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-fisio.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Filtro negro reducido */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/70"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-16 pt-28 text-center">
        <img
          src="/logo-hero.png"
          alt="Fisioprotema"
          className="mb-8 h-14 w-auto md:h-20"
        />

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl md:text-7xl">
          Clínica de fisioterapia en{' '}
          <span className="text-[#E4B525]">Leganés</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-9 text-white/90 sm:text-xl">
          Tratamientos personalizados para aliviar el dolor, recuperar tu movilidad
          y mejorar tu bienestar con un enfoque profesional, cercano y efectivo.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="https://wa.me/34637883587"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-xl bg-[#E4B525] px-8 py-4 text-lg font-bold text-black transition hover:bg-[#d3a61f]"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="h-6 w-6 object-contain"
            />
            Pedir cita
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold !text-white transition hover:bg-white hover:!text-black"
          >
            Nuestros servicios
          </a>
        </div>

        {/* Descubre más en blanco */}
        <a
  href="#servicios"
  style={{ color: '#ffffff' }}
  className="mt-20 inline-flex flex-col items-center text-base font-medium !text-white transition hover:!text-white"
>
  Descubre más
  <span className="mt-2 text-2xl !text-white">⌄</span>
</a>
      </div>
    </section>
  )
}

export default Hero