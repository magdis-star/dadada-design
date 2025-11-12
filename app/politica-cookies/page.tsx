import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies | dadada design',
  description: 'Información sobre las cookies que utiliza dadada design',
};

export default function PoliticaCookies() {
  return (
    <main className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-display">Política de Cookies</h1>

        <div className="prose prose-lg max-w-none font-body">
          <p className="text-gray-600 mb-6">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">1. ¿Qué son las cookies?</h2>
            <p className="text-gray-700 leading-relaxed">
              Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando visitas un sitio web.
              Nos permiten recordar tus preferencias y mejorar tu experiencia de navegación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">2. ¿Qué cookies utilizamos?</h2>

            <div className="bg-gray-50 p-6 rounded-md mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies necesarias</h3>
              <p className="text-gray-700 mb-2"><strong>cookieConsent</strong></p>
              <p className="text-sm text-gray-600">Almacena tu preferencia sobre el uso de cookies. Duración: 1 año</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-md mb-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookies analíticas</h3>
              <p className="text-gray-700 mb-2"><strong>Google Analytics (_ga, _gid)</strong></p>
              <p className="text-sm text-gray-600">Nos ayudan a analizar cómo usas el sitio web para mejorarlo.</p>
              <p className="text-sm text-gray-600 mt-2">
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-brand hover:underline">
                  Política de privacidad de Google
                </a>
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">3. ¿Cómo gestionar las cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Puedes gestionar tus preferencias desde el banner de cookies o configurar tu navegador:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary-brand hover:underline">Chrome</a></li>
              <li><a href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-" target="_blank" rel="noopener noreferrer" className="text-primary-brand hover:underline">Firefox</a></li>
              <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary-brand hover:underline">Safari</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">4. Legislación</h2>
            <p className="text-gray-700 leading-relaxed">
              Esta política cumple con el RGPD (UE) 2016/679, LOPD-GDD y la LSSI-CE.
            </p>
          </section>

          <section className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Para más información: <a href="mailto:hello@dadadadesign.com" className="text-primary-brand hover:underline">hello@dadadadesign.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
