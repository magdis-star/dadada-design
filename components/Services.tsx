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
              Tu espacio propio en internet
            </h3>
            <p className="text-gray-700 font-body">
              Un sitio que es de tu negocio: lo ordenas como quieras, invitas a quien
              quieras y nadie te puede echar de ahí, que es lo que pasa en las redes.
              Que se entienda a la primera, que se encuentre en Google y que lo puedas
              cambiar tú sin llamar a nadie.
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
              Calculadoras, simuladores, configuradores, reservas. La pieza que hace
              que alguien se quede, vuelva y se la mande a otra persona — y que a ti te
              ahorra contestar el mismo WhatsApp veinte veces.
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
                  d="M16.023 9.348h4.992V4.356m0 4.992l-3.181-3.183a8.25 8.25 0 00-13.803 3.7M2.985 14.652v4.992m0-4.992h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7"
                ></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Sigo ahí después de publicar
            </h3>
            <p className="text-gray-700 font-body">
              El día del lanzamiento no se acaba nada. Cambios pequeños, textos nuevos,
              las fotos de temporada, copias de seguridad y estar pendiente de que no se
              rompa. Una cuota mensual, y la dejas cuando quieras.
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
