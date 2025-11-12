"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formMessage, setFormMessage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormMessage("¡Mensaje enviado! Nos pondremos en contacto contigo muy pronto. ¡Gracias!");
    setIsVisible(true);

    // Reset form
    const form = e.currentTarget;
    form.reset();

    // Hide message after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 5000);
  };

  return (
    <section id="contacto" className="section-padding bg-secondary-brand">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-white p-12 rounded-xl text-text-dark shadow-xl">
          <h2 className="text-3xl font-bold mb-3 font-heading">
            ¿Listo para darle un impulso digital a tu negocio?
          </h2>
          <p className="text-lg mb-8 text-gray-700 font-body">
            Cuéntanos tu idea. Una charla sin compromiso puede ser el primer paso
            hacia tu éxito online.
          </p>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Tu Nombre"
              className="w-full p-3 rounded-lg border border-gray-300 text-text-dark"
              required
            />
            <input
              type="email"
              placeholder="Correo Electrónico de Contacto"
              className="w-full p-3 rounded-lg border border-gray-300 text-text-dark"
              required
            />
            <textarea
              rows={4}
              placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
              className="w-full p-3 rounded-lg border border-gray-300 text-text-dark"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 btn-primary rounded-full font-bold shadow-lg transform hover:scale-105 font-heading"
            >
              Enviar Propuesta de Proyecto
            </button>
            {isVisible && (
              <p className="mt-3 text-sm text-center font-medium text-primary-brand font-body">
                {formMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
