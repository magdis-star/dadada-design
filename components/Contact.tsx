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
        setFormMessage("¡Mensaje enviado! Nos pondremos en contacto contigo muy pronto. ¡Gracias!");
        setIsVisible(true);
        form.reset();

        // Hide message after 5 seconds
        setTimeout(() => {
          setIsVisible(false);
        }, 5000);
      } else {
        setFormMessage("Hubo un problema al enviar el mensaje. Por favor, intenta de nuevo.");
        setIsVisible(true);
      }
    } catch (error) {
      setFormMessage("Error al enviar el formulario. Por favor, intenta de nuevo.");
      setIsVisible(true);
    } finally {
      setIsSubmitting(false);
    }
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
              name="name"
              placeholder="Tu Nombre"
              className="w-full p-3 rounded-lg border border-gray-300 text-text-dark"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico de Contacto"
              className="w-full p-3 rounded-lg border border-gray-300 text-text-dark"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Cuéntanos sobre tu negocio y qué necesitas..."
              className="w-full p-3 rounded-lg border border-gray-300 text-text-dark"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 btn-primary rounded-full font-bold shadow-lg transform hover:scale-105 font-heading disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? "Enviando..." : "Enviar Propuesta de Proyecto"}
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
