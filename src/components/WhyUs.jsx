import { useEffect, useState } from 'react'

const slides = [
  {
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80',
    alt: 'Doctora sonriendo en clínica',
    badge: 'Profesionalidad y atención personalizada',
  },
  {
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Doctor profesional en consulta',
    badge: 'Calidad asistencial y experiencia clínica',
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

            <div className="mt-10 space-y-8">
              {features.map((feature, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-extrabold text-[#E4B525]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-lg text-neutral-600">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DERECHA - SLIDER */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
            <div className="relative h-[540px] w-full">
              {slides.map((slide, index) => (
                <img
                  key={index}
                  src={slide.image}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-1000 ${
                    currentSlide === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-105'
                  }`}
                />
              ))}

              <div className="absolute inset-0 bg-black/20"></div>

              <div className="absolute left-6 top-6 z-10 max-w-sm rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
                <p className="text-base font-bold leading-7 text-black">
                  {slides[currentSlide].badge}
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