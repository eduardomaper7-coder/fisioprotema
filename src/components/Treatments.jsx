const services = [
  {
    title: 'Fisioterapia General',
    description:
      'Recuperar todo tipo de patologías del aparato locomotor en la mayor brevedad posible y evitar su recurrencia es nuestro principal propósito.',
    image:
      'https://images.unsplash.com/photo-1519824145371-296894a0daa9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Suelo Pélvico',
    description:
      'Realizamos una valoración fisioterapéutica para tratar o prevenir alteraciones del suelo pélvico en hombres y mujeres.',
    image:
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Fisioterapia Respiratoria Infantil',
    description:
      'Ayudamos a mejorar la respiración de los niños con técnicas para eliminar mucosidad y mejorar la ventilación.',
    image:
      'https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Rehabilitación y descanso',
    description:
      'Tratamientos enfocados a mejorar tu descanso y bienestar general con técnicas manuales especializadas.',
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
  },
]

const Treatments = () => {
  return (
    <section id="servicios" className="scroll-mt-28 bg-[#f5f5f3] py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-[#E4B525] sm:text-4xl">
            Nuestros servicios
          </h2>

          <p className="mt-4 text-lg sm:text-xl text-neutral-600">
            Ofrecemos una amplia gama de tratamientos personalizados para mejorar tu salud y bienestar.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)]"
            >
              {/* Imagen */}
              <div className="w-[40%]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Texto */}
              <div className="flex w-[60%] flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-black">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base sm:text-lg leading-8 text-neutral-600">
                    {service.description}
                  </p>
                </div>

                {/* Botón */}
                <div className="mt-6">
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[#E4B525] transition hover:text-black"
                  >
                    Más información →
                  </a>
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