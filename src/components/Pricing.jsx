const plans = [
  {
    title: 'Sesión de fisioterapia',
    price: '45€',
    subtitle: 'Sesión individual',
    badge: '',
    featured: false,
  },
  {
    title: 'Fisioterapia mayores de 65 años',
    price: '40€',
    subtitle: 'Sesión individual',
    badge: 'Tarifa especial',
    featured: false,
  },
  {
    title: 'Bono 3 sesiones de fisioterapia',
    price: '126€',
    subtitle: '3 sesiones',
    badge: 'Ahorro de 9€',
    featured: true,
  },
  {
    title: 'Bono 10 sesiones de fisioterapia',
    price: '400€',
    subtitle: '10 sesiones',
    badge: 'Ahorro de 50€',
    featured: true,
  },
  {
    title: 'Pilates funcional',
    price: '55€/mes',
    subtitle: '1 día a la semana',
    badge: 'Trimestre: 150€',
    featured: false,
  },
  {
    title: 'Pilates funcional',
    price: '90€/mes',
    subtitle: '2 días a la semana',
    badge: 'Trimestre: 245€',
    featured: false,
  },
]

const Pricing = () => {
  return (
    <section
      id="tarifas"
      className="scroll-mt-28 bg-[#f5f5f3] pt-24 pb-10"
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-block rounded-full bg-[#E4B525] px-5 py-2 text-sm font-bold text-black">
            Tarifas
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-black sm:text-4xl">
            Nuestras tarifas
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Ofrecemos diferentes opciones adaptadas a tus necesidades
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`relative overflow-hidden rounded-3xl px-7 pb-9 pt-10 text-center shadow-[0_12px_35px_rgba(0,0,0,0.08)] transition duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? 'bg-[#dfe9eb] ring-2 ring-[#E4B525]'
                  : 'bg-[#f8f1d6]'
              }`}
            >
              {/* Badge BONO */}
              {plan.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-[#E4B525] px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-black shadow-sm">
                  Bono
                </span>
              )}

              <h3 className="mx-auto max-w-xs text-xl font-extrabold leading-7 text-black">
                {plan.title}
              </h3>

              <p className="mt-6 text-5xl font-extrabold tracking-tight text-black">
                {plan.price}
              </p>

              <p className="mt-4 text-lg font-semibold text-neutral-700">
                {plan.subtitle}
              </p>

              {plan.badge && (
                <div className="mt-6">
                  <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-bold text-black shadow-sm">
                    {plan.badge}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing