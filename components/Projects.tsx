import Portatil from "@/components/Portatil";

const trabajos = [
  {
    nombre: "Gonzalo Morales",
    que: "Museo digital y tienda online para el legado de un pintor",
    temas: "Estrategia · UX · Tienda · Web",
    imagen: "/images/projects/gonzalo-morales-portatil.jpg",
    caso: "/casos/gonzalo-morales-galeria-arte",
  },
  {
    nombre: "Elemental Kids Club",
    que: "Vender un libro en Amazon y, a la vez, hacer lista de correo",
    temas: "Investigación · UX · Web",
    imagen: "/images/projects/elemental-kids-club-portatil.jpg",
    caso: "/casos/elemental-kids-club-landing-educativa",
  },
  {
    nombre: "Tie the Celtic Knot",
    que: "Una celebrante de bodas que no aparecía en Google",
    temas: "UX · Posicionamiento · Web",
    imagen: "/images/projects/celtic-knot-portatil.jpg",
    caso: "/casos/tie-celtic-knot-wordpress-celebrant",
  },
];

export default function Projects() {
  return (
    <section id="trabajos" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="etiqueta">da / 03</p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Trabajos</h2>
        </div>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6">
        {trabajos.map((t) => (
          <a key={t.nombre} href={t.caso} className="group block">
            <Portatil src={t.imagen} alt={`La web de ${t.nombre}`} />
            <h3 className="mt-5 text-lg font-medium">{t.nombre}</h3>
            <p className="mt-1 text-sm leading-snug text-tinta/75">{t.que}</p>
            <p className="etiqueta mt-4 !normal-case !tracking-normal">{t.temas}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
