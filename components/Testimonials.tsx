import { caseStudies } from "@/lib/data/caseStudies";

export default function Testimonials() {
  // Pull testimonials from actual case studies
  const testimonials = caseStudies
    .filter((caseStudy) => caseStudy.results.testimonial)
    .map((caseStudy) => caseStudy.results.testimonial!);

  return (
    <section id="testimonios" className="bg-background-light section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-brand mb-4 font-heading">
          Lo que Dicen Nuestros Clientes
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12 max-w-3xl mx-auto font-body">
          Testimonios reales de clientes que confiaron en dadada design para transformar su presencia digital.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl card-shadow flex flex-col justify-between"
            >
              <p className="text-lg italic text-gray-700 mb-6 font-body">
                &quot;{testimonial.quote}&quot;
              </p>
              <div>
                <p className="font-bold text-primary-brand font-heading">
                  — {testimonial.author}
                </p>
                <p className="text-sm text-secondary-brand font-body">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
