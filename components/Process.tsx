const pasos = [
  { nombre: "Escucho", texto: "¿Qué tiene que pasar para que esto haya valido la pena?" },
  { nombre: "Diseño", texto: "Pantallas que puedes ver y tocar antes de escribir código." },
  { nombre: "Construyo", texto: "Rápido en el móvil y editable por ti." },
  { nombre: "Lanzo", texto: "Te enseño a manejarlo y sigo ahí." },
];

// Círculo algo torcido, como hecho a mano: cada paso lo gira un poco distinto
function Circulo({ giro }: { giro: number }) {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 120 120"
      style={{ transform: `rotate(${giro}deg)` }}
      aria-hidden="true"
    >
      <path
        d="M62 6 C 92 7, 115 30, 113 60 C 112 92, 88 114, 58 113 C 27 112, 6 88, 7 58 C 8 30, 30 8, 66 9"
        fill="none"
        stroke="#1C1B19"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Process() {
  return (
    <section id="como-trabajo" className="border-y border-linea bg-blanco">
      <div className="mx-auto grid max-w-6xl gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
        <div>
          <p className="etiqueta">da / 01</p>
          <h2 className="mt-4 font-serif text-4xl leading-[1.08] sm:text-5xl">
            Antes de diseñar nada, entiendo a quién lo va a usar.
          </h2>
          <p className="mt-6 max-w-sm leading-relaxed text-tinta/80">
            Por eso lo que sale no es sólo una web bonita, sino algo que resuelve
            un problema real.
          </p>
        </div>

        <ol className="grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {pasos.map((paso, i) => (
            <li key={paso.nombre} className="flex flex-col items-center text-center">
              <div className="relative grid h-28 w-28 place-items-center">
                <Circulo giro={i * 37} />
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">{paso.nombre}</span>
              </div>
              <p className="mt-4 max-w-[11rem] text-sm leading-snug text-gris">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
