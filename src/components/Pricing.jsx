const plans = [
  {
    title: 'Sesión individual',
    price: '60€',
    subtitle: 'Una sesión de fisioterapia',
    badge: '',
  },
  {
    title: 'Pack 3 sesiones',
    price: '162€',
    subtitle: '10% de descuento',
    badge: 'Ahorro de 18€',
  },
  {
    title: 'Pack 5 sesiones',
    price: '240€',
    subtitle: '20% de descuento',
    badge: 'Ahorro de 60€',
  },
]

const conditions = [
  'Los packs tienen una caducidad de 6 meses.',
  'Fisioprotema se compromete a avisar con un mes de antelación a la fecha de caducidad.',
  'El pack puede ser compartido por varias personas.',
  'La anulación de una sesión deberá ser notificada con 24 horas de antelación. Si no fuese así, la sesión contará como dada.',
  'No se devolverá el dinero de las sesiones no disfrutadas del pack en ningún caso.',
]

const Pricing = () => {
  return (
    <section id="tarifas" className="scroll-mt-28 bg-[#f5f5f3] py-24 pb-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Nuestras tarifas
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Ofrecemos diferentes opciones adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="rounded-xl bg-[#f8f1d6] px-8 py-10 text-center shadow-[0_6px_18px_rgba(0,0,0,0.06)]"
            >
              <h3 className="text-2xl font-extrabold text-black">
                {plan.title}
              </h3>

              <p className="mt-5 text-6xl font-extrabold tracking-tight text-black">
                {plan.price}
              </p>

              <p className="mt-4 text-xl text-neutral-700">
                {plan.subtitle}
              </p>

              {plan.badge && (
                <div className="mt-5">
                  <span className="inline-flex rounded-full bg-[#E4B525] px-4 py-1.5 text-sm font-bold text-black">
                    {plan.badge}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl rounded-xl bg-[#f8f1d6] px-8 py-10 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
          <h3 className="text-center text-2xl font-extrabold text-black">
            Condiciones Generales
          </h3>

          <div className="mt-8 space-y-5">
            {conditions.map((condition, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="mt-1 text-xl font-bold text-[#E4B525]">✓</span>
                <p className="text-lg leading-8 text-neutral-700">
                  {condition}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing