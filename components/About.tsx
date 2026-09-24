import Image from "next/image";

export default function About() {
  return (
    <section id="nosotros" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Column */}
          <div className="relative max-w-sm mx-auto lg:mx-0">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/magdalena-photo-2.jpg"
                alt="Magdalena - Diseñadora web freelance en Madrid"
                fill
                className="object-cover object-center"
                unoptimized
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-brand rounded-full opacity-20 blur-2xl"></div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-brand mb-6 font-heading">
              Hola, soy Magdalena
            </h2>
            <p className="text-xl text-secondary-brand font-semibold mb-6 font-heading">
              Diseñadora web freelance en Madrid
            </p>
            <div className="space-y-4 text-gray-700 font-body text-lg">
              <p>
                Diseño y construyo <strong>webs y herramientas digitales</strong> para
                negocios y creadoras: desde la primera entrevista hasta el código que
                lo sostiene.
              </p>
              <p>
                Creo que el buen diseño no solo se ve, <strong>se siente</strong> — y
                empieza por entender a las personas detrás de cada proyecto.
              </p>
              <p>
                Mi camino hacia el diseño web empezó desde la creatividad y la organización.
                Antes de dedicarme al diseño, tuve un <strong>blog de cocina</strong> y
                trabajé como <strong>coordinadora de operaciones</strong>, lo que me enseñó
                la importancia de la planificación, los procesos claros y el trabajo en equipo.
              </p>
              <p>
                Con el tiempo, descubrí el <strong>Design Thinking</strong> y me enamoré de
                su filosofía: <em>entender primero, diseñar después</em>.
              </p>
              <p>
                El nombre <strong>"dadada design"</strong> tiene un origen especial: es una de
                las primeras expresiones de mi hija. Elegir este nombre fue natural — representa
                la alegría, la autenticidad y ese espíritu creativo que quiero llevar a cada proyecto.
              </p>
              <p className="text-primary-brand font-semibold">
                Hoy aplico ese enfoque en cada proyecto: escucho, analizo y diseño
                soluciones digitales que de verdad ayudan a las personas y aportan
                valor a los negocios.
              </p>
            </div>

            {/* Principles */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-text-dark font-heading mb-4">
                Mi filosofía de trabajo:
              </h3>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-green rounded-full flex items-center justify-center">
                  <span className="text-primary-brand text-xl">❤️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-brand font-heading">Empatía primero</h4>
                  <p className="text-gray-600 text-sm">Escucho a mis clientes y a sus usuarios para entender qué necesitan realmente.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-green rounded-full flex items-center justify-center">
                  <span className="text-primary-brand text-xl">🎯</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-brand font-heading">Diseño con propósito</h4>
                  <p className="text-gray-600 text-sm">Cada decisión visual tiene una razón: mejorar la experiencia y la comunicación.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 bg-accent-green rounded-full flex items-center justify-center">
                  <span className="text-primary-brand text-xl">✨</span>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-brand font-heading">Simplicidad efectiva</h4>
                  <p className="text-gray-600 text-sm">Menos ruido, más claridad. Una web útil es una web que se entiende rápido.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
