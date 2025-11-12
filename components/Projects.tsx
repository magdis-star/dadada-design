import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: 'Gonzalo Morales - Galería de Arte',
      description:
        "Objetivo: Crear un museo digital y tienda online para preservar el legado del artista costarricense. Resultado: Galería bilingüe con +90 obras, sistema e-commerce y diseño elegante que honra su arte.",
      image: "/images/projects/gonzalo-morales.jpg",
      alt: "Galería de Arte Gonzalo Morales - Diseño Web",
      link: "https://gonzalomorales.net",
    },
    {
      title: '"Growth Mind" - Servicios B2B',
      description:
        "Objetivo: Generación de leads de alta calidad. Resultado: Nueva estructura UX enfocada en la confianza, subiendo el envío de formularios en un +30%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      alt: "Diseño Web para Consultora de Servicios",
      link: null,
    },
    {
      title: '"El Fogón" - Restaurante',
      description:
        "Objetivo: Mostrar menú y permitir reservas online. Resultado: Web móvil optimizada, reduciendo llamadas y aumentando reservas online en un +60%.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      alt: "Diseño de Página Web para Restaurante",
      link: null,
    },
  ];

  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-brand mb-4 font-heading">
          Casos de Éxito Recientes
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto font-body">
          Cada proyecto es único. Nuestro objetivo es siempre el mismo: diseñar
          una web que entregue resultados.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden card-shadow">
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 bg-background-light">
                <h3 className="text-xl font-semibold text-text-dark mb-2 font-heading">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm font-body mb-4">
                  <strong>{project.description.split("Resultado:")[0]}</strong>
                  Resultado:{project.description.split("Resultado:")[1]}
                </p>
                <div className="flex gap-4 flex-wrap">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-brand font-semibold hover:text-secondary-brand transition text-sm font-body"
                    >
                      Ver sitio web →
                    </a>
                  )}
                  {index === 0 && (
                    <a
                      href="/casos/gonzalo-morales-galeria-arte"
                      className="inline-flex items-center text-secondary-brand font-semibold hover:text-primary-brand transition text-sm font-body"
                    >
                      Ver caso de estudio →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
