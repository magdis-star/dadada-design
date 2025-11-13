'use client';

import React, { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay to avoid flash on page load
      setTimeout(() => setShowBanner(true), 500);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);
    // Here you would enable analytics/marketing cookies
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted'
      });
    }
  };

  const handleRejectAll = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
    // Only necessary cookies are allowed by default
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-2xl border border-gray-200">
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="text-3xl">🍪</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-900 mb-2 font-poppins">
                  Utilizamos cookies
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-3 font-body">
                  Utilizamos cookies propias y de terceros para analizar el uso del sitio web y
                  mostrarte publicidad relacionada con tus preferencias según tus hábitos de navegación.
                  Si continúas navegando, consideramos que aceptas su uso.
                </p>

                {!showDetails ? (
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-primary-brand text-sm font-medium hover:underline font-body"
                  >
                    Más información sobre las cookies →
                  </button>
                ) : (
                  <div className="mt-4 space-y-3 text-sm font-body">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-semibold text-gray-900 mb-2">🔒 Cookies necesarias</h3>
                      <p className="text-gray-600 text-xs">
                        Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden
                        desactivar. Incluyen cookies de sesión y preferencias del usuario.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-semibold text-gray-900 mb-2">📊 Cookies analíticas</h3>
                      <p className="text-gray-600 text-xs">
                        Nos permiten analizar cómo los usuarios utilizan nuestro sitio para mejorar
                        la experiencia. Utilizamos Google Analytics para estos propósitos.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md">
                      <h3 className="font-semibold text-gray-900 mb-2">🎯 Cookies de marketing</h3>
                      <p className="text-gray-600 text-xs">
                        Utilizadas para mostrar publicidad relevante basada en tus intereses y
                        medir la efectividad de nuestras campañas publicitarias.
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      Puedes obtener más información sobre nuestro uso de cookies en nuestra{' '}
                      <a href="/politica-cookies" className="text-primary-brand hover:underline">
                        Política de Cookies
                      </a>.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-3 mt-6">
              <button
                onClick={handleAcceptAll}
                className="flex-1 bg-primary-brand text-white px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors font-poppins"
              >
                Aceptar todas
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition-colors font-poppins"
              >
                Solo necesarias
              </button>
              <button
                onClick={handleRejectAll}
                className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors font-poppins"
              >
                Rechazar todas
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4 text-center font-body">
              Al hacer clic en "Aceptar todas", aceptas el uso de todas las cookies.
              Puedes cambiar tus preferencias en cualquier momento.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
