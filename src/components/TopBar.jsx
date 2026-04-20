const Navbar = () => {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#inicio" className="flex items-center shrink-0">
          <img
            src="/logo.png"
            alt="Logo Fisioprotema"
            className="h-12 w-auto object-contain md:h-14"
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
  style={{ backgroundColor: '#E4B525', color: 'black' }}
  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold"
>
  <img
    src="/whatsapp.png"
    alt="WhatsApp"
    className="h-5 w-5 object-contain"
  />
  Pedir cita
</a>
      </div>
    </header>
  )
}

export default Navbar