import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: 'Elemental Kids Club - Libros Educativos Infantiles',
      description:
        "Objetivo: Crear una landing page para vender libros de actividades educativas con sistema de bonus por email. Resultado: Landing page optimizada con integración Wild Mail para lead generation, formulario de bonus y páginas de confirmación GDPR-compliant.",
      image: "/images/projects/elemental-kids-club.jpg",
      alt: "Elemental Kids Club - Landing Page Educativa",
      link: "https://elementalkidsclub.com",
    },
    {
      title: 'Tie the Celtic Knot - WordPress para Celebrante',
      description:
        "Objetivo: Sitio web existente no aparecía en Google ni convertía visitas en clientes. Resultado: Rediseño completo con SEO, WordPress con control de contenido y estrategia de conversión. Ahora aparece en búsquedas locales.",
      image: "/images/projects/celtic-knot-website.jpg",
      alt: "Tie the Celtic Knot - WordPress Theme para Celebrante de Bodas",
      link: "https://tiethecelticknot.ca",
    },
    {
      title: 'Gonzalo Morales - Galería de Arte',
      description:
        "Objetivo: Crear un museo digital y tienda online para preservar el legado del artista costarricense. Resultado: Galería bilingüe con +90 obras, sistema e-commerce y diseño elegante que honra su arte.",
      image: "/images/projects/gonzalo-morales.jpg",
      alt: "Galería de Arte Gonzalo Morales - Diseño Web",
      link: "https://gonzalomorales.net",
    },
  ];

  return (
    <section id="proyectos" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-brand mb-4 font-heading">
          Casos de Éxito Recientes
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto font-body">
          Cada proyecto es único, pero todos comparten algo: <strong>resultados reales</strong>.
          Desde autores que venden más libros hasta celebrantes que aparecen en Google.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-xl overflow-hidden card-shadow flex flex-col h-full">
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 bg-background-light flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-text-dark mb-2 font-heading">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm font-body mb-4 flex-grow">
                  <strong>{project.description.split("Resultado:")[0]}</strong>
                  Resultado:{project.description.split("Resultado:")[1]}
                </p>
                <div className="flex gap-4 flex-wrap mt-auto">
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
                      href="/casos/elemental-kids-club-landing-educativa"
                      className="inline-flex items-center text-secondary-brand font-semibold hover:text-primary-brand transition text-sm font-body"
                    >
                      Ver caso de estudio →
                    </a>
                  )}
                  {index === 1 && (
                    <a
                      href="/casos/tie-celtic-knot-wordpress-celebrant"
                      className="inline-flex items-center text-secondary-brand font-semibold hover:text-primary-brand transition text-sm font-body"
                    >
                      Ver caso de estudio →
                    </a>
                  )}
                  {index === 2 && (
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
