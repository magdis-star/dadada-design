import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getCaseStudy, getCaseStudies } from "@/lib/data/caseStudies";

export async function generateStaticParams() {
  const caseStudies = getCaseStudies();
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    return {
      title: "Caso de estudio no encontrado",
    };
  }

  return {
    title: `${caseStudy.title} | Casos de Éxito - dadada design`,
    description: caseStudy.excerpt,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudy(params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <header className="bg-primary-brand text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#proyectos"
            className="inline-flex items-center text-gray-100 hover:text-white mb-6 font-body"
          >
            ← Volver a Proyectos
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 text-sm text-gray-200 mb-4 font-body">
                <span className="bg-secondary-brand text-text-dark px-3 py-1 rounded-full font-semibold">
                  {caseStudy.industry}
                </span>
                <span>{caseStudy.year}</span>
              </div>

              <h1 className="text-3xl lg:text-5xl font-bold mb-4 font-heading">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-gray-100 mb-6 font-body">
                {caseStudy.excerpt}
              </p>

              {caseStudy.url && (
                <a
                  href={caseStudy.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-secondary-brand text-text-dark font-bold rounded-full hover:bg-orange-400 transition font-heading"
                >
                  Ver sitio web →
                </a>
              )}
            </div>

            <div className="relative h-96 rounded-xl overflow-hidden bg-primary-brand">
              <Image
                src={caseStudy.thumbnail}
                alt={caseStudy.title}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        </div>
      </header>

      {/* Challenge Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-brand mb-6 font-heading">
            {caseStudy.challenge.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-body">
            {caseStudy.challenge.description}
          </p>

          <div className="bg-background-light p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-text-dark mb-4 font-heading">
              Objetivos del Proyecto:
            </h3>
            <ul className="space-y-3">
              {caseStudy.challenge.goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-primary-brand mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <span className="text-gray-700 font-body">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-brand mb-4 text-center font-heading">
            {caseStudy.process.title}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto font-body">
            Mi enfoque centrado en el usuario para resolver problemas reales
          </p>

          <div className="space-y-8">
            {caseStudy.process.steps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary-brand rounded-full flex items-center justify-center text-2xl font-bold text-text-dark font-heading">
                    {index + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-primary-brand mb-3 font-heading">
                      {step.phase}
                    </h3>
                    <p className="text-gray-700 mb-4 font-body">{step.description}</p>
                    <ul className="space-y-2">
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start text-sm">
                          <span className="text-secondary-brand mr-2">▸</span>
                          <span className="text-gray-600 font-body">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-brand mb-6 font-heading">
            {caseStudy.solution.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-body">
            {caseStudy.solution.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.solution.features.map((feature, index) => (
              <div key={index} className="flex items-start bg-background-light p-4 rounded-lg">
                <svg
                  className="w-5 h-5 text-primary-brand mr-3 flex-shrink-0 mt-0.5"
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
                <span className="text-gray-700 font-body">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding bg-primary-brand text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center font-heading">
            {caseStudy.results.title}
          </h2>
          <p className="text-xl text-gray-100 mb-12 text-center max-w-3xl mx-auto font-body">
            {caseStudy.results.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {caseStudy.results.metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-secondary-brand mb-2 font-heading">
                  {metric.label}
                </div>
                <div className="text-xl font-semibold mb-2 font-heading">{metric.value}</div>
                <div className="text-gray-200 text-sm font-body">{metric.description}</div>
              </div>
            ))}
          </div>

          {caseStudy.results.testimonial && (
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-3xl mx-auto">
              <svg
                className="w-12 h-12 text-secondary-brand mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl italic mb-4 font-body">
                "{caseStudy.results.testimonial.quote}"
              </p>
              <div>
                <p className="font-bold font-heading">{caseStudy.results.testimonial.author}</p>
                <p className="text-gray-200 text-sm font-body">{caseStudy.results.testimonial.role}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-dark mb-4 font-heading">
            ¿Tienes un proyecto similar en mente?
          </h2>
          <p className="text-lg text-gray-700 mb-8 font-body">
            Cada proyecto es único, pero el proceso es el mismo: entender, diseñar y entregar resultados.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-primary-brand hover:bg-opacity-90 shadow-lg transition duration-300 font-heading"
          >
            Hablemos de tu proyecto
          </Link>
        </div>
      </section>
    </>
  );
}
