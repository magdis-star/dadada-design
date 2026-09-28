"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mrbnkbry", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormMessage("Recibido. Te contesto en cuanto lo lea.");
        setIsVisible(true);
        form.reset();
      } else {
        setFormMessage("No se ha podido enviar. Prueba otra vez en un momento.");
        setIsVisible(true);
      }
    } catch (error) {
      setFormMessage("No se ha podido enviar. Prueba otra vez en un momento.");
      setIsVisible(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const campo =
    "w-full border-0 border-b border-tinta/30 bg-transparent px-0 py-3 placeholder:text-gris focus:border-tinta focus:outline-none focus:ring-0";

  return (
    <section id="contacto" className="mx-auto grid max-w-6xl gap-14 px-4 py-24 sm:px-6 md:grid-cols-2 lg:px-8">
      <div>
        <h2 className="font-serif text-5xl leading-[1.02] sm:text-6xl">
          ¿Hablamos?
        </h2>
        <p className="mt-6 max-w-sm leading-relaxed text-tinta/80">
          Cuéntame qué haces y cómo lo llevas hoy. Proyectos grandes y pequeños,
          en Madrid y fuera.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="sr-only">Tu nombre</span>
          <input type="text" name="name" placeholder="Tu nombre" className={campo} required />
        </label>
        <label className="block">
          <span className="sr-only">Tu email</span>
          <input type="email" name="email" placeholder="Tu email" className={campo} required />
        </label>
        <label className="block">
          <span className="sr-only">Tu mensaje</span>
          <textarea
            name="message"
            rows={4}
            placeholder="¿Qué haces, y qué te gustaría que hiciera tu web?"
            className={`${campo} resize-none`}
            required
          ></textarea>
        </label>
        <button type="submit" disabled={isSubmitting} className="boton-lima disabled:opacity-50">
          {isSubmitting ? "Enviando…" : "Enviar"} <span aria-hidden="true">→</span>
        </button>
        {isVisible && <p className="text-sm" role="status">{formMessage}</p>}
      </form>
    </section>
  );
}
