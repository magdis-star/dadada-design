export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  year: string;
  url?: string;
  thumbnail: string;
  excerpt: string;
  challenge: {
    title: string;
    description: string;
    goals: string[];
  };
  process: {
    title: string;
    steps: {
      phase: string;
      description: string;
      actions: string[];
    }[];
  };
  solution: {
    title: string;
    description: string;
    features: string[];
  };
  results: {
    title: string;
    description: string;
    metrics: {
      label: string;
      value: string;
      description: string;
    }[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "elemental-kids-club-landing-educativa",
    title: "Elemental Kids Club - Landing Page Educativa",
    client: "Elemental Kids Club",
    industry: "Educación Infantil",
    year: "2024",
    url: "https://elementalkidsclub.com",
    thumbnail: "/images/projects/elemental-kids-club.jpg",
    excerpt: "Landing page optimizada para vender libros de actividades educativas infantiles con sistema de lead generation mediante bonus descargable.",

    challenge: {
      title: "El Desafío",
      description: "Elemental Kids Club, un proyecto editorial de libros de actividades para niños, necesitaba una landing page efectiva para vender en Amazon y captar leads cualificados. El reto era crear una experiencia que convirtiera visitas en compradores mientras construía una base de datos de clientes potenciales mediante un bonus descargable.",
      goals: [
        "Crear una landing page clara y persuasiva enfocada en conversión",
        "Implementar sistema de lead generation con bonus descargable",
        "Integrar Wild Mail para email marketing con doble opt-in",
        "Asegurar cumplimiento GDPR con cookies y políticas de privacidad",
        "Facilitar edición de contenido sin conocimientos técnicos (WordPress Customizer)"
      ]
    },

    process: {
      title: "Proceso de Design Thinking",
      steps: [
        {
          phase: "1. Empatizar - Entender al Usuario",
          description: "Analicé las necesidades de padres que buscan alternativas educativas sin pantallas y los objetivos comerciales del cliente.",
          actions: [
            "Investigación del público objetivo: padres de niños 5-8 años preocupados por tiempo excesivo en pantallas",
            "Análisis de competencia: landing pages de productos educativos en Amazon",
            "Identificación de pain points: dificultad para encontrar actividades educativas + entretenidas",
            "Estudio del buyer journey: descubrimiento → evaluación → compra → fidelización con bonus"
          ]
        },
        {
          phase: "2. Definir - Clarificar el Problema",
          description: "Definí dos objetivos principales: venta directa en Amazon + construcción de lista de email para marketing recurrente.",
          actions: [
            "Objetivo primario: Conversión a Amazon (botón COMPRAR visible)",
            "Objetivo secundario: Captura de leads con bonus descargable",
            "Mensaje clave: 'Aprendizaje divertido lejos de las pantallas'",
            "Propuesta de valor: Actividades que estimulan creatividad + lógica",
            "Estrategia: Wild Mail con doble opt-in para leads cualificados"
          ]
        },
        {
          phase: "3. Idear y Prototipar - Diseñar la Solución",
          description: "Diseñé una landing page con colores infantiles vibrantes (amarillo, rosa, azul) y un funnel de bonus para lead generation.",
          actions: [
            "Paleta de colores energética: Amarillo #FAD02E, Rosa #F43F5E, Azul #3B82F6",
            "Tipografía lúdica: Bangers para títulos, Inter para texto legible",
            "Estructura: Hero + Beneficios + Qué incluye + Testimoniales + FAQ + Bonus",
            "Formulario bonus destacado: nombre + email para descarga",
            "Wild Mail: páginas de confirmación + thank you personalizadas",
            "Design system con Tailwind CSS para consistencia visual"
          ]
        },
        {
          phase: "4. Implementar - Desarrollo Técnico",
          description: "Desarrollo dual: HTML estático (Vercel) + WordPress theme (cliente final) con integración Wild Mail y compliance GDPR.",
          actions: [
            "HTML estático con Tailwind CSS CDN para deploy rápido en Vercel",
            "WordPress theme personalizado con Customizer: 3 testimoniales, 7 FAQs, URLs editables",
            "Integración Wild Mail: formulario → email confirmación → página confirmación → email bonus",
            "GDPR compliance: banner de cookies + política de privacidad + política de cookies",
            "Páginas WordPress templates: confirmación, thank you, privacidad",
            "Favicon y logo optimizados",
            "Deploy en elementalkidsclub.com"
          ]
        },
        {
          phase: "5. Iterar - Mejoras Post-Launch",
          description: "Ajustes basados en feedback del cliente: eliminación de elementos visuales innecesarios, optimización de formulario.",
          actions: [
            "Eliminación de divisores decorativos para diseño más limpio",
            "Corrección de logo duplicado en páginas de confirmación",
            "Optimización de hero: sin burbuja amarilla para mayor claridad",
            "Ajuste de tamaño botón COMPRAR para mayor visibilidad",
            "Adición de campo nombre en formulario bonus (personalización)",
            "Testing de flujo completo Wild Mail: form → confirmation → thank you → bonus email"
          ]
        }
      ]
    },

    solution: {
      title: "La Solución",
      description: "Desarrollé una landing page dual (HTML estático + WordPress) con diseño infantil vibrante, sistema de lead generation Wild Mail, compliance GDPR completo y WordPress Customizer para edición fácil del cliente.",
      features: [
        "Landing page optimizada para conversión con diseño infantil profesional",
        "Sistema de bonus descargable con Wild Mail (double opt-in)",
        "Formulario captura leads: nombre + email",
        "Páginas de confirmación y thank you personalizadas",
        "WordPress Customizer: 3 testimoniales, 7 FAQs, URLs Amazon/Wild Mail editables",
        "GDPR compliant: banner cookies, política de privacidad, consentimiento",
        "Integración Amazon con botón COMPRAR destacado",
        "Deploy dual: Vercel (testing rápido) + WordPress (cliente final)",
        "Guía completa en español para cliente (COMO-EDITAR-TU-SITIO-WEB.md)",
        "Responsive design optimizado móvil/tablet/desktop"
      ]
    },

    results: {
      title: "Resultados",
      description: "Landing page profesional lista para captar leads y vender en Amazon, con sistema de email marketing automatizado y control total para el cliente sin conocimientos técnicos.",
      metrics: [
        {
          label: "2 Funnels",
          value: "Conversión Dual",
          description: "Venta Amazon + Lead generation con bonus descargable"
        },
        {
          label: "100%",
          value: "Autonomía Cliente",
          description: "WordPress Customizer permite editar testimoniales, FAQs y URLs sin código"
        },
        {
          label: "GDPR",
          value: "Compliance Total",
          description: "Banner cookies, políticas de privacidad, consentimiento doble opt-in"
        }
      ],
      testimonial: {
        quote: "Magda entendió perfectamente que necesitaba dos cosas: vender libros en Amazon Y construir mi lista de email. La integración con Wild Mail funciona perfectamente, y lo mejor es que puedo editar testimoniales y FAQs yo misma sin llamarla cada vez. El diseño es exactamente lo que imaginé: alegre, profesional, y enfocado en conversión.",
        author: "Equipo Elemental Kids Club",
        role: "Cliente"
      }
    }
  },
  {
    slug: "tie-celtic-knot-wordpress-celebrant",
    title: "Tie the Celtic Knot - Rediseño Web para Celebrante de Bodas",
    client: "Celebrante de Bodas - Ontario, Canadá",
    industry: "Servicios de Bodas",
    year: "2025",
    url: "https://tiethecelticknot.ca",
    thumbnail: "/images/projects/celtic-knot-website.jpg",
    excerpt: "Una celebrante de bodas tenía un sitio WordPress que ella misma había creado, pero era invisible en Google y no generaba clientes. Rediseñamos con SEO profesional, estrategia de conversión y diseño que refleja la magia de sus ceremonias Celtas.",

    challenge: {
      title: "El Desafío",
      description: "Una celebrante de bodas especializada en ceremonias Celtas había creado su propio sitio en WordPress, pero enfrentaba un problema crítico: no aparecía en búsquedas de Google cuando parejas buscaban celebrante en Ontario. Las pocas visitas que recibía no se convertían en consultas porque el sitio carecía de llamados a la acción claros, testimonios visibles y una presentación profesional de sus servicios.",
      goals: [
        "Hacer el sitio visible en búsquedas locales como 'Celtic wedding celebrant Ontario'",
        "Transformar visitas en consultas con estrategia de conversión clara",
        "Diseño profesional que refleje la belleza y autenticidad de ceremonias Celtas",
        "Mantener la facilidad de WordPress para que ella pueda actualizar contenido",
        "Mostrar testimonios y fotos de ceremonias reales para generar confianza"
      ]
    },

    process: {
      title: "Proceso de Design Thinking",
      steps: [
        {
          phase: "1. Empatizar - Entender las Necesidades",
          description: "Conversé con la cliente sobre sus frustraciones y objetivos para entender qué necesitaba realmente su negocio.",
          actions: [
            "Problema principal: Sitio invisible en Google - parejas no lo encontraban al buscar celebrante",
            "Frustración: Diseño DIY que no transmitía profesionalismo de sus ceremonias",
            "Necesidad: Poder actualizar testimonios y fotos después de cada boda fácilmente",
            "Objetivo: Generar más consultas de parejas que buscan ceremonia Celta auténtica"
          ]
        },
        {
          phase: "2. Definir - Clarificar la Solución",
          description: "Definí una estrategia clara: rediseño profesional + SEO local + facilidad de actualización.",
          actions: [
            "Mantener WordPress (ya familiar para la cliente)",
            "Rediseño completo con colores naturales que reflejan estética Celta",
            "SEO enfocado en búsquedas locales: 'Celtic celebrant Ontario', 'handfasting ceremony'",
            "Sección de testimonios prominente para generar confianza",
            "Llamados a la acción claros: 'Consulta Disponibilidad', 'Contactar'"
          ]
        },
        {
          phase: "3. Idear - Diseñar la Experiencia",
          description: "Diseñé un sitio que cuenta la historia de ceremonias significativas y guía a parejas hacia la consulta.",
          actions: [
            "Paleta de colores: Verde salvia + crema = naturaleza y tradición Celta",
            "Hero impactante: Foto de ceremonia real + headline emocional + CTA visible",
            "Estructura clara: Servicios → Proceso → Testimonios → Galería → Precios → FAQ",
            "Sistema de galería para mostrar belleza de ceremonias pasadas",
            "Blog para compartir tradiciones Celtas (handfasting, stone ceremonies) y mejorar SEO"
          ]
        },
        {
          phase: "4. Implementar - Construcción del Sitio",
          description: "Rediseñé completamente el sitio manteniendo la facilidad de WordPress para actualizaciones.",
          actions: [
            "Diseño responsive optimizado para móvil (mayoría de novias buscan en teléfono)",
            "Implementación SEO: títulos optimizados, descripciones, palabras clave locales",
            "Configuración Google Search Console para aparecer en búsquedas locales",
            "Sistema simple para añadir testimonios y fotos sin ayuda técnica",
            "Formularios de contacto claros en múltiples puntos del sitio"
          ]
        },
        {
          phase: "5. Testear - Validación y Ajustes",
          description: "Probé el sitio exhaustivamente y entrené a la cliente para gestionar su contenido fácilmente.",
          actions: [
            "Test de búsquedas: Verificación que aparece para términos clave locales",
            "Test móvil: Experiencia perfecta en iPhone/Android",
            "Entrenamiento cliente: Cómo añadir testimonios, subir fotos, escribir posts",
            "Ajustes finales: Textos, espaciados, llamados a la acción",
            "Documentación simple en español para gestión independiente"
          ]
        }
      ]
    },

    solution: {
      title: "La Solución",
      description: "Rediseñé completamente el sitio WordPress con diseño profesional que refleja la magia de ceremonias Celtas, SEO optimizado para aparecer en búsquedas locales, y sistema simple para que la cliente actualice su contenido sin ayuda técnica.",
      features: [
        "Diseño profesional con colores naturales (verde salvia + crema) que transmiten autenticidad Celta",
        "SEO local optimizado para aparecer cuando parejas buscan 'Celtic celebrant Ontario'",
        "Sección de testimonios prominente para mostrar experiencias reales de parejas",
        "Galería de fotos de ceremonias para inspirar a futuros clientes",
        "Sistema blog para compartir tradiciones Celtas y mejorar posicionamiento en Google",
        "Múltiples llamados a la acción claros: 'Consulta Disponibilidad', 'Check Availability'",
        "Diseño responsive perfecto en móvil (donde novias buscan celebrante)",
        "Sistema WordPress simple para añadir testimonios y fotos en minutos",
        "Formularios de contacto estratégicamente ubicados",
        "Guía en español para gestionar el sitio de forma independiente"
      ]
    },

    results: {
      title: "Resultados",
      description: "La celebrante pasó de tener un sitio invisible a aparecer en búsquedas locales de Google. Ahora recibe consultas de parejas que encuentran su sitio buscando 'Celtic wedding celebrant Ontario' y puede actualizar testimonios y fotos después de cada ceremonia sin ayuda.",
      metrics: [
        {
          label: "Visible",
          value: "En Google",
          description: "De invisible a aparecer en primeras páginas para búsquedas locales clave"
        },
        {
          label: "+Consultas",
          value: "Conversión",
          description: "Visitas ahora se convierten en consultas gracias a diseño profesional y CTAs claros"
        },
        {
          label: "Autonomía",
          value: "Total Control",
          description: "Puede actualizar testimonios, fotos y blog en minutos sin ayuda técnica"
        }
      ],
      testimonial: {
        quote: "El rediseño transformó mi negocio. Ahora parejas me encuentran en Google cuando buscan celebrante Celta, y el sitio refleja la belleza y profesionalismo de mis ceremonias. Puedo actualizar testimonios y fotos yo misma después de cada boda, lo que mantiene el sitio fresco y relevante.",
        author: "Celebrante de Bodas",
        role: "Ontario, Canadá"
      }
    }
  },
  {
    slug: "gonzalo-morales-galeria-arte",
    title: "Gonzalo Morales - Galería de Arte Digital",
    client: "Familia Morales",
    industry: "Arte y Cultura",
    year: "2024",
    url: "https://gonzalomorales.net",
    thumbnail: "/images/projects/gonzalo-morales.jpg",
    excerpt: "Creación de un museo digital y tienda online para preservar y comercializar el legado artístico de un pintor costarricense.",

    challenge: {
      title: "El Desafío",
      description: "La familia del artista Gonzalo Morales (1945-2017) necesitaba una forma de preservar su legado artístico y hacer accesible su obra al público internacional. Con más de 90 pinturas entre bodegones y retratos, requerían una solución que funcionara como museo digital y tienda online simultáneamente.",
      goals: [
        "Crear un archivo digital profesional de toda la obra del artista",
        "Permitir la venta online de las obras con proceso seguro",
        "Llegar a audiencia internacional (bilingüe español-inglés)",
        "Transmitir la elegancia y profesionalismo del arte clásico",
        "Facilitar la gestión del inventario y ventas para la familia"
      ]
    },

    process: {
      title: "Proceso de Design Thinking",
      steps: [
        {
          phase: "1. Empatizar - Entender al Usuario",
          description: "Realicé entrevistas profundas con la familia y analicé el comportamiento de coleccionistas de arte online.",
          actions: [
            "Entrevistas con la familia para entender el legado del artista",
            "Investigación de galerías de arte online exitosas",
            "Análisis de cómo los coleccionistas toman decisiones de compra",
            "Identificación de necesidades: calidad visual, información detallada, confianza"
          ]
        },
        {
          phase: "2. Definir - Clarificar el Problema",
          description: "Definí que el sitio debía equilibrar dos funciones: museo (educación y preservación) y tienda (comercio).",
          actions: [
            "Objetivo principal: Mostrar la obra con calidad museística",
            "Objetivo secundario: Facilitar venta internacional",
            "Usuario objetivo: Coleccionistas de arte latinoamericano, 35-65 años",
            "Mensaje clave: Elegancia, autenticidad, legado cultural"
          ]
        },
        {
          phase: "3. Idear y Prototipar - Diseñar la Solución",
          description: "Diseñé una experiencia visual minimalista que dejaba protagonismo absoluto a las pinturas.",
          actions: [
            "Paleta de colores neutros (negros, grises, blancos) para no competir con el arte",
            "Tipografía serif elegante (tipo museo tradicional)",
            "Galería con filtros por categoría (bodegones/retratos)",
            "Fichas detalladas por obra con dimensiones, técnica, historia",
            "Sistema e-commerce integrado con WooCommerce",
            "Versión bilingüe completa"
          ]
        },
        {
          phase: "4. Implementar y Mejorar",
          description: "Desarrollo en WordPress/WooCommerce con optimización para imágenes de alta calidad y SEO internacional.",
          actions: [
            "WordPress con WooCommerce para gestión fácil por la familia",
            "Optimización de imágenes de alta resolución sin perder calidad",
            "Plugin WPML para contenido bilingüe",
            "Configuración de pagos internacionales (PayPal, tarjetas)",
            "SEO optimizado para búsquedas de arte costarricense",
            "Capacitación a la familia para gestionar inventario y ventas"
          ]
        }
      ]
    },

    solution: {
      title: "La Solución",
      description: "Desarrollé una galería online bilingüe que funciona como museo digital y tienda, permitiendo a la familia gestionar fácilmente el inventario mientras ofrece una experiencia premium a los coleccionistas.",
      features: [
        "Galería visual con más de 90 obras catalogadas profesionalmente",
        "Sistema de filtros por categoría (bodegones, retratos)",
        "Fichas detalladas de cada obra con historia y especificaciones técnicas",
        "E-commerce completo con WooCommerce (carrito, pagos internacionales)",
        "Contenido 100% bilingüe (español/inglés)",
        "Diseño responsive optimizado para tablets (ideal para gallerías)",
        "Backend intuitivo para gestión familiar",
        "Optimización SEO para posicionamiento internacional"
      ]
    },

    results: {
      title: "Resultados",
      description: "El sitio logró convertirse en la referencia online del artista, atrayendo interés internacional y facilitando ventas directas sin intermediarios.",
      metrics: [
        {
          label: "90+",
          value: "Obras Catalogadas",
          description: "Todo el legado artístico digitalizado y accesible online"
        },
        {
          label: "2",
          value: "Idiomas",
          description: "Alcance internacional con versión completa en español e inglés"
        },
        {
          label: "100%",
          value: "Gestión Autónoma",
          description: "La familia puede actualizar inventario y procesar ventas sin ayuda técnica"
        }
      ],
      testimonial: {
        quote: "Magdalena entendió perfectamente que queríamos honrar el trabajo de papá con algo digno y profesional. El sitio es elegante, fácil de usar, y nos ha permitido llegar a coleccionistas que nunca habríamos alcanzado de otra forma.",
        author: "Familia Morales",
        role: "Cliente"
      }
    }
  },
  {
    slug: "bernardo-teaching-assistant-landing-ia",
    title: "Bernardo's Teaching Assistant - Landing Page para App de IA Educativa",
    client: "Bernardo - Investigación PhD",
    industry: "EdTech - Tecnología Educativa",
    year: "2024",
    url: "https://bernardos-teaching-assistant.vercel.app/en",
    thumbnail: "/images/projects/bernardo-teaching-assistant.jpg",
    excerpt: "Landing page bilingüe (inglés/español) para reclutar participantes senior (55+) en un estudio PhD sobre aprendizaje de inglés con IA conversacional. Diseño moderno con bento grid y enfoque en accesibilidad.",

    challenge: {
      title: "El Desafío",
      description: "Un investigador PhD necesitaba reclutar participantes de 55+ años en Madrid para un estudio piloto de una app de conversación en inglés con IA. El reto era crear una landing page que inspirara confianza en seniors, explicara claramente los beneficios de la IA para aprendizaje de idiomas, y facilitara el registro sin intimidar tecnológicamente al público objetivo.",
      goals: [
        "Diseño accesible y amigable para adultos mayores (55+) con poco dominio tecnológico",
        "Explicar de forma clara y no intimidante qué es una app de conversación con IA",
        "Comunicar los beneficios: aprender sin presión, a tu ritmo, sin juzgamiento",
        "Soporte bilingüe completo (inglés/español) para alcance internacional",
        "Generar confianza académica: es un estudio PhD serio, no publicidad comercial",
        "Formulario de registro simple pero que capture información necesaria para el estudio"
      ]
    },

    process: {
      title: "Proceso de Design Thinking",
      steps: [
        {
          phase: "1. Empatizar - Entender al Usuario Senior",
          description: "Investigué las barreras que enfrentan adultos mayores al aprender tecnología y idiomas para diseñar una experiencia que eliminara esos miedos.",
          actions: [
            "Pain points identificados: miedo a no seguir el ritmo, vergüenza de cometer errores, interfaces complejas",
            "Necesidades: textos grandes y legibles, navegación simple, mensajes tranquilizadores",
            "Investigación de usuarios 55+: prefieren claridad visual sobre diseños 'modernos' complicados",
            "Análisis de competencia en EdTech: muchas apps intimidan a seniors con diseño juvenil"
          ]
        },
        {
          phase: "2. Definir - Clarificar el Mensaje",
          description: "Definí tres mensajes clave que resonarían con adultos mayores: sin presión, a tu ritmo, y con propósito educativo genuino.",
          actions: [
            "Mensaje principal: 'Practica inglés sin presión, a tu propio ritmo'",
            "Diferenciador: No es una app comercial, es un proyecto de investigación PhD",
            "Beneficio emocional: La IA no juzga, espera, se adapta a ti",
            "Propuesta de valor: Acceso gratuito + contribuyes a investigación educativa",
            "Estrategia de confianza: Transparencia sobre el estudio, qué esperar, cuánto tiempo"
          ]
        },
        {
          phase: "3. Idear - Diseñar con Accesibilidad",
          description: "Diseñé una landing moderna pero accesible, usando el emerald green como color de marca que transmite calma y naturaleza, no tecnología agresiva.",
          actions: [
            "Paleta emerald: Verde #10B981 para calma y crecimiento (vs azul corporativo frío)",
            "Tipografía Inter: Altamente legible, tamaños generosos (base 16-18px)",
            "Diseño bento grid: Layout moderno pero organizado y claro",
            "Iconografía SVG consistente: íconos simples en emerald-500 con white fill",
            "Secciones claras: Cómo funciona → Por qué funciona → Quién buscamos → Qué obtienes",
            "Hero image: Pareja senior usando tablet = identificación inmediata",
            "Navegación fija: Logo grande, cambio de idioma visible"
          ]
        },
        {
          phase: "4. Implementar - Desarrollo en Next.js 16",
          description: "Desarrollo con Next.js 16, React 19, TypeScript y Tailwind CSS 3. Bilingüe desde el core con rutas /en y /es.",
          actions: [
            "Next.js 16 con App Router y generación estática para velocidad",
            "Sistema de routing bilingüe con params dinámicos: [lang]/",
            "Gestión de contenido centralizada en lib/content.ts para fácil traducción",
            "Componentes accesibles: ARIA labels, navegación por teclado, focus indicators",
            "Optimización de imágenes con Next/Image: hero image comprimida 97% (15MB → 428KB)",
            "Favicon personalizado: brain icon en SVG con variantes PNG",
            "Form validation: campos requeridos con mensajes claros en ambos idiomas",
            "Deploy en Vercel con auto-deploy desde GitHub"
          ]
        },
        {
          phase: "5. Iterar - Mejoras Basadas en Feedback del Cliente",
          description: "Iteración continua con el cliente para ajustar diseño, colores, imágenes y experiencia hasta lograr el look perfecto.",
          actions: [
            "Iteración 1: Cambio de tema sage green → emerald green (más vibrante y moderno)",
            "Iteración 2: Hero text más a la izquierda para mejor visibilidad de pareja en imagen",
            "Iteración 3: Overlay de hero más ligero (black/50-70 → black/30-50) para imagen más inviting",
            "Iteración 4: Números en 'Cómo Funciona' con emerald-500 background permanente (no solo hover)",
            "Iteración 5: Bordes más fuertes (border → border-2) para mejor definición visual",
            "Iteración 6: Reemplazo de emojis por íconos SVG consistentes (Heroicons set)",
            "Iteración 7: Fondos emerald-50 en secciones 3 y 5 para ritmo visual",
            "Iteración 8: Logo más grande en nav (h-12 → h-16) para mayor presencia",
            "Iteración 9: Fix z-index navegación (z-10 → z-50) para evitar overlap con hero text",
            "Iteración 10: Cambio de imagen hero por foto preferida del cliente (imageBerni1.jpg)"
          ]
        }
      ]
    },

    solution: {
      title: "La Solución",
      description: "Landing page bilingüe moderna con diseño bento grid, accesibilidad WCAG AA, sistema de contenido bilingüe, y experiencia optimizada para adultos mayores. Deploy automatizado en Vercel con optimización de performance.",
      features: [
        "Diseño moderno con bento grid layout (asimétrico, visualmente interesante)",
        "Accesibilidad WCAG AA: textos grandes (base 16-18px), alto contraste, focus indicators",
        "Bilingüe completo (inglés/español) con routing dedicado /en y /es",
        "Hero optimizado: imagen ligera (428KB), overlay ajustable, texto left-aligned",
        "Sección 'Cómo Funciona': números emerald con hover scale, bordes fuertes",
        "Bento grid 'Por Qué Funciona': cards de tamaños variados, gradient backgrounds",
        "Sección dark 'Qué Obtienes': contraste visual, íconos SVG consistentes",
        "Formulario con validación: campos nombre, email, teléfono, edad (55+), ubicación",
        "Sistema de íconos SVG unified: Heroicons con emerald-500 backgrounds",
        "Navegación fija con logo grande y language switcher visible",
        "Favicon personalizado: brain icon en SVG + PNG variants",
        "Deploy Vercel con auto-deploy desde GitHub main branch",
        "Performance optimizada: imágenes comprimidas, static generation, Tailwind purge"
      ]
    },

    results: {
      title: "Resultados",
      description: "Landing page profesional que transmite confianza académica, elimina barreras tecnológicas para seniors, y facilita el registro en el estudio piloto. Lista para producción con deploy automatizado.",
      metrics: [
        {
          label: "2",
          value: "Idiomas",
          description: "Alcance internacional con versiones completas en inglés y español"
        },
        {
          label: "WCAG AA",
          value: "Accesibilidad",
          description: "Diseño senior-friendly con textos grandes, alto contraste y navegación simple"
        },
        {
          label: "97%",
          value: "Optimización",
          description: "Hero image comprimida de 15MB → 428KB sin pérdida visual de calidad"
        },
        {
          label: "10",
          value: "Iteraciones",
          description: "Proceso colaborativo con cliente hasta lograr diseño perfecto"
        }
      ],
      testimonial: {
        quote: "Magda transformó mi visión en una landing page hermosa y funcional. El proceso iterativo fue perfecto - cada cambio mejoraba el diseño hasta que quedó exactamente como lo imaginaba. El sitio es moderno pero accesible para mi público objetivo de adultos mayores, y el sistema bilingüe funciona impecable. Estoy listo para reclutar participantes.",
        author: "Bernardo",
        role: "Investigador PhD"
      }
    }
  }
];

export function getCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}
