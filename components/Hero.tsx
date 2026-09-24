export default function Hero() {
  return (
    <section className="relative bg-primary-brand section-padding text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 font-abril">
          Soy Magdalena y hago webs para gente que vende{" "}
          <span className="bg-secondary-brand text-text-dark px-3 py-1 rounded-lg inline-block transform rotate-[-2deg]">
            lo que hace ella misma
          </span>
        </h1>
        <p className="mt-4 text-xl text-gray-100 max-w-3xl mx-auto font-body">
          Mentoras, escritoras, celebrantes, el obrador de la esquina. Proyectos
          grandes y pequeños, en Madrid y fuera. Si hoy lo llevas todo por{" "}
          <strong>WhatsApp e Instagram</strong>, una web te ahorra repetir veinte
          veces lo mismo, lo deja todo junto en un sitio y se parece a ti, no a un
          perfil igual al de todos.
        </p>
        <a
          href="#contacto"
          className="mt-10 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-text-dark bg-secondary-brand hover:bg-orange-400 shadow-lg transition duration-300 transform hover:scale-105 font-heading"
        >
          Cuéntame tu proyecto
        </a>
      </div>
    </section>
  );
}
