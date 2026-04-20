const reviews = [
  {
    text: 'Excelente atención desde el momento de pedir la cita hasta la consulta de fisioterapia. Diagnóstico y tratamiento de 10, para mí se han convertido en mi centro de fisioterapia de confianza desde que acudí la primera vez hace años. Precios asequibles/ajustados, aún más teniendo en cuenta la calidad del servicio. Más que recomendadas.',
    name: 'Alba',
    time: 'Hace 1 año',
  },
  {
    text: 'Tenía un dolor molesto en la zona de la espalda y me lo han tratado muy bien. Estoy muy contento con la forma de trabajar. Primero me explicaron el problema y luego detectaron dónde estaba el problema. Método científico aplicado al dedillo. Muy profesional, amable y simpática. Me sentí muy seguro en todo el proceso. Volveré.',
    name: 'K. Meneses',
    time: 'Hace 3 meses',
  },
  {
    text: 'Me siento afortunada de haber encontrado un grupo de profesionales que se ocupan en ayudar a las personas a escuchar su cuerpo y dichos profesionales enseñan métodos para que cada uno sea capaz de cuidarse. Los felicito por su buen hacer y les doy las gracias por ayudarme.',
    name: 'P. Fernández',
    time: 'Hace 1 año',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-[#eef0f1] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Lo que dicen nuestros pacientes
          </h2>

          <div className="mt-5 text-2xl tracking-[0.2em] text-yellow-400">
            ★★★★★
          </div>

          <p className="mt-4 text-lg text-neutral-600">
            Valoración 5.0 en Google Reviews
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="flex min-h-[380px] flex-col rounded-xl bg-white p-7 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-6 text-xl tracking-[0.18em] text-yellow-400">
                ★★★★★
              </div>

              <p className="flex-1 text-[15px] leading-8 text-neutral-700">
                {review.text}
              </p>

              <div className="mt-8">
                <p className="text-xl font-bold text-[#005f73]">{review.name}</p>
                <p className="mt-1 text-sm text-neutral-500">{review.time}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials