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
