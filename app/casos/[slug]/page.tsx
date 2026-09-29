import { notFound } from "next/navigation";
import Link from "next/link";
import Portatil from "@/components/Portatil";
import { getCaseStudy, getCaseStudies, type CaseStudy, type Historia } from "@/lib/data/caseStudies";

export async function generateStaticParams() {
  return getCaseStudies().map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = getCaseStudy(slug);
  if (!caso) return { title: "Caso no encontrado" };
  return {
    title: `${resumen(caso).nombre} · Trabajos · dadada design`,
    description: caso.historia?.problema ?? caso.excerpt,
  };
}

// Los casos sin versión corta (Bernardo) se resumen a partir del texto largo
function resumen(caso: CaseStudy): Historia {
  return (
    caso.historia ?? {
      nombre: caso.client,
      pregunta: caso.title,
      problema: caso.challenge.description,
      hice: caso.solution.features.slice(0, 4),
      cambio: caso.results.description,
    }
  );
}

// «1. Empatizar - Entender al usuario» → «Empatizar»
function nombreFase(fase: string) {
  return fase.replace(/^\d+\.\s*/, "").split(" - ")[0];
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caso = getCaseStudy(slug);
  if (!caso) notFound();

  const h = resumen(caso);
  const todos = getCaseStudies();
  const siguiente = todos[(todos.findIndex((c) => c.slug === caso.slug) + 1) % todos.length];

  return (
    <main>
      {/* Cabecera: la pregunta y la web */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <Link href="/#trabajos" className="text-sm text-gris hover:text-tinta">
          ← Trabajos
        </Link>
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="etiqueta">
              {h.nombre} · {caso.industry}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.05] sm:text-5xl">{h.pregunta}</h1>
            {caso.url && (
              <a href={caso.url} target="_blank" rel="noopener noreferrer" className="boton-lima mt-8">
                Ver la web <span aria-hidden="true">→</span>
              </a>
            )}
          </div>
          <Portatil src={caso.captura ?? caso.thumbnail} alt={`La web de ${h.nombre}`} prioridad />
        </div>
      </section>

      {/* Problema · lo que hice · lo que cambió */}
      <section className="border-y border-linea bg-blanco">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <p className="etiqueta">El problema</p>
            <p className="mt-4 leading-relaxed text-tinta/80">{h.problema}</p>
          </div>
          <div>
            <p className="etiqueta">Lo que hice</p>
            <ul className="mt-4 space-y-3 leading-snug text-tinta/80">
              {h.hice.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-tinta" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="etiqueta">Lo que cambió</p>
            <p className="mt-4 font-serif text-2xl leading-snug">{h.cambio}</p>
          </div>
        </div>
      </section>

      {/* Un proyecto que ha crecido: antes y ahora */}
      {h.etapas && (
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl">Cómo ha crecido</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-6">
            {h.etapas.map((e) => (
              <figure key={e.cuando}>
                <Portatil src={e.imagen} alt={e.titulo} entera={e.entera} />
                <figcaption className="mt-4">
                  <span className="etiqueta">{e.cuando}</span>
                  <span className="mt-1 block text-lg">{e.titulo}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* El proceso, una línea por paso */}
      <section className={h.etapas ? "border-t border-linea bg-blanco" : ""}>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl">Cómo lo hice</h2>
          <ol className="mt-10 divide-y divide-linea border-y border-linea">
            {(h.pasos ?? caso.process.steps.map((p) => ({ fase: nombreFase(p.phase), texto: p.description }))).map(
              (paso, i) => (
                <li key={paso.fase} className="grid gap-2 py-5 sm:grid-cols-[3rem_12rem_1fr] sm:gap-6">
                  <span className="etiqueta pt-1">0{i + 1}</span>
                  <span className="font-medium">{paso.fase}</span>
                  <span className="leading-relaxed text-tinta/75">{paso.texto}</span>
                </li>
              )
            )}
          </ol>
        </div>
      </section>

      {/* Siguiente y contacto */}
      <section className="bg-lima">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-4xl sm:text-5xl">¿Tienes algo parecido entre manos?</h2>
            <Link href="/#contacto" className="enlace mt-6">
              Hablemos <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Link href={`/casos/${siguiente.slug}`} className="text-sm">
            <span className="etiqueta !text-tinta/60">Siguiente</span>
            <span className="mt-1 block text-lg">{resumen(siguiente).nombre} →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
