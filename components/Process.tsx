export default function Process() {
  return (
    <section id="proceso" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-brand mb-4 font-heading">
          Proceso Centrado en el Usuario y Resultados
        </h2>
        <p className="text-center text-lg text-gray-600 mb-10 max-w-4xl mx-auto font-body">
          Adoptamos una metodología de <strong>Design Thinking</strong> (Diseño
          Centrado en el Humano). Esto significa que no solo hacemos una web
          bonita, sino que resolvemos un problema real:{" "}
          <strong>entender a tus clientes</strong> y crear soluciones digitales
          que midan el éxito.
        </p>

        <div className="floating-cta-container text-center">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-full text-white bg-primary-brand hover:bg-opacity-90 shadow-lg transition duration-300"
          >
            Agenda una Sesión Estratégica Gratuita
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl card-shadow text-center border-t-4 border-accent-green">
            <span className="text-5xl step-icon mb-4 block font-heading">1</span>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Escuchamos y Entendemos
            </h3>
            <p className="text-gray-600 text-sm font-body">
              Nos sentamos contigo para conocer a fondo tu negocio, tus sueños y
              a tus clientes. ¿Qué necesitas lograr?
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow text-center border-t-4 border-accent-green">
            <span className="text-5xl step-icon mb-4 block font-heading">2</span>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Diseñamos tu Solución
            </h3>
            <p className="text-gray-600 text-sm font-body">
              Convertimos esas ideas en un plan y maquetas visuales. ¡Verás cómo
              tomará forma tu nueva web antes de empezar a construirla!
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow text-center border-t-4 border-accent-green">
            <span className="text-5xl step-icon mb-4 block font-heading">3</span>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Desarrollo a Medida
            </h3>
            <p className="text-gray-600 text-sm font-body">
              Construimos tu sitio con plataformas como WordPress, fácil de usar y
              optimizado para Google. Tu web, lista para el éxito.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl card-shadow text-center border-t-4 border-accent-green">
            <span className="text-5xl step-icon mb-4 block font-heading">4</span>
            <h3 className="text-xl font-semibold text-primary-brand mb-3 font-heading">
              Lanzamos y te Acompañamos
            </h3>
            <p className="text-gray-600 text-sm font-body">
              Ponemos tu web en marcha y te enseñamos a usarla. Siempre estaremos
              aquí para ayudarte a seguir mejorando y creciendo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
