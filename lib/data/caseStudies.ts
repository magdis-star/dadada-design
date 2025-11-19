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
    slug: "bernardo-consultoria-digital",
    title: "Bernardo - Consultoría Digital & Estrategia",
    client: "Bernardo",
    industry: "Consultoría Digital",
    year: "2024",
    url: "https://bernardo-website-7swaal4qm-magdas-projects-91e7b011.vercel.app",
    thumbnail: "/images/projects/bernardo-website.jpg",
    excerpt: "Creación de marca personal profesional para un PhD en Lingüística que ofrece consultoría digital en e-learning y estrategia de contenido.",

    challenge: {
      title: "El Desafío",
      description: "Bernardo, PhD en Lingüística con certificaciones DELTA/CELTA y experiencia en educación digital, necesitaba un sitio web que comunicara su propuesta de valor única: estrategia digital basada en ciencia lingüística, no en tendencias pasajeras. El reto era diferenciarlo en un mercado saturado de consultores genéricos.",
      goals: [
        "Posicionar su expertise único: lingüística aplicada a estrategia digital",
        "Transmitir autoridad académica sin parecer distante o teórico",
        "Atraer clientes específicos: educadores, empresas globales, consultores",
        "Comunicar con voz innovadora y audaz que rompa con lo corporativo",
        "Generar confianza mediante credenciales y resultados específicos"
      ]
    },

    process: {
      title: "Proceso de Design Thinking",
      steps: [
        {
          phase: "1. Empatizar - Entender al Usuario",
          description: "Analicé el perfil único de Bernardo y las frustraciones de su audiencia objetivo con estrategias digitales genéricas.",
          actions: [
            "Entrevistas para entender su background académico y diferenciadores",
            "Investigación de competidores: consultores digitales genéricos vs. especializados",
            "Identificación de pain points: bajas tasas de finalización, mensajes confusos, invisibilidad online",
            "Definición de audiencia: educadores, empresas globales, thought leaders"
          ]
        },
        {
          phase: "2. Definir - Clarificar el Problema",
          description: "El sitio debía ser una declaración de principios: 'estrategia basada en ciencia, no en adivinanzas'.",
          actions: [
            "Objetivo principal: Diferenciarse con voz innovadora y audaz",
            "Mensaje clave: 'Tu expertise merece mejor que estrategias genéricas'",
            "Tono de marca: Directo, confrontacional, respaldado por ciencia",
            "Llamada a acción: Estrategia gratuita de 30 minutos, sin fluff"
          ]
        },
        {
          phase: "3. Idear y Prototipar - Diseñar la Solución",
          description: "Diseñé una identidad visual premium (Navy & Gold) con copywriting que desafía convencionalismos.",
          actions: [
            "Paleta Navy & Gold: Autoridad académica + innovación premium",
            "Sin gradientes: Diseño limpio, profesional, sin efectos innecesarios",
            "Tipografía Inter: Moderna, bold, legible",
            "Estructura: Hero confrontacional + servicios problema-solución",
            "Foto profesional grande (420x500px) con borde gold para humanizar",
            "Scroll animations suaves sin distraer del mensaje"
          ]
        },
        {
          phase: "4. Implementar y Mejorar",
          description: "Desarrollo con HTML estático y Tailwind CSS vía CDN, optimizado para carga rápida y despliegue sencillo.",
          actions: [
            "HTML estático con Tailwind CSS (sin build process)",
            "AOS library para animaciones suaves de scroll",
            "Lucide Icons para iconografía consistente",
            "Copywriting: Problema-solución en cada servicio",
            "Testimoniales con métricas específicas (32% → 67%)",
            "Deploy en Vercel con auto-deploy desde GitHub"
          ]
        }
      ]
    },

    solution: {
      title: "La Solución",
      description: "Desarrollé una web de personal branding con diseño premium Navy & Gold y copywriting audaz que posiciona a Bernardo como el consultor que usa ciencia, no tendencias.",
      features: [
        "Diseño Navy & Gold profesional que transmite autoridad + innovación",
        "Copywriting problema-solución en cada servicio",
        "Hero confrontacional: 'Tu expertise merece mejor que estrategias genéricas'",
        "Badges de certificaciones visibles (PhD, DELTA, CELTA, Google, HubSpot)",
        "Foto profesional destacada (420x500px) para conexión humana",
        "Testimoniales con métricas específicas que demuestran ROI",
        "CTA directo: Llamada estratégica gratuita de 30 min sin fluff",
        "Deploy rápido en Vercel con dominio personalizable"
      ]
    },

    results: {
      title: "Resultados",
      description: "El sitio logró posicionar a Bernardo como un consultor único en su nicho, diferenciándose de competidores genéricos con una voz audaz respaldada por credenciales académicas.",
      metrics: [
        {
          label: "100%",
          value: "Diferenciación",
          description: "Voz única e innovadora que destaca en mercado saturado de consultores"
        },
        {
          label: "Navy & Gold",
          value: "Identidad Premium",
          description: "Diseño que comunica autoridad académica + innovación"
        },
        {
          label: "3",
          value: "Servicios Clave",
          description: "E-learning, Content Clarity, Online Authority - cada uno con problema-solución"
        }
      ],
      testimonial: {
        quote: "Magda capturó perfectamente mi visión: quería un sitio que dijera 'soy diferente' sin ser arrogante. El diseño navy & gold es elegante, y el copywriting es exactamente mi voz: directo, honesto, respaldado por ciencia.",
        author: "Bernardo",
        role: "PhD Linguistics & Digital Strategy Consultant"
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
  }
];

export function getCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(study => study.slug === slug);
}
