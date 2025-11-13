import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Condiciones de Contratación | dadada design',
  description: 'Términos y condiciones de contratación de servicios de diseño web con dadada design',
};

export default function CondicionesContratacion() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-display">Condiciones de Contratación</h1>

        <div className="prose prose-lg max-w-none font-body">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. Servicios</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              dadada design ofrece servicios de diseño y desarrollo web para pequeños negocios:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Diseño de páginas web</li>
              <li>Rediseño de sitios existentes</li>
              <li>Consultoría de diseño</li>
              <li>Mantenimiento web</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. Proceso de contratación</h2>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2">
              <li>Consulta inicial gratuita (30 minutos)</li>
              <li>Propuesta y presupuesto personalizado</li>
              <li>Firma del contrato y pago del anticipo (50%)</li>
              <li>Desarrollo del proyecto</li>
              <li>Entrega y pago final (50%)</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. Condiciones de pago</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>50% anticipo al firmar el contrato</li>
              <li>50% restante al entregar el proyecto</li>
              <li>Todos los precios incluyen IVA (21%)</li>
              <li>Pagos por transferencia bancaria o tarjeta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Propiedad intelectual</h2>
            <p className="text-gray-700 leading-relaxed">
              Una vez completado el pago total, el cliente obtiene los derechos de uso del diseño web final.
              dadada design retiene el derecho a incluir el proyecto en su portfolio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">5. Garantía</h2>
            <p className="text-gray-700 leading-relaxed">
              Garantizamos el correcto funcionamiento del sitio web durante 30 días después del lanzamiento.
              Durante este período corregimos errores sin coste adicional.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">6. Cancelación</h2>
            <p className="text-gray-700 leading-relaxed">
              El cliente puede cancelar en cualquier momento, pagando el trabajo realizado hasta la fecha.
              El anticipo no es reembolsable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">7. Legislación aplicable</h2>
            <p className="text-gray-700 leading-relaxed">
              Estas condiciones se rigen por la legislación española. Juzgados y Tribunales de Madrid.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Para consultas: <a href="mailto:hello@dadadadesign.com" className="text-primary-brand hover:underline">hello@dadadadesign.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
