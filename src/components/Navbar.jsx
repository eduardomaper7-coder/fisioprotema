const Navbar = () => {
  return (
    <>
      {/* TOP BAR */}
      <div className="fixed top-0 z-50 w-full bg-[#E4B525] text-black text-sm">
  <div className="mx-auto max-w-7xl px-4 py-2 text-center md:text-left font-medium">
    📍 C. de Polvoranca, 21, Local, 28911 Leganés, Madrid
  </div>
</div>

      {/* NAVBAR */}
      <header className="fixed top-[36px] z-50 w-full border-b border-black/10 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
          
          {/* LOGO */}
          <a href="#inicio" className="flex items-center gap-3">
            <img
              src="/logo-circular.png"
              alt="Logo Fisioprotema"
              className="h-10 w-10 object-contain"
            />

            <img
              src="/logo.png"
              alt="Fisioprotema"
              className="h-7 w-auto object-contain"
            />
          </a>

          {/* MENÚ */}
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#inicio" className="font-semibold text-black hover:text-[#E4B525]">Inicio</a>
            <a href="#servicios" className="font-semibold text-black hover:text-[#E4B525]">Servicios</a>
            <a href="#tarifas" className="font-semibold text-black hover:text-[#E4B525]">Tarifas</a>
            <a href="#contacto" className="font-semibold text-black hover:text-[#E4B525]">Contacto</a>
          </nav>

          {/* CTA */}
          <a
            href="https://wa.me/34637883587"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#E4B525] px-4 py-2 text-sm font-bold text-black hover:bg-[#C89B00]"
          >
            <img src="/whatsapp.png" className="h-5 w-5" />
            Pedir cita
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar