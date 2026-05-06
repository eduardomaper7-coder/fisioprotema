import { useEffect, useState } from 'react'

const slides = [
  {
    image: '/equipo-1.jpeg',
    alt: 'Pilar Cejudo fisioterapeuta',
    name: 'Pilar Cejudo',
    role: 'Fisioterapeuta',
    stat: '+500 pacientes atendidos',
  },
  {
    image: '/equipo-2.jpeg',
    alt: 'Especialista en fisioterapia',
    name: 'Nombre Apellido',
    role: 'Fisioterapeuta',
    stat: '+10 años de experiencia',
  },
]

const features = [
  {
    title: 'Atención 100% personalizada',
    text: 'Diseñamos cada tratamiento en función de tu problema específico, adaptándonos a tu evolución en cada sesión.',
  },
  {
    title: 'Fisioterapia avanzada y precisa',
    text: 'Trabajamos con técnicas invasivas eco-guiadas, diatermia y ondas de choque para ofrecer tratamientos más eficaces y seguros.',
  },
  {
    title: 'Experiencia y formación continua',
    text: 'Contamos con profesionales cualificados y en constante formación para aplicar las técnicas más actuales.',
  },
  {
    title: 'Resultados desde las primeras sesiones',
    text: 'Aplicamos tratamientos eficaces para que notes mejoría desde el inicio del proceso.',
  },
  {
    title: 'Trato cercano y acompañamiento real',
    text: 'Nos implicamos contigo en todo el proceso de recuperación, acompañándote en cada paso.',
  },
]

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const activeSlide = slides[currentSlide]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="bg-[#eef0f1] py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 lg:grid-cols-2">
        {/* IZQUIERDA */}
        <div className="relative">
          <span className="absolute -left-10 top-0 hidden rotate-180 text-xs font-bold uppercase tracking-[0.4em] text-[#E4B525] lg:block [writing-mode:vertical-rl]">
            Fisioprotema
          </span>

          <div className="max-w-xl">
            <span className="inline-block rounded-full bg-[#E4B525] px-5 py-2 text-sm font-bold text-black">
              Nuestro valor
            </span>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-black sm:text-5xl">
              ¿Por qué elegir Fisioprotema?
            </h2>

            <p className="mt-6 text-lg leading-9 text-neutral-700">
              En FisioProtema no solo tratamos lesiones, nos enfocamos en
              mejorar tu calidad de vida. Cada paciente recibe una atención
              personalizada, adaptada a sus necesidades reales, con un enfoque
              profesional, cercano y basado en la evidencia.
            </p>

            {/* FEATURES */}
            <div className="mt-10 space-y-4">
              {features.map((feature, index) => {
                const isYellow = index % 2 === 0

                return (
                  <div
                    key={index}
                    className={`rounded-2xl p-5 transition ${
                      isYellow ? 'bg-[#E4B525] text-black' : 'bg-transparent'
                    } md:bg-transparent md:p-0`}
                  >
                    <h3
                      className={`text-xl font-extrabold ${
                        isYellow ? 'text-black' : 'text-[#E4B525]'
                      } md:text-[#E4B525]`}
                    >
                      {feature.title}
                    </h3>

                    <p
                      className={`mt-2 text-base leading-7 ${
                        isYellow ? 'text-black/90' : 'text-neutral-600'
                      }`}
                    >
                      {feature.text}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* DERECHA - SLIDER */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="relative h-[680px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ${
                    currentSlide === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 z-10 rounded-2xl bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm">
                <p className="text-lg font-extrabold leading-7 text-black">
                  {activeSlide.name},{' '}
                  <span className="font-semibold">{activeSlide.role}</span>
                </p>

                <p className="mt-2 text-base font-bold text-[#E4B525]">
                  {activeSlide.stat}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[28px] bg-[#E4B525]"></div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full transition ${
                  currentSlide === index ? 'bg-[#E4B525]' : 'bg-black/20'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUs