import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <div className="mb-6">
              <img
                src="/logo.png"
                alt="Logo Fisioprotema"
                className="h-14 w-auto object-contain"
              />
            </div>

            <p className="max-w-2xl text-xl leading-relaxed text-white/90">
              Clínica de fisioterapia avanzada con tratamientos personalizados para mejorar tu calidad de vida.
            </p>

            <div className="mt-8 flex items-center gap-5">
              <a href="#" aria-label="Facebook" className="text-2xl text-[#E4B525] transition hover:text-white">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="text-2xl text-[#E4B525] transition hover:text-white">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-2xl text-[#E4B525] transition hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="text-left md:text-right">
            <h3 className="text-3xl font-bold text-[#E4B525]">Contacto</h3>

            <div className="mt-6 space-y-4 text-xl leading-relaxed">
              <p>C. de Polvoranca, 21, Local, 28911 Leganés, Madrid</p>

              <p>
                <a href="tel:637883587" className="transition hover:text-[#E4B525]">
                  637883587
                </a>
              </p>

              <p>
                <a
                  href="mailto:info@fisioprotemaleganes.es"
                  className="text-[#E4B525] transition hover:text-white"
                >
                  info@fisioprotemaleganes.es
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8 text-center">
          <p className="text-lg text-white/90">
            © 2026 Fisioprotema. Todos los derechos reservados.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-base text-[#E4B525]">
            <a href="#" className="transition hover:text-white">
              Política de cookies
            </a>
            <a href="#" className="transition hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="transition hover:text-white">
              Aviso legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer