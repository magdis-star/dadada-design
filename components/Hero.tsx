import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-24 pt-12 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:pt-20">
      <div>
        <h1 className="font-serif text-5xl leading-[1.02] tracking-[-0.01em] sm:text-6xl lg:text-7xl">
          Soy Magdalena y hago webs para gente que vende{" "}
          <em>lo que hace ella misma</em>
        </h1>
        <p className="mt-8 max-w-md text-lg leading-relaxed text-tinta/80">
          Mentoras, escritoras, celebrantes, el obrador de la esquina. Si hoy lo
          llevas todo por WhatsApp e Instagram, una web te ahorra repetir veinte
          veces lo mismo y se parece a ti, no a un perfil igual al de todos.
        </p>
        <p className="etiqueta mt-8">Webs · Herramientas a medida · Design thinking</p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a href="#contacto" className="boton-lima">
            Cuéntame tu proyecto <span aria-hidden="true">→</span>
          </a>
          <a href="#trabajos" className="enlace">Ver trabajos</a>
        </div>
      </div>

      {/* Collage: su foto, una nota a mano y un trabajo de verdad */}
      <div className="relative mx-auto h-[420px] w-full max-w-[460px] sm:h-[480px]">
        <div className="absolute left-0 top-10 w-[58%] rotate-[-4deg] overflow-hidden border-[6px] border-blanco shadow-sm">
          <Image
            src="/images/projects/gonzalo-morales-portatil.jpg"
            alt="La web de Gonzalo Morales"
            width={600}
            height={450}
            className="h-auto w-full"
            unoptimized
          />
        </div>
        <div className="hueco absolute right-0 top-0 h-[78%] w-[56%] rotate-[2deg]">
          [tu foto]
          <br />
          en blanco y negro, relajada
        </div>
        <div className="absolute bottom-6 left-[12%] w-40 rotate-[-6deg] bg-lima px-4 py-5 font-mano text-2xl leading-tight shadow-sm">
          [tu nota a mano]
        </div>
        <svg className="absolute -right-2 bottom-2 h-14 w-14" viewBox="0 0 60 60" aria-hidden="true">
          <g stroke="#1C1B19" strokeWidth="2.5" strokeLinecap="round">
            <path d="M30 6v10M48 14l-7 7M54 32H44M12 14l7 7M6 32h10" />
          </g>
        </svg>
      </div>
    </section>
  );
}
