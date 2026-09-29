// La franja lima de la maqueta. Donde ChatGPT ponía «The Idea Sprint» va la
// primera charla, que es lo que ya ofrece hoy. Si la sesión de arranque de pago
// llega a existir, se cambia aquí.
export default function PrimeraCharla() {
  return (
    <section className="bg-lima">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.3fr_1fr] lg:px-8">
        <div>
          <p className="etiqueta !text-tinta/60">da / 05</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Media hora para ver si encajamos</h2>
          <p className="mt-4 max-w-md leading-relaxed">
            Me cuentas qué haces y cómo lo llevas hoy. Sin compromiso.
          </p>
          <a href="#contacto" className="enlace mt-8">
            Pedir la charla <span aria-hidden="true">→</span>
          </a>
        </div>
        {/* Aquí iba «¿Qué tiene que pasar…?», que ahora está en la portada.
            Hueco para una nota suya escrita a mano. */}
        <p className="hueco rotate-[-3deg] !border-tinta/30 !bg-transparent py-10 !text-tinta/60">
          [tu nota a mano]
        </p>
      </div>
    </section>
  );
}
