export default function Process() {
  return (
    <section id="proceso" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-brand mb-4 font-heading">
          Así trabajo
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-4xl mx-auto font-body">
          Trabajo con <strong>Design Thinking</strong>: antes de diseñar nada,
          entiendo a quién lo va a usar. Por eso lo que sale no es sólo una web
          bonita, sino algo que resuelve un problema real y se puede medir.
        </p>

        <div className="floating-cta-container text-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-white bg-primary-brand hover:bg-opacity-90 shadow-lg transition duration-300"
          >
            Media hora para ver si encajamos
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl card-shadow text-center border-t-4 border-accent-green">
            <span className="text-5xl step-icon mb-4 block font-heading">1</span>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Escucho y entiendo
            </h3>
            <p className="text-gray-600 text-sm font-body">
              Nos sentamos a fondo con tu negocio y con tus clientes. ¿Qué tiene
              que pasar para que esto haya valido la pena?
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow text-center border-t-4 border-accent-green">
            <span className="text-5xl step-icon mb-4 block font-heading">2</span>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Diseño la solución
            </h3>
            <p className="text-gray-600 text-sm font-body">
              Convierto esas ideas en un plan y en pantallas que puedes ver y
              tocar, antes de que se escriba una línea de código.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow text-center border-t-4 border-accent-green">
            <span className="text-5xl step-icon mb-4 block font-heading">3</span>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Lo construyo
            </h3>
            <p className="text-gray-600 text-sm font-body">
              Con la tecnología que le convenga a tu proyecto, no la que me
              convenga a mí. Rápido en el móvil, encontrable en Google y editable
              por ti.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow text-center border-t-4 border-accent-green">
            <span className="text-5xl step-icon mb-4 block font-heading">4</span>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Lo lanzo y te acompaño
            </h3>
            <p className="text-gray-600 text-sm font-body">
              Lo pongo en marcha y te enseño a manejarlo. Después sigo ahí para
              lo que vaya surgiendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
