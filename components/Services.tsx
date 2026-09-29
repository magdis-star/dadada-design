// Tres puertas según la situación de quien llega, no según el servicio
// (idea de la maqueta de ChatGPT del 29 sep 2026). Los textos son un borrador:
// no son palabras de Magdalena todavía.
const puertas = [
  {
    titulo: "Tengo una idea",
    subtitulo: "Descubrimiento y estrategia",
    texto:
      "Tienes un negocio, un producto o un servicio en mente, pero no sabes qué forma debería tener. Antes de diseñar nada, miramos el problema, para quién es y qué estamos dando por hecho.",
    temas: "Descubrimiento · Estrategia · Prototipo",
  },
  {
    titulo: "Sé lo que necesito",
    subtitulo: "Web y herramientas",
    texto:
      "Ya sabes lo que quieres: una web, una tienda, reservas, un configurador. Lo convierto en algo que funciona y que se parece a ti.",
    temas: "Diseño web · Tienda · Reservas · Herramientas",
    ejemplo: { nombre: "Elemental Kids Club", href: "/casos/elemental-kids-club-landing-educativa" },
  },
  {
    titulo: "Ya tengo algo",
    subtitulo: "Mejorar lo que hay",
    texto:
      "Tu web ya existe, pero no funciona como debería: no aparece en Google, no se entiende o no trae pedidos. Miramos qué pasa y lo arreglamos.",
    temas: "Revisión UX · Estructura · Posicionamiento",
    ejemplo: { nombre: "Tie the Celtic Knot", href: "/casos/tie-celtic-knot-wordpress-celebrant" },
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <p className="etiqueta">da / 02</p>
      <h2 className="mt-4 font-serif text-4xl sm:text-5xl">¿En qué podemos trabajar?</h2>

      <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
        {puertas.map((p, i) => (
          <div key={p.titulo} className="flex flex-col">
            <p className="etiqueta">0{i + 1}</p>
            <h3 className="mt-3 font-serif text-3xl">{p.titulo}</h3>
            <p className="mt-1 text-sm text-gris">{p.subtitulo}</p>
            <p className="mt-5 flex-grow text-[15px] leading-relaxed text-tinta/80">{p.texto}</p>
            <p className="mt-5 text-xs text-gris">{p.temas}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href="#contacto" className="enlace">
                Cuéntamelo <span aria-hidden="true">→</span>
              </a>
              {p.ejemplo && (
                <a href={p.ejemplo.href} className="text-sm text-gris hover:text-tinta">
                  Ejemplo: {p.ejemplo.nombre}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
