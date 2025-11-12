"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <span className="font-extrabold font-heading text-2xl lg:text-3xl transition-all">
            <span className="text-primary-brand group-hover:scale-110 inline-block transition-transform">da</span>
            <span className="text-secondary-brand group-hover:scale-110 inline-block transition-transform" style={{ animationDelay: '0.1s' }}>da</span>
            <span className="text-primary-brand group-hover:scale-110 inline-block transition-transform" style={{ animationDelay: '0.2s' }}>da</span>
            <span className="text-text-dark ml-2">design</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-6 text-base font-semibold">
          <a href="/#nosotros" className="hover:text-secondary-brand transition duration-150">
            Nosotros
          </a>
          <a href="/#servicios" className="hover:text-secondary-brand transition duration-150">
            Servicios
          </a>
          <a href="/#precios" className="hover:text-secondary-brand transition duration-150">
            Precios
          </a>
          <a href="/#proyectos" className="hover:text-secondary-brand transition duration-150">
            Proyectos
          </a>
          <a href="/blog" className="hover:text-secondary-brand transition duration-150">
            Blog
          </a>
          <a href="/#contacto" className="hover:text-secondary-brand transition duration-150">
            Contacto
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-primary-brand focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-2">
          <a
            href="/#nosotros"
            className="block px-4 py-2 text-primary-brand hover:bg-background-light"
            onClick={() => setMobileMenuOpen(false)}
          >
            Nosotros
          </a>
          <a
            href="/#servicios"
            className="block px-4 py-2 text-primary-brand hover:bg-background-light"
            onClick={() => setMobileMenuOpen(false)}
          >
            Servicios
          </a>
          <a
            href="/#precios"
            className="block px-4 py-2 text-primary-brand hover:bg-background-light"
            onClick={() => setMobileMenuOpen(false)}
          >
            Precios
          </a>
          <a
            href="/#proyectos"
            className="block px-4 py-2 text-primary-brand hover:bg-background-light"
            onClick={() => setMobileMenuOpen(false)}
          >
            Proyectos
          </a>
          <a
            href="/blog"
            className="block px-4 py-2 text-primary-brand hover:bg-background-light"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </a>
          <a
            href="/#contacto"
            className="block px-4 py-2 text-primary-brand hover:bg-background-light"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
