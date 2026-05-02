import {
  FaStethoscope,
  FaNotesMedical,
  FaUserInjured,
  FaRunning,
} from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Valoración y tratamiento personalizado',
    text: 'Cada paciente es único. Realizamos una valoración completa para entender el origen de tu dolor y diseñar un tratamiento totalmente adaptado a ti.',
  },
  {
    icon: <FaNotesMedical />,
    title: 'Fisioterapia avanzada y eco-guiada',
    text: 'Aplicamos técnicas como punción seca, Electrólisis Percutánea (EPTE), Neuromodulación Percutánea, Diatermia y Ondas de choque, apoyándonos en ecografía para mayor precisión y seguridad.',
  },
  {
    icon: <FaUserInjured />,
    title: 'Especialización en dolor y recuperación',
    text: 'Tratamos lesiones musculoesqueléticas, deportivas y dolor orofacial (ATM), con un enfoque centrado en recuperar tu función y prevenir recaídas.',
  },
  {
    icon: <FaRunning />,
    title: 'Enfoque activo y prevención',
    text: 'No solo tratamos el dolor, te ayudamos a mejorar tu movilidad, fuerza y control corporal para evitar que la lesión vuelva a aparecer.',
  },
]

const HowWeWork = () => {
  return (
    <section className="bg-[#f5f5f3] py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Título */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            ¿Cómo trabajamos?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
            Nuestro enfoque combina valoración individual, fisioterapia avanzada
            y tratamientos eco-guiados para ofrecerte resultados eficaces y
            duraderos.
          </p>
        </div>

        {/* Caja principal */}
        <div className="rounded-3xl bg-[#dfe9eb] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2">
            {features.map((item, index) => (
              <div key={index} className="flex gap-5">
                {/* Icono */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-xl text-black">
                  {item.icon}
                </div>

                {/* Texto */}
                <div>
                  <h3 className="text-lg font-extrabold text-black">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-neutral-700">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowWeWork