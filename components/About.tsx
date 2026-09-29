export default function About() {
  return (
    <section id="sobre-mi" className="border-t border-linea bg-blanco">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div className="relative mx-auto w-full max-w-md">
          <p className="absolute -left-2 -top-10 rotate-[-8deg] font-mano text-3xl sm:-left-10">
            Hola, soy Magda
            <svg className="ml-8 mt-1 h-8 w-10" viewBox="0 0 40 32" aria-hidden="true">
              <path d="M4 4 C 8 16, 18 24, 34 26 M26 20 L34 26 L27 31" fill="none" stroke="#1C1B19" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </p>
          <div className="hueco aspect-[4/3] w-full">
            [tu foto]
            <br />
            sentada, de cuerpo entero, fondo liso
          </div>
        </div>

        <div>
          <p className="etiqueta">da / 04</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Hola, soy Magda.</h2>
          <div className="mt-6 max-w-md space-y-4 leading-relaxed text-tinta/80">
            <p>
              Soy diseñadora en Madrid. Antes tuve un blog de cocina y trabajé como
              coordinadora de operaciones, y de ahí me viene lo de los procesos claros.
            </p>
            <p>
              Con el tiempo descubrí el design thinking y me quedé con su idea:{" "}
              <em>entender primero, diseñar después</em>.
            </p>
            <p>
              El nombre, dadada, es una de las primeras palabras de mi hija.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
