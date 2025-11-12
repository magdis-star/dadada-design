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
                  d="M9.75 17L9 20l-4 1m6-11V3m0 8h.01M19 10H5a2 2 0 00-2 2v6a2 2 0 002 2h14a2 2 0 002-2v-6a2 2 0 00-2-2z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Diseño Web Optimizado para PYMES
            </h3>
            <p className="text-gray-700 font-body">
              Páginas corporativas, portfolios, blogs y landing pages de conversión.
              Garantizamos velocidad de carga, adaptabilidad móvil (responsive) y
              optimización SEO básica para que Google te encuentre.
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
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Tiendas Online (E-commerce) con Éxito
            </h3>
            <p className="text-gray-700 font-body">
              Implementamos soluciones robustas como WooCommerce para que vendas
              sin límites. Fácil de manejar, seguro y enfocado en maximizar tu
              tasa de conversión.
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
              Renovación de Marca y Asesoría UX
            </h3>
            <p className="text-gray-700 font-body">
              Si tu web actual no funciona, la revisamos. Mejoramos la experiencia
              de usuario (UX), renovamos tu imagen de marca y te damos una
              estrategia digital clara.
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
