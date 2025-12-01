export default function Pricing() {
  const packages = [
    {
      name: "Landing Page",
      subtitle: "desde €400",
      description: "Perfecta para autores de Amazon KDP y emprendedores",
      features: [
        "Diseño profesional desde cero",
        "Secciones: Hero, Sobre el libro, Características, Testimonios, FAQ",
        "Integración con Amazon",
        "Formulario captura de emails + lead magnet",
        "100% responsive (móvil/tablet/desktop)",
        "SEO básico",
        "Hosting 6 meses incluido",
        "1 ronda de revisiones",
      ],
      highlight: false,
      cta: "Solicitar Cotización",
      badge: null,
    },
    {
      name: "Sitio Web Completo",
      subtitle: "desde €650",
      description: "Sitio multipágina con WordPress y control total",
      features: [
        "Diseño profesional personalizado",
        "WordPress para actualizar tu contenido fácilmente",
        "Blog, galería, testimonios",
        "SEO optimizado para aparecer en Google",
        "Múltiples páginas (Inicio, Servicios, Sobre ti, Contacto, etc.)",
        "Formularios de contacto",
        "100% responsive",
        "Hosting 1 año incluido",
        "2 rondas de revisiones",
        "Capacitación de uso",
      ],
      highlight: true,
      cta: "¡Quiero este paquete!",
      badge: "Más Popular",
    },
    {
      name: "Presencia Digital Profesional",
      subtitle: "desde €900",
      description: "Estrategia digital completa para resultados serios",
      features: [
        "Todo lo del Sitio Web Completo",
        "E-commerce / Tienda online (opcional)",
        "Email marketing setup completo",
        "10 gráficos profesionales para redes sociales",
        "Estrategia SEO avanzada",
        "Google Analytics + Search Console",
        "Integración con plataformas de pago",
        "3 meses de soporte",
        "Consultoría de marketing digital",
      ],
      highlight: false,
      cta: "Solicitar Cotización",
      badge: null,
    },
  ];

  return (
    <section id="precios" className="section-padding bg-background-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-brand mb-4 font-heading">
            Paquetes Diseñados para tu Negocio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-body">
            Precios transparentes y claros. <strong>Sin sorpresas, sin letra pequeña.</strong> Todos los paquetes incluyen hosting, diseño responsive y SEO optimizado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 flex flex-col ${
                pkg.highlight
                  ? "ring-4 ring-secondary-brand transform lg:scale-105"
                  : ""
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary-brand text-text-dark px-4 py-1 rounded-full text-sm font-bold font-heading">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-brand mb-2 font-heading">
                  {pkg.name}
                </h3>
                <p className="text-sm text-secondary-brand font-semibold font-body mb-2">
                  {pkg.subtitle}
                </p>
                <p className="text-gray-600 text-sm font-body">{pkg.description}</p>
              </div>

              <div className="flex-grow mb-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm font-body">
                      <svg
                        className="w-5 h-5 text-primary-brand mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <a
                  href="#contacto"
                  className={`block w-full py-3 px-6 rounded-full font-bold transition duration-300 transform hover:scale-105 font-heading ${
                    pkg.highlight
                      ? "bg-secondary-brand text-text-dark hover:bg-orange-400"
                      : "bg-primary-brand text-white hover:bg-opacity-90"
                  }`}
                >
                  {pkg.cta}
                </a>
                <p className="text-xs text-gray-500 mt-3 font-body">
                  Precio final según alcance específico del proyecto
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-text-dark mb-3 font-heading">
            ¿Necesitas algo diferente?
          </h3>
          <p className="text-gray-700 mb-4 font-body">
            Cada negocio es único. Si necesitas funcionalidades específicas, integración con sistemas existentes, o un proyecto totalmente personalizado,{" "}
            <strong>podemos crearlo juntos</strong>.
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center text-primary-brand font-semibold hover:text-secondary-brand transition font-body"
          >
            Cuéntanos tu proyecto →
          </a>
        </div>
      </div>
    </section>
  );
}
