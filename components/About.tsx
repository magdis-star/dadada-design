import Image from "next/image";

export default function About() {
  return (
    <section id="sobre-mi" className="border-t border-linea bg-blanco">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:items-start lg:px-8">
        <div className="relative mx-auto w-full max-w-md">
          <p className="absolute -left-2 -top-10 z-10 rotate-[-8deg] font-mano text-3xl sm:-left-10">
            Hola, soy Magda
            <svg className="ml-8 mt-1 h-8 w-10" viewBox="0 0 40 32" aria-hidden="true">
              <path d="M4 4 C 8 16, 18 24, 34 26 M26 20 L34 26 L27 31" fill="none" stroke="#1C1B19" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </p>
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/magda/magda-sonrisa.jpg"
              alt="Magdalena sonriendo con una taza de café"
              fill
              className="object-cover object-top"
              unoptimized
            />
          </div>
          <svg className="absolute -left-4 bottom-10 h-7 w-7 sm:-left-12" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M16 27 C 6 20, 3 14, 5 9 C 7 4, 13 4, 16 10 C 19 4, 25 4, 27 9 C 29 14, 26 20, 16 27 Z" fill="none" stroke="#1C1B19" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        </div>

        <div>
          <p className="etiqueta">da / 04</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Hola, soy Magda.</h2>
          {/* Traducción de su texto en inglés del 29 sep 2026 («Hi, I'm Magda…») */}
          <div className="mt-6 max-w-md space-y-4 leading-relaxed text-tinta/80">
            <p>Soy diseñadora y vivo en Madrid.</p>
            <p>
              Me gustan más las preguntas que las suposiciones, y más las ideas que las
              plantillas.
            </p>
            <p>
              Mi trabajo está en algún punto entre el design thinking, la UX y el diseño
              digital. Me gusta entrar pronto, cuando una idea todavía está lo bastante
              desordenada como para ser interesante.
            </p>
            <p>
              Antes de abrir dadada, mi camino no fue precisamente en línea recta.
              Creatividad, operaciones, proyectos digitales, un blog de cocina, la
              maternidad… De cada cosa aprendí algo sobre las personas, los problemas y
              cómo hacer que las cosas pasen.
            </p>
            <p>
              Luego descubrí el design thinking, y cambió mi forma de entender el diseño.
            </p>
            <p>
              Ahora no quiero correr hacia los píxeles. Quiero entender primero a las
              personas, el problema y la oportunidad. Después, hacemos.
            </p>
            <p className="font-serif text-2xl text-tinta">
              <em>Eso es dadada.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
