import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactSection = () => {
  return (
    <section id="contacto" className="scroll-mt-28 bg-[#f5f5f3] py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Contacto
          </h2>

          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Estamos aquí para ayudarte. Contáctanos para reservar una cita o solicitar más información.
          </p>
        </div>

        <div className="space-y-5">
          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
            <div className="pt-1 text-xl text-[#E4B525]">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-black">Dirección</h3>
              <p className="mt-2 text-lg leading-8 text-neutral-600">
                C. de Polvoranca, 21, Local, 28911 Leganés, Madrid
              </p>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
            <div className="pt-1 text-xl text-[#E4B525]">
              <FaPhoneAlt />
            </div>

            <div>
              <h3 className="text-xl font-bold text-black">Teléfono</h3>
              <a
                href="tel:637883587"
                className="mt-2 block text-lg leading-8 text-neutral-600 transition hover:text-black"
              >
                637883587
              </a>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl bg-white px-6 py-6 shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
            <div className="pt-1 text-xl text-[#E4B525]">
              <FaEnvelope />
            </div>

            <div>
              <h3 className="text-xl font-bold text-black">Email</h3>
              <a
                href="mailto:info@fisioprotemaleganes.es"
                className="mt-2 block text-lg leading-8 text-neutral-600 transition hover:text-black"
              >
                info@fisioprotemaleganes.es
              </a>
            </div>
          </div>

          <div className="flex gap-5 rounded-xl bg-[#f8f1d6] px-6 py-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <div className="pt-1 text-xl text-[#E4B525]">
              <FaClock />
            </div>

            <div className="w-full">
              <h3 className="text-xl font-bold text-black">Horario</h3>

              <div className="mt-4 space-y-3 text-lg text-neutral-700">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold">Lunes</span>
                  <span>10:00–13:00 · 16:00–20:30</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold">Martes</span>
                  <span>10:00–13:00 · 16:00–20:30</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold">Miércoles</span>
                  <span>10:00–13:00 · 16:00–20:30</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold">Jueves</span>
                  <span>10:00–13:00 · 16:00–20:30</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold">Viernes</span>
                  <span>10:00–13:00 · 14:30–20:30</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold">Sábado</span>
                  <span>Cerrado</span>
                </div>

                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <span className="font-semibold">Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection