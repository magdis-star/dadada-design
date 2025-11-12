import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | dadada design',
  description: 'Política de privacidad de dadada design - Cumplimiento RGPD y LOPD-GDD',
};

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-display">Política de Privacidad</h1>

        <div className="prose prose-lg max-w-none font-body">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. Responsable del tratamiento</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPD-GDD):
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Responsable:</strong> dadada design - Magda Zawadzka</li>
              <li><strong>Domicilio:</strong> Madrid, España</li>
              <li><strong>Email:</strong> hello@dadadadesign.com</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. Datos que recopilamos</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Cuando te contactas con nosotros:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Nombre y apellidos</li>
              <li>Correo electrónico</li>
              <li>Teléfono (opcional)</li>
              <li>Mensaje o consulta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. Finalidad del tratamiento</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Responder a consultas y solicitudes</li>
              <li>Gestionar proyectos de diseño web</li>
              <li>Mejorar nuestros servicios</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Tus derechos</h2>
            <p className="text-gray-700 leading-relaxed mb-3">Tienes derecho a:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Acceso, rectificación y supresión de tus datos</li>
              <li>Limitación y portabilidad de los datos</li>
              <li>Oposición al tratamiento</li>
              <li>Retirada del consentimiento</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Para ejercer estos derechos: <a href="mailto:hello@dadadadesign.com" className="text-primary-brand hover:underline">hello@dadadadesign.com</a>
            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
              Puedes presentar reclamación ante la Agencia Española de Protección de Datos (AEPD): <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary-brand hover:underline">www.aepd.es</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">5. Seguridad</h2>
            <p className="text-gray-700 leading-relaxed">
              Implementamos medidas técnicas y organizativas para proteger tus datos personales contra
              acceso no autorizado, pérdida o alteración.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
