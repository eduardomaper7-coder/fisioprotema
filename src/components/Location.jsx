const Location = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 text-center">
        
        {/* Título */}
        <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
          Ven a visitarnos
        </h2>

        {/* Dirección */}
        <p className="mt-6 text-lg font-medium text-neutral-700">
          C. de Polvoranca, 21, Local, 28911 Leganés, Madrid
        </p>

        {/* Mapa */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          <iframe
            src="https://www.google.com/maps?q=C.%20de%20Polvoranca%2021%2C%2028911%20Legan%C3%A9s%2C%20Madrid&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación clínica fisioprotema"
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default Location