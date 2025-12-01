export default function Services() {
  return (
    <section id="servicios" className="bg-background-light section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-brand mb-12 font-heading">
          Lo que Podemos Crear Juntos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl card-shadow">
            <div className="service-icon-box">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Landing Pages que Convierten
            </h3>
            <p className="text-gray-700 font-body">
              Páginas únicas optimizadas para vender tu libro, producto o servicio.
              Perfectas para autores de Amazon KDP, emprendedores y negocios que
              necesitan capturar leads y generar ventas rápidamente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl card-shadow">
            <div className="service-icon-box">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Sitios Web Profesionales con WordPress
            </h3>
            <p className="text-gray-700 font-body">
              Sitios multipágina completos con WordPress. Perfectos para celebrantes,
              coaches, consultores y autores que necesitan blog, galería, testimonios
              y control total sobre su contenido. Diseñados para aparecer en Google.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl card-shadow">
            <div className="service-icon-box">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Estrategia Digital Completa
            </h3>
            <p className="text-gray-700 font-body">
              Presencia digital profesional de principio a fin: sitio web, e-commerce,
              email marketing, gráficos para redes sociales y SEO avanzado. Para
              emprendedores que buscan resultados serios y crecimiento sostenible.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-xl border-2 border-secondary-brand">
          <h3 className="text-2xl font-bold text-text-dark mb-4 font-heading">
            ¡Es momento de convertir tus ideas en ingresos!
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-body">
            No pospongas tu crecimiento. Trabajemos juntos en una solución digital
            a tu medida.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-text-dark bg-secondary-brand hover:bg-orange-400 shadow-lg transition duration-300 transform hover:scale-105 font-heading"
          >
            Despega tu Proyecto: Hablemos de Soluciones
          </a>
        </div>
      </div>
    </section>
  );
}
