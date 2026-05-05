const CertificacionSection = () => {
  return (
    <section className="bg-[#f5f5f3] pb-20 pt-6">
      <div className="mx-auto max-w-6xl px-4">
        
        {/* TÍTULO */}
        <h2 className="text-center text-3xl font-extrabold text-black sm:text-4xl">
          Tu clínica de fisioterapia con respaldo oficial
        </h2>

        {/* SUBTÍTULO */}
        <p className="mx-auto mt-4 mb-10 max-w-3xl text-center text-lg leading-8 text-neutral-600">
          Formamos parte de la guía oficial del Colegio Profesional de Fisioterapeutas de Madrid
        </p>

        <div className="grid gap-6 md:grid-cols-2">

          {/* IZQUIERDA → CON MARCO BLANCO */}
          <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <img
              src="/colegio-banner.jpeg"
              alt="Centro inscrito en la guía de centros de fisioterapia"
              className="block w-full object-contain"
            />
          </div>

          {/* DERECHA → SIN MARCO BLANCO */}
          <div className="flex items-center justify-center overflow-hidden rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <img
              src="/colegio-logo.png"
              alt="Colegio Profesional de Fisioterapeutas de la Comunidad de Madrid"
              className="block w-full max-w-[500px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default CertificacionSection