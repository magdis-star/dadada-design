export default function Pricing() {
  const packages = [
    {
      name: "Básico",
      subtitle: "Ideal para empezar",
      description: "Perfecto para negocios que necesitan presencia online profesional",
      features: [
        "Diseño responsive (móvil y escritorio)",
        "Hasta 5 páginas (Inicio, Servicios, Sobre Nosotros, etc.)",
        "Formulario de contacto",
        "Optimización SEO básica",
        "Integración con Google Maps",
        "1 mes de soporte post-lanzamiento",
        "WordPress fácil de actualizar",
      ],
      highlight: false,
      cta: "Solicitar Cotización",
      badge: null,
    },
    {
      name: "Profesional",
      subtitle: "El más popular",
      description: "Para negocios que quieren destacar y captar más clientes",
      features: [
        "Todo lo del paquete Básico",
        "Hasta 10 páginas",
        "Blog integrado",
        "Galería de imágenes/portfolio",
        "Optimización SEO avanzada",
        "Integración con redes sociales",
        "Formularios personalizados",
        "2 meses de soporte",
        "Capacitación de uso",
      ],
      highlight: true,
      cta: "¡Quiero este paquete!",
      badge: "Más Elegido",
    },
    {
      name: "E-commerce",
      subtitle: "Vende online",
      description: "Tienda online completa con WooCommerce para vender sin límites",
      features: [
        "Todo lo del paquete Profesional",
        "Tienda online WooCommerce",
        "Hasta 50 productos incluidos",
        "Pasarela de pagos (Stripe, PayPal)",
        "Gestión de inventario",
        "Cupones y descuentos",
        "Envíos personalizados",
        "3 meses de soporte",
        "Capacitación completa",
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
            Soluciones flexibles y transparentes. <strong>Sin sorpresas, sin letra pequeña.</strong> Cada proyecto incluye tu dominio, hosting de calidad y todo configurado listo para funcionar.
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
                  Precio personalizado según tus necesidades
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
