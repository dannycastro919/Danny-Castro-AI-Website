import { TranslationContent } from './types';

export const translations: Record<'en' | 'es', TranslationContent> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      speaker: 'Speaker',
      contact: 'Contact',
    },
    hero: {
      title: 'AI-Powered Customer Success & CX',
      subtitle: 'Danny Castro helps companies design, implement, and optimize AI solutions that drive real business outcomes and exceptional customer experiences.',
      cta: 'Book a Consultation',
      secondaryCta: 'View Services',
    },
    trustedBy: {
      title: 'Trusted by leaders at',
    },
    about: {
      title: 'About Danny',
      bio: [
        'Danny is a bilingual (Spanish) seasoned IT professional with experience working within small startups to large Fortune 500 companies such as IBM, Cisco and ServiceNow.',
        'Danny has moved from technical support, systems engineering, and network administration into project management and customer success leadership roles across SaaS, networking, education technology, healthcare tech, and AI companies.',
        'In AI-focused roles, he has documented AI use cases, designed conversational and generative AI solutions, helped prevent prompt injection, and analyzed bot performance data to improve outcomes for customers.',
      ],
      experience: 'Providing AI consultation, implementation and support for companies such as the National Basketball Association (NBA), COMPTIA, BOUQS and more.',
      community: 'Alongside his core roles, Danny has consistently contributed to tech communities as a volunteer and organizer, helping launch and support local chapters such as Latinas in Tech North Carolina and co-organizing AI Tinkerers events in Raleigh.',
    },
    services: {
      title: 'Services Offered',
      general: {
        title: 'General AI Consulting',
        items: [
          {
            title: 'AI & CX Automation',
            description: 'Streamlining customer experience through intelligent automation.',
            features: [
              'Review current process and provide suggestions on AI tooling',
              'Evaluate data for proper labeling, AI system ingestion and model training',
            ],
          },
          {
            title: 'Conversation Design',
            description: 'Crafting natural, effective AI interactions.',
            features: [
              'Provide a AI experience that matches the company\'s brand voice',
              'Design chat conversation flows and scripts',
              'Automate common questions and workflows',
              'Generate structured data on customer intents and pain points',
            ],
          },
          {
            title: 'AI Security Review',
            description: 'Ensuring your AI systems are safe and compliant.',
            features: [
              'Ensure the AI systems have tight access controls',
              'Reviewing logs and periodic reassessments of models',
            ],
          },
        ],
      },
      design: {
        title: 'AI Design Services',
        items: [
          {
            title: 'AI Discovery & Design',
            description: 'Finding the right AI opportunities for your business.',
            features: [
              'Perform diagnostics across CX processes, tooling, and data flows',
              'Use case discovery for Gen AI, chatbots, APIs and automation tied to support KPIs',
              'Creation of prioritized roadmap with near-term experiments and improvements',
            ],
          },
          {
            title: 'Implementation & Optimization',
            description: 'Bringing AI solutions to life and making them better.',
            features: [
              'Stand up or refine AI-powered support (chat / email bots, workflows)',
              'Conversation design, prompt strategy, and input sanitization',
              'Performance dashboards and review deflection, CSAT, and time-to-resolution',
              'Continuous tuning based on real customer behavior',
            ],
          },
          {
            title: 'AI Leadership & Support',
            description: 'Strategic guidance for your AI journey.',
            features: [
              'Consulting for AI CX initiatives, support and partner programs',
              'Coaching on AI, conversational designs, and customer success driven implementations',
            ],
          },
        ],
      },
    },
    speaker: {
      title: 'Conference Speaker',
      subtitle: 'Available for seminars, lightning talks, and conference presentations.',
      types: ['Seminars', 'Lightning Talks', 'Conference Presentations'],
      description: 'Danny is a community-oriented evangelist for AI and customer experience, frequently speaking at events like All Things AI and AI Tinkerers.',
    },
    contact: {
      title: 'Contact Danny',
      subtitle: 'Available for AI consultations on a per-project basis or on a retainer.',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        submit: 'Send Message',
        success: 'Thank you! Your inquiry has been sent successfully. Danny will get back to you soon.',
        services: {
          title: 'How can I help you?',
          speakCompany: 'I would like Danny to speak at my company',
          consultProject: 'I would like Danny to consult with me on a project',
          speakConference: 'I would like Danny to speak at my conference',
          presentWorkshop: 'I would like Danny to present a seminar or workshop',
          other: 'Other',
        },
      },
      info: {
        website: 'www.dannycastroai.com',
      },
    },
    footer: {
      rights: '© 2026 Danny Castro AI Consulting LLC. All rights reserved.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      services: 'Servicios',
      speaker: 'Conferencista',
      contact: 'Contacto',
    },
    hero: {
      title: 'Éxito del Cliente y CX Impulsados por IA',
      subtitle: 'Danny Castro ayuda a las empresas a diseñar, implementar y optimizar soluciones de IA que generan resultados comerciales reales y experiencias excepcionales.',
      cta: 'Reservar Consultoría',
      secondaryCta: 'Ver Servicios',
    },
    trustedBy: {
      title: 'Con la confianza de líderes en',
    },
    about: {
      title: 'Sobre Danny',
      bio: [
        'Danny es un profesional de TI experimentado y bilingüe (español) con experiencia trabajando en pequeñas empresas emergentes hasta grandes compañías de Fortune 500 como IBM, Cisco y ServiceNow.',
        'Danny ha pasado del soporte técnico, la ingeniería de sistemas y la administración de redes a roles de gestión de proyectos y liderazgo en el éxito del cliente en empresas de SaaS, redes, tecnología educativa, tecnología de la salud e IA.',
        'En roles enfocados en IA, ha documentado casos de uso de IA, diseñado soluciones de IA generativa y conversacional, ayudado a prevenir la inyección de prompts y analizado datos de rendimiento de bots para mejorar los resultados de los clientes.',
      ],
      experience: 'Brindando consultoría, implementación y soporte de IA para empresas como la Asociación Nacional de Baloncesto (NBA), COMPTIA, BOUQS y más.',
      community: 'Además de sus roles principales, Danny ha contribuido constantemente a las comunidades tecnológicas como voluntario y organizador, ayudando a lanzar y apoyar capítulos locales como Latinas in Tech North Carolina y co-organizando eventos de AI Tinkerers en Raleigh.',
    },
    services: {
      title: 'Servicios Ofrecidos',
      general: {
        title: 'Consultoría General de IA',
        items: [
          {
            title: 'Automatización de IA y CX',
            description: 'Optimización de la experiencia del cliente a través de la automatización inteligente.',
            features: [
              'Revisar el proceso actual y proporcionar sugerencias sobre herramientas de IA',
              'Evaluar datos para el etiquetado adecuado, la ingestión del sistema de IA y el entrenamiento del modelo',
            ],
          },
          {
            title: 'Diseño de Conversación',
            description: 'Creación de interacciones de IA naturales y efectivas.',
            features: [
              'Proporcionar una experiencia de IA que coincida con la voz de marca de la empresa',
              'Diseñar flujos y guiones de conversación de chat',
              'Automatizar preguntas y flujos de trabajo comunes',
              'Generar datos estructurados sobre las intenciones y los puntos de dolor de los clientes',
            ],
          },
          {
            title: 'Revisión de Seguridad de IA',
            description: 'Asegurando que sus sistemas de IA sean seguros y cumplan con las normas.',
            features: [
              'Asegurar que los sistemas de IA tengan controles de acceso estrictos',
              'Revisar registros y reevaluaciones periódicas de modelos',
            ],
          },
        ],
      },
      design: {
        title: 'Servicios de Diseño de IA',
        items: [
          {
            title: 'Descubrimiento y Diseño de IA',
            description: 'Encontrar las oportunidades de IA adecuadas para su negocio.',
            features: [
              'Realizar diagnósticos en los procesos de CX, herramientas y flujos de datos',
              'Descubrimiento de casos de uso para Gen AI, chatbots, APIs y automatización vinculada a los KPI de soporte',
              'Creación de una hoja de ruta priorizada con experimentos y mejoras a corto plazo',
            ],
          },
          {
            title: 'Implementación y Optimización',
            description: 'Dando vida a las soluciones de IA y mejorándolas.',
            features: [
              'Establecer o refinar el soporte impulsado por IA (chat / bots de correo electrónico, flujos de trabajo)',
              'Diseño de conversación, estrategia de prompts y sanitización de entradas',
              'Tableros de rendimiento y revisión de deflexión, CSAT y tiempo de resolución',
              'Ajuste continuo basado en el comportamiento real del cliente',
            ],
          },
          {
            title: 'Liderazgo y Soporte de IA',
            description: 'Guía estratégica para su viaje de IA.',
            features: [
              'Consultoría para iniciativas de IA CX, programas de soporte y socios',
              'Coaching en IA, diseños conversacionales e implementaciones impulsadas por el éxito del cliente',
            ],
          },
        ],
      },
    },
    speaker: {
      title: 'Conferencista',
      subtitle: 'Disponible para seminarios, charlas relámpago y presentaciones en conferencias.',
      types: ['Seminarios', 'Charlas Relámpago', 'Presentaciones en Conferencias'],
      description: 'Danny es un evangelista orientado a la comunidad para la IA y la experiencia del cliente, hablando frecuentemente en eventos como All Things AI y AI Tinkerers.',
    },
    contact: {
      title: 'Contactar a Danny',
      subtitle: 'Disponible para consultas de IA por proyecto o bajo contrato.',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        message: 'Mensaje',
        submit: 'Enviar Mensaje',
        success: '¡Gracias! Su consulta ha sido enviada con éxito. Danny se pondrá en contacto con usted pronto.',
        services: {
          title: '¿Cómo puedo ayudarte?',
          speakCompany: 'Me gustaría que Danny hablara en mi empresa',
          consultProject: 'Me gustaría que Danny me consultara sobre un proyecto',
          speakConference: 'Me gustaría que Danny hablara en mi conferencia',
          presentWorkshop: 'Me gustaría que Danny presentara un seminario o taller',
          other: 'Otro',
        },
      },
      info: {
        website: 'www.dannycastroai.com',
      },
    },
    footer: {
      rights: '© 2026 Danny Castro AI Consulting LLC. Todos los derechos reservados.',
    },
  },
};
