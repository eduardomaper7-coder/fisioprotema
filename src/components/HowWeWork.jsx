import { FaStethoscope, FaMagic, FaAward, FaUsers } from 'react-icons/fa'

const features = [
  {
    icon: <FaStethoscope />,
    title: 'Valoración y tratamiento personalizado',
    text: 'Sabemos que eres único. Realizamos una valoración previa de tu patología para adaptarnos a tu problema y que tu tratamiento sea personalizado.',
  },
  {
    icon: <FaMagic />,
    title: 'Técnicas avanzadas',
    text: 'Ofrecemos tratamiento de máxima calidad haciendo uso de terapia manual y tecnología de última generación.',
  },
  {
    icon: <FaAward />,
    title: 'Fisioterapia especializada',
    text: 'Trabajamos por tu salud y bienestar. Todos los tratamientos son realizados por especialistas sanitarios con productos de máxima calidad.',
  },
  {
    icon: <FaUsers />,
    title: 'Servicios',
    text: 'Cuidarán de ti fisioterapeutas profesionales, especialistas en tratamiento del dolor, suelo pélvico, fisioterapia respiratoria infantil y más.',
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

          <p className="mt-4 text-neutral-600">
            Nuestro proceso está diseñado para ofrecerte la mejor atención y resultados
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