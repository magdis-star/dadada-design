import Logo from "@/components/Logo";

const legales = [
  { href: "/aviso-legal", texto: "Aviso legal" },
  { href: "/politica-privacidad", texto: "Privacidad" },
  { href: "/politica-cookies", texto: "Cookies" },
  { href: "/condiciones-contratacion", texto: "Condiciones de contratación" },
];

export default function Footer() {
  return (
    <footer className="border-t border-linea">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <Logo className="text-4xl" quieto />
        </div>

        <div className="flex flex-col gap-4 text-sm md:items-end">
          <a
            href="https://www.instagram.com/dadada_design/"
            target="_blank"
            rel="noopener noreferrer"
            className="enlace"
          >
            Instagram
          </a>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-gris">
            {legales.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-tinta">
                {l.texto}
              </a>
            ))}
          </nav>
          <p className="text-xs text-gris">© {new Date().getFullYear()} dadada design</p>
        </div>
      </div>
    </footer>
  );
}
