export default function Services() {
  return (
    <section id="servicios" className="bg-background-light section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-brand mb-12 font-heading">
          Lo que hago
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
              Webs que explican bien lo que haces
            </h3>
            <p className="text-gray-700 font-body">
              Para negocios que ya tienen clientes y una web que no está a la altura.
              Clara, rápida en el móvil, fácil de encontrar en Google y que puedas
              editar tú sin llamar a nadie.
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
              Herramientas que tu gente usa
            </h3>
            <p className="text-gray-700 font-body">
              Calculadoras, simuladores, configuradores, sistemas de reserva. La pieza
              que hace que alguien se quede en tu web, vuelva a ella y se la mande a
              otra persona. Suele vender más que cualquier texto.
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
              De la idea al producto
            </h3>
            <p className="text-gray-700 font-body">
              Cuando lo que hace falta no es una web: entrevistas con quien lo va a
              usar, las pantallas diseñadas una por una y el código que las sostiene.
              Empezando por lo más pequeño que se puede poner a prueba.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center bg-white p-8 rounded-xl shadow-xl border-2 border-secondary-brand">
          <h3 className="text-2xl font-bold text-text-dark mb-4 font-heading">
            ¿No sabes en qué cajón entra lo tuyo?
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-body">
            Normal: casi ningún proyecto entra limpio en uno. Cuéntame qué quieres
            conseguir y te digo qué haría yo — y qué parte no hace falta hacer todavía.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-text-dark bg-secondary-brand hover:bg-orange-400 shadow-lg transition duration-300 transform hover:scale-105 font-heading"
          >
            Hablamos de tu proyecto
          </a>
        </div>
      </div>
    </section>
  );
}
