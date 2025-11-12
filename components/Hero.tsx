export default function Hero() {
  return (
    <section className="relative bg-primary-brand section-padding text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-abril">
          Webs Profesionales y Efectivas. Resultados Reales,{" "}
          <span className="bg-secondary-brand text-text-dark px-3 py-1 rounded-lg inline-block transform rotate-[-2deg]">
            Sin Complicaciones
          </span>
          .
        </h1>
        <p className="mt-4 text-xl text-gray-100 max-w-3xl mx-auto font-body">
          Dejamos a un lado el jargon técnico. Creamos sitios web{" "}
          <strong>optimizados</strong>, fáciles de gestionar y diseñados para
          atraer y convertir a tus clientes ideales. Tu crecimiento es nuestra
          misión.
        </p>
        <a
          href="#contacto"
          className="mt-10 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-text-dark bg-secondary-brand hover:bg-orange-400 shadow-lg transition duration-300 transform hover:scale-105 font-heading"
        >
          Empieza a Crecer Hoy: Pide tu Cotización
        </a>
      </div>
    </section>
  );
}
