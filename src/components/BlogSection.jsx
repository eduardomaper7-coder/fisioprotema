const posts = [
  {
    date: '1 abril, 2026',
    title: 'Dolor de espalda en Leganés: tratamiento, causas y cuándo acudir a un especialista',
    excerpt:
      'El dolor de espalda es una de las molestias más habituales. En este artículo te explicamos sus causas más frecuentes, cuándo debes acudir a un fisioterapeuta y qué tratamientos pueden ayudarte a recuperarte.',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '1 abril, 2026',
    title: 'Fisioterapia en Leganés: cómo elegir fisioterapeuta y qué tratamientos funcionan',
    excerpt:
      'Elegir un buen profesional marca la diferencia. Te contamos qué debes tener en cuenta a la hora de buscar fisioterapeuta, qué señales indican un tratamiento de calidad y cómo encontrar la mejor opción para ti.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
  {
    date: '25 marzo, 2026',
    title: 'Sesiones de fisioterapia: ¿cuántas sesiones son necesarias?',
    excerpt:
      'Cada caso es diferente. Descubre qué factores influyen en el número de sesiones recomendadas, cómo se adapta el tratamiento a cada paciente y qué puedes esperar durante el proceso de recuperación.',
    image:
      'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1200&q=80',
    href: '#',
  },
]

const BlogSection = () => {
  return (
    <section className="bg-[#f5f5f3] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            Blog
          </h2>

          <p className="mt-4 text-lg text-neutral-600">
            Artículos y consejos para cuidar tu salud física y bienestar
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="text-sm text-neutral-500">📅 {post.date}</p>

                <h3 className="mt-4 text-2xl font-extrabold leading-tight text-black">
                  {post.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-neutral-700">
                  {post.excerpt}
                </p>

                <div className="mt-6 flex justify-end">
                  <a
                    href={post.href}
                    className="inline-flex items-center gap-2 text-lg font-medium text-[#E4B525] transition hover:text-black"
                  >
                    Leer más <span className="text-2xl">›</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection