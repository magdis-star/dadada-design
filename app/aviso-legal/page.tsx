import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviso Legal | dadada design',
  description: 'Aviso legal de dadada design - Diseño web profesional en España',
};

export default function AvisoLegal() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-display">Aviso Legal</h1>

        <div className="prose prose-lg max-w-none font-body">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. Datos identificativos</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la
              Sociedad de la Información y de Comercio Electrónico, se informa a los usuarios de los
              datos identificativos del titular del sitio web:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><strong>Denominación:</strong> dadada design</li>
              <li><strong>Titular:</strong> Magda Zawadzka</li>
              <li><strong>Domicilio:</strong> Madrid, España</li>
              <li><strong>Correo electrónico:</strong> hello@dadadadesign.com</li>
              <li><strong>Actividad:</strong> Diseño y desarrollo de sitios web profesionales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. Objeto</h2>
            <p className="text-gray-700 leading-relaxed">
              El presente aviso legal regula el uso y utilización del sitio web de dadada design.
              La navegación por el sitio web atribuye la condición de usuario y conlleva la aceptación
              de todas las condiciones incluidas en este Aviso Legal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. Propiedad intelectual e industrial</h2>
            <p className="text-gray-700 leading-relaxed">
              Todos los contenidos del sitio web (textos, imágenes, diseños, gráficos, código fuente, etc.)
              son propiedad de dadada design o de terceros que han autorizado su uso, y están protegidos por
              los derechos de propiedad intelectual e industrial.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Legislación aplicable y jurisdicción</h2>
            <p className="text-gray-700 leading-relaxed">
              Las presentes condiciones se rigen por la legislación española. Para la resolución de
              cualquier conflicto derivado del uso de este sitio web, las partes se someten a los
              Juzgados y Tribunales de Madrid.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">5. Contacto</h2>
            <p className="text-gray-700 leading-relaxed">
              Para cualquier consulta sobre este aviso legal: <a href="mailto:hello@dadadadesign.com" className="text-primary-brand hover:underline">hello@dadadadesign.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
