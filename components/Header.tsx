"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

const enlaces = [
  { href: "/#como-trabajo", texto: "Cómo trabajo" },
  { href: "/#servicios", texto: "Servicios" },
  { href: "/#trabajos", texto: "Trabajos" },
  { href: "/#sobre-mi", texto: "Sobre mí" },
  { href: "/blog", texto: "Notas" },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="sticky top-0 z-20 bg-papel/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" aria-label="dadada design, inicio">
          <Logo className="text-3xl" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          {enlaces.map((e) => (
            <a key={e.href} href={e.href} className="transition-colors hover:text-gris">
              {e.texto}
            </a>
          ))}
          <a href="/#contacto" className="boton-lima !px-5 !py-2">
            Hablemos <span aria-hidden="true">→</span>
          </a>
        </nav>

        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="md:hidden"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuAbierto ? (
              <path strokeLinecap="round" strokeWidth="1.5" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {menuAbierto && (
        <nav className="border-t border-linea bg-papel px-4 pb-6 pt-2 md:hidden">
          {enlaces.map((e) => (
            <a
              key={e.href}
              href={e.href}
              className="block border-b border-linea py-3 font-serif text-2xl"
              onClick={() => setMenuAbierto(false)}
            >
              {e.texto}
            </a>
          ))}
          <a href="/#contacto" className="boton-lima mt-6" onClick={() => setMenuAbierto(false)}>
            Hablemos <span aria-hidden="true">→</span>
          </a>
        </nav>
      )}
    </header>
  );
}
