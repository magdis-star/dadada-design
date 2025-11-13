export default function Footer() {
  return (
    <footer className="bg-primary-brand py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-200">
        <p className="text-sm font-body">
          &copy; 2025 dadada design. Diseño web con propósito.
        </p>
        <p className="text-xs mt-2 font-body">
          Diseño web con enfoque humano para tu negocio.
        </p>

        {/* Legal Links */}
        <div className="mt-6 pt-4 border-t border-gray-300 border-opacity-30">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs font-body">
            <a href="/aviso-legal" className="hover:text-white transition-colors">
              Aviso Legal
            </a>
            <span className="text-gray-400">|</span>
            <a href="/politica-privacidad" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <span className="text-gray-400">|</span>
            <a href="/politica-cookies" className="hover:text-white transition-colors">
              Política de Cookies
            </a>
            <span className="text-gray-400">|</span>
            <a href="/condiciones-contratacion" className="hover:text-white transition-colors">
              Condiciones de Contratación
            </a>
          </div>
          <p className="text-xs mt-3 text-gray-300 font-body">
            Magda Zawadzka | Madrid, España | Cumplimiento LOPD-GDD y RGPD (UE) 2016/679
          </p>
        </div>
      </div>
    </footer>
  );
}
