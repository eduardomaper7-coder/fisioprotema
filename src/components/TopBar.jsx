const Navbar = () => {
  return (
    <header className="fixed left-0 top-[36px] z-50 w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-3 md:h-20 md:px-4">
        {/* Logo */}
        <a href="#inicio" className="flex min-w-0 items-center gap-2 md:gap-3">
          <img
            src="/logo-circular.png"
            alt="Logo circular Fisioprotema"
            className="h-9 w-9 shrink-0 object-contain md:h-10 md:w-10"
          />

          <img
            src="/logo.png"
            alt="Logo Fisioprotema"
            className="h-5 w-auto max-w-[130px] object-contain md:h-7 md:max-w-none"
          />
        </a>

        {/* Menú */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#inicio"
            className="text-base font-semibold text-black transition hover:text-[#E4B525]"
          >
            Inicio
          </a>

          <a
            href="#servicios"
            className="text-base font-semibold text-black transition hover:text-[#E4B525]"
          >
            Servicios
          </a>

          <a
            href="#tarifas"
            className="text-base font-semibold text-black transition hover:text-[#E4B525]"
          >
            Tarifas
          </a>

          <a
            href="#contacto"
            className="text-base font-semibold text-black transition hover:text-[#E4B525]"
          >
            Contacto
          </a>
        </nav>

        {/* Botón pedir cita */}
        <a
          href="https://wa.me/34637883587"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-lg bg-[#E4B525] px-3 py-2 text-xs font-bold text-black transition hover:bg-[#C89B00] md:gap-2 md:px-4 md:text-sm"
        >
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="h-4 w-4 object-contain md:h-5 md:w-5"
          />
          Pedir cita
        </a>
      </div>
    </header>
  )
}

export default Navbar