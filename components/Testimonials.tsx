export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Necesitábamos una tienda online y nos guiaron paso a paso. Es fácil de usar y las ventas han subido. ¡Recomendados 100%!",
      author: "Laura V.",
      role: "Dueña de Artesanías",
    },
    {
      quote:
        "Antes, mi web no generaba llamadas. Con el nuevo diseño, la calidad de los leads es increíble. ¡Por fin me encuentran en Google!",
      author: "Javier R.",
      role: "Consultor Financiero",
    },
    {
      quote:
        "Trabajar con Magdalena fue muy sencillo. Entendió mi visión y me dio exactamente lo que mi negocio necesitaba para crecer.",
      author: "Sofía M.",
      role: "Diseñadora Gráfica Freelance",
    },
  ];

  return (
    <section id="testimonios" className="bg-background-light section-padding">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-primary-brand mb-12 font-heading">
          Lo que Dicen Nuestros Clientes
        </h2>

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
