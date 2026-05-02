const services = [
  {
    title: 'Fisioterapia General y Avanzada',
    description:
      'Fisioterapia personalizada con técnicas invasivas eco-guiadas, diatermia y ondas de choque para aliviar el dolor, mejorar tu movilidad y acelerar tu recuperación.',
    image:
      'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=1200&q=80',
    featured: true,
  },
  {
    title: 'Fisioterapia deportiva',
    description:
      'Recupera tu rendimiento y vuelve al deporte sin dolor con un tratamiento personalizado y una readaptación eficaz.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Dolor Orofacial y ATM',
    description:
      'Alivia el dolor mandibular, bruxismo y cefaleas con un tratamiento especializado de la ATM.',
    image:
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Pilates Funcional',
    description:
  'Mejora tu fuerza, movilidad y control corporal con ejercicio terapéutico adaptado a tus necesidades. Ideal para prevenir lesiones, mejorar la postura y reducir el dolor de espalda.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Psicología',
    collaborator: 'Servicio colaborador',
    name: 'Ana Margüenda Timón',
    description:
      'Acompañamiento psicológico profesional para cuidar también tu bienestar emocional.',
    image:
      'https://images.unsplash.com/photo-1551847677-dc82d764e1eb?auto=format&fit=crop&w=900&q=80',
    doctoralia: 'https://www.doctoralia.es/ana-marguenda-timon/psicologo/leganes',
    whatsapp: 'https://wa.me/34683379771',
    psychology: true,
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-[#f5f5f3] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#E4B525] sm:text-4xl">
            Nuestros servicios
          </h2>

          <p className="mt-4 text-lg text-neutral-600 sm:text-xl">
            En FisioProtema, clínica de fisioterapia en Leganés, ofrecemos
            tratamientos personalizados para aliviar el dolor y mejorar tu movilidad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`flex overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] ${
                service.featured
                  ? 'md:col-span-2 bg-white'
                  : service.psychology
                  ? 'border-2 border-[#E4B525] bg-[#fff8df]'
                  : 'bg-white'
              }`}
            >
              <div className={service.featured ? 'w-[45%]' : 'w-[40%]'}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className={`flex flex-col justify-between ${
                  service.featured ? 'w-[55%] p-8 md:p-10' : 'w-[60%] p-6'
                }`}
              >
                <div>
                  {service.collaborator && (
                    <span className="mb-3 inline-flex rounded-full bg-[#E4B525] px-4 py-1.5 text-sm font-bold text-black">
                      {service.collaborator}
                    </span>
                  )}

                  <h3
                    className={`font-extrabold text-black ${
                      service.featured
                        ? 'text-3xl sm:text-4xl'
                        : 'text-xl sm:text-2xl'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {service.name && (
                    <p className="mt-2 text-lg font-bold text-neutral-800">
                      {service.name}
                    </p>
                  )}

                  <p className="mt-3 text-base leading-8 text-neutral-600 sm:text-lg">
                    {service.description}
                  </p>

                  {service.psychology && (
                    <p className="mt-3 text-sm font-semibold text-neutral-700">
  WhatsApp exclusivo para psicología: 683379771
</p>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  {service.psychology ? (
                    <>
                      <a
                        href={service.doctoralia}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-xl bg-[#E4B525] px-5 py-3 text-base font-bold text-black transition hover:bg-[#C89B00]"
                      >
                        Cita online
                      </a>

                      <a
                        href={service.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-xl bg-white px-5 py-3 text-base font-bold text-black shadow-sm transition hover:bg-neutral-100"
                      >
                        WhatsApp psicología
                      </a>
                    </>
                  ) : (
                    <a
                      href="#contacto"
                      className="inline-flex items-center gap-2 text-base font-semibold text-[#E4B525] transition hover:text-black"
                    >
                      Más información →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Treatments