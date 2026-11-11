export type FormatId = 'bundle' | 'hardcover' | 'ebook' | 'audiobook';

export interface BookFormat {
  id: FormatId;
  name: string;
  shortLabel: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  delivery: string;
  perks: string[];
  popular?: boolean;
}

export interface ChapterItem {
  number: number;
  title: string;
  pages: string;
  readTime: string;
  summary: string;
  keyTakeaway: string;
  isPreviewable?: boolean;
}

export interface BookPart {
  partNumber: string;
  title: string;
  subtitle: string;
  chapters: ChapterItem[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  category: 'Fundadores y Directivos' | 'Ingenieros y Creadores' | 'Creativos y Escritores';
  rating: number;
  highlight: string;
  quote: string;
  avatarInitials: string;
  verifiedFormat: string;
}

export interface BonusItem {
  id: string;
  title: string;
  formatTag: string;
  value: string;
  description: string;
  bullets: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const BOOK_META = {
  title: 'CADENCIA PROFUNDA',
  subtitle: 'El Arte del Enfoque de Alto Impacto en un Mundo Distraído',
  hook: 'un sistema operativo práctico para recuperar tu atención, completar tu trabajo más importante en bloques de 90 minutos y terminar cada día a las 5:00 PM con cero residuo mental.',
  author: {
    name: 'Ismael Campos Rodríguez',
    credentials: 'Científica del Comportamiento y Coach de Alto Rendimiento Ejecutivo',
    shortBio:
      'Exdirectora del Laboratorio de Sistemas Cognitivos en Zúrich y asesora de más de 60 equipos de ingeniería y diseño de alto crecimiento.',
    fullBio: [
      'Durante los últimos doce años, Ismael Campos Rodríguez ha investigado una pregunta aparentemente sencilla: ¿por qué algunos líderes, ingenieros y creadores producen el trabajo que define sus carreras en cuatro horas de enfoque al día, mientras otros se agotan trabajando doce?',
      'Tras dirigir estudios longitudinales con más de 4,200 profesionales del conocimiento en Zúrich, San Francisco y Tokio, descubrió que el rendimiento de élite nunca es producto de la fuerza bruta ni de rígidas rutinas a las 5:00 AM. Surge de diseñar un ritmo repetible —una Cadencia Profunda— que alinea los picos biológicos de atención con los problemas de mayor impacto.',
      'Su trabajo ha sido publicado en Harvard Business Review, Wired y The Atlantic, y su boletín semanal sobre rendimiento intencional es leído por más de 210,000 profesionales en todo el mundo.',
    ],
    authorNote:
      '"No escribí Cadencia Profunda para ayudarte a exprimir tres tareas más en un martes ya asfixiante. Lo escribí para que dejes de confundir movimiento con progreso, protejas las dos horas al día que realmente transforman tu carrera y cierres tu portátil con la mente en calma."',
    stats: [
      { value: '180,000+', label: 'Ejemplares Vendidos' },
      { value: '4.9 / 5.0', label: 'Valoración Media (2,410+ Reseñas)' },
      { value: '14 Idiomas', label: 'Traducciones Internacionales' },
      { value: '312 Páginas', label: 'Cero Relleno • Diagramas Táctiles' },
    ],
  },
};

export const FORMAT_OPTIONS: BookFormat[] = [
  {
    id: 'bundle',
    name: 'El Paquete Maestría Completa',
    shortLabel: 'Paquete Maestría',
    tagline: 'Tapa Dura + eBook + Audiolibro Íntegro + Sistema Completo en Notion',
    price: 39,
    originalPrice: 68,
    badge: 'Más Popular • Ahorra 42%',
    delivery: 'Acceso Digital Inmediato + Envío Prioritario Gratis',
    popular: true,
    perks: [
      'Edición Coleccionista en Tapa Dura cosida en hilo (Con ex libris firmado)',
      'Descarga inmediata en formatos EPUB, PDF y Kindle',
      'Audiolibro íntegro de 7.5 horas (Narrado por Ismael Campos Rodríguez)',
      'Bono: Sistema Operativo Cadencia Profunda para Notion y Obsidian (Valorado en $29)',
      'Bono: 4 Paisajes Sonoros Binaurales de 90 Minutos para Enfoque Profundo',
    ],
  },
  {
    id: 'hardcover',
    name: 'Edición Coleccionista en Tapa Dura',
    shortLabel: 'Tapa Dura',
    tagline: 'Papel crema de 120 g/m², encuadernación de apertura plana y estampado en cobre',
    price: 29,
    originalPrice: 34,
    badge: 'Incluye eBook Gratis',
    delivery: 'Envío en 24 horas • Entrega Gratis en EE. UU., LATAM y Europa',
    perks: [
      'Encuadernación cosida Smyth que permanece totalmente abierta sobre tu escritorio',
      '38 diagramas arquitectónicos y hojas de trabajo a todo color',
      'Cinta marcapáginas tejida en tono bermellón',
      'Descarga instantánea en PDF y EPUB mientras llega tu ejemplar físico',
      'Bono: Plantilla Imprimible de Planificación Semanal (PDF)',
    ],
  },
  {
    id: 'ebook',
    name: 'Edición Digital para Lectores',
    shortLabel: 'eBook (EPUB/PDF)',
    tagline: 'Archivos sin DRM optimizados para Kindle, Apple Books, Kobo y iPad',
    price: 19,
    delivery: 'Descarga Inmediata tras Completar tu Pedido',
    perks: [
      'PDF interactivo de alta resolución + EPUB adaptable',
      'Envío directo a Kindle en 1 clic incluido',
      'Ejercicios con hipervínculos e índice de referencia rápida',
      'Bono: Plantilla Imprimible de Planificación Semanal (PDF)',
    ],
  },
  {
    id: 'audiobook',
    name: 'Audiolibro Íntegro + Cuaderno Visual PDF',
    shortLabel: 'Audiolibro',
    tagline: '7 horas y 34 minutos • Grabado en estudio por la autora + guía visual',
    price: 22,
    delivery: 'Escucha en App al Instante + Descarga MP3/M4B',
    perks: [
      'Compatible con Apple Podcasts, Spotify, Pocket Casts o cualquier reproductor',
      'Incluye pistas de resumen en audio por capítulo (25 min en total)',
      'Cuaderno complementario descargable de 44 páginas con todos los diagramas',
    ],
  },
];

export const PRESS_ENDORSEMENTS = [
  {
    publication: 'HARVARD BUSINESS REVIEW',
    quote: 'El raro libro de productividad que trata la atención humana como un ecosistema vivo y no como una máquina que debe ser explotada.',
  },
  {
    publication: 'WIRED',
    quote: 'Agudo, respaldado por datos empíricos y aplicable desde el primer día. Solo el Capítulo 3 ahorrará diez horas semanales a la mayoría de los equipos.',
  },
  {
    publication: 'FAST COMPANY',
    quote: 'Un antídoto imprescindible contra el agotamiento performativo. Vance reemplaza la cultura del ajetreo por claridad arquitectónica.',
  },
  {
    publication: 'FINANCIAL TIMES',
    quote: 'Una clase magistral sobre apalancamiento cognitivo. Todo fundador y director creativo debería tener un ejemplar sobre su mesa.',
  },
];

export const PILLAR_COMPARISON = {
  reactive: {
    title: 'La Trampa del Ajetreo Reactivo',
    subtitle: 'Cómo el 92% de los profesionales estructuran su semana por accidente',
    items: [
      'Empezar la mañana dentro de Slack y el correo, dejando que las urgencias ajenas secuestren tus horas de mayor lucidez.',
      'Cambiar de contexto cada 6 minutos, dejando hasta el 40% de tu memoria de trabajo atrapada en pestañas anteriores ("Residuo de Atención").',
      'Medir el día por horas conectado y mensajes respondidos en lugar de hitos reales e irreversibles entregados.',
      'Cerrar sesión a las 7:30 PM exhausto, pero con la incómoda sensación de que nada verdaderamente importante avanzó.',
    ],
  },
  cadence: {
    title: 'El Sistema de Cadencia Profunda',
    subtitle: 'El ritmo operativo de cuatro piezas que construirás dentro de este libro',
    items: [
      'Proteger un único "Bloque Piedra Angular" de 90 minutos cada mañana antes de abrir cualquier canal de comunicación digital.',
      'Agrupar la coordinación superficial en "Ventanas de Sincronización" breves y predecibles para mantener sagrado el trabajo profundo.',
      'Diseñar rituales de cierre sin fricción que liberan la memoria RAM mental y devuelven la creatividad a tus tardes.',
      'Operar en ciclos estacionales de 6 semanas seguidos de pausas deliberadas de recuperación en lugar de vivir al límite todo el año.',
    ],
  },
};

export const CORE_PILLARS = [
  {
    tag: 'PILAR 01',
    metric: '3.4× Velocidad de Entrega',
    title: 'Bloques Cronobiológicos',
    description:
      'Deja de luchar contra tu sistema nervioso. Aprende el diagnóstico de 4 días para mapear tu pico ultradiano natural y blindar un sprint diario de creación de 90 minutos.',
  },
  {
    tag: 'PILAR 02',
    metric: '-68% Cambio de Contexto',
    title: 'Transiciones de Cero Residuo',
    description:
      'Cada tarea inconclusa drena tu capacidad intelectual. Domina el "Protocolo de Captura de Estado" para pausar problemas complejos en 90 segundos y retomarlos mañana a máxima velocidad.',
  },
  {
    tag: 'PILAR 03',
    metric: '11.5 Horas Recuperadas / Sem',
    title: 'Diseño de Límites Asíncronos',
    description:
      'Guiones palabra por palabra y acuerdos de equipo para sustituir reuniones de seguimiento e interrupciones constantes en Slack por documentos asíncronos claros y serenos.',
  },
  {
    tag: 'PILAR 04',
    metric: '100% Desconexión Nocturna',
    title: 'La Esclusa Cognitiva de las 4:45 PM',
    description:
      'Un ritual de cierre de 15 minutos al final de la jornada que le demuestra a tu amígdala que el día laboral ha terminado de verdad, eliminando el insomnio y la ansiedad del domingo.',
  },
];

export const TABLE_OF_CONTENTS: BookPart[] = [
  {
    partNumber: 'REGLA I',
    title: 'ENFOQUE GLOBAL Y MENTE',
    subtitle: 'Por qué la fuerza de voluntad fracasa frente a los entornos digitales modernos y cómo rediseñar tus ajustes por defecto.',
    chapters: [
      {
        number: 1,
        title: 'El Mito de la Jornada de 10 Horas',
        pages: 'págs. 11–34',
        readTime: '18 min de lectura',
        summary:
          'Analiza cómo los horarios fabriles de la era industrial se copiaron y pegaron en el trabajo intelectual, y revela por qué la corteza prefrontal humana alcanza su límite tras unas 4 horas diarias de síntesis profunda.',
        keyTakeaway: 'Diagnóstico: Calcula tu verdadero "Ratio de Profundidad vs. Superficialidad" en menos de 5 minutos.',
        isPreviewable: true,
      },
      {
        number: 2,
        title: 'El Residuo de Atención y el Impuesto Oculto de "Mirar un Segundo"',
        pages: 'págs. 35–58',
        readTime: '22 min de lectura',
        summary:
          'La neurociencia detrás de por qué un vistazo de 30 segundos a tu bandeja de entrada fractura la resolución de problemas complejos durante los siguientes 23 minutos.',
        keyTakeaway: 'Marco Práctico: El Cortafuegos de Notificaciones en 3 Niveles para ordenador y móvil.',
      },
      {
        number: 3,
        title: 'Mapeando tu Ritmo Ultradiano',
        pages: 'págs. 59–82',
        readTime: '20 min de lectura',
        summary:
          'No todo el mundo es alondra o búho. Descubre los cuatro cronotipos cognitivos y cómo alinear el trabajo analítico, creativo y administrativo con tu curva natural de energía.',
        keyTakeaway: 'Hoja de Trabajo: La Matriz de Auditoría de Energía y Enfoque de 7 Días.',
      },
    ],
  },
  {
    partNumber: 'REGLA II',
    title: 'PLAN DE HOYO',
    subtitle: 'Cómo construir un ciclo repetible de 24 horas para avanzar sin fricción.',
    chapters: [
      {
        number: 4,
        title: 'El Bloque Piedra Angular: Ganar el Día Antes de las 10:30 AM',
        pages: 'págs. 85–112',
        readTime: '25 min de lectura',
        summary:
          'Cómo estructurar una sesión monotarea de 90 minutos con disparadores de entrada claros, señales ambientales y una definición concreta de "terminado".',
        keyTakeaway: 'Ritual: La Lista de Pre-Vuelo de 3 Minutos para el enfoque profundo.',
      },
      {
        number: 5,
        title: 'Domando el Río Superficial (Correo, Slack y Reuniones)',
        pages: 'págs. 113–140',
        readTime: '24 min de lectura',
        summary:
          'Cómo comprimir la carga administrativa en dos "Ventanas de Sincronización" de 30 minutos sin desatender compromisos ni frustrar a tus compañeros.',
        keyTakeaway: 'Guía: 7 plantillas listas para copiar y rechazar reuniones de bajo valor con elegancia.',
      },
      {
        number: 6,
        title: 'La Esclusa Cognitiva: Cerrar el Día con Limpieza',
        pages: 'págs. 141–164',
        readTime: '19 min de lectura',
        summary:
          'Por qué los bucles abiertos sabotean tu descanso nocturno y cómo el "Estacionamiento de Tareas Abiertas" permite que tu subconsciente descanse de verdad.',
        keyTakeaway: 'Plantilla: El Registro de Cierre de las 4:45 PM y el Primer Paso de Mañana.',
      },
    ],
  },
  {
    partNumber: 'REGLA III',
    title: 'DESDE EL TEE',
    subtitle: 'Elegir los problemas correctos y entregar resultados sin caer en el perfeccionismo.',
    chapters: [
      {
        number: 7,
        title: 'La Pregunta de los $10,000/Hora: Eliminar el Trabajo Falso',
        pages: 'págs. 167–194',
        readTime: '23 min de lectura',
        summary:
          'Por qué los profesionales brillantes postergan sus proyectos más importantes inventando tareas que "se sienten productivas", y cómo detectarlas al instante.',
        keyTakeaway: 'Matriz: La Cuadrícula de Eliminación por Impacto vs. Urgencia.',
      },
      {
        number: 8,
        title: 'Primeros Borradores Imperfectos y la Física del Impulso',
        pages: 'págs. 195–218',
        readTime: '20 min de lectura',
        summary:
          'Cómo superar la parálisis inicial ante proyectos intimidantes reduciendo la energía de activación necesaria para empezar.',
        keyTakeaway: 'Técnica: La regla del "Prototipo sin Riesgo" de 12 minutos.',
      },
      {
        number: 9,
        title: 'Trabajo Profundo Colaborativo para Equipos',
        pages: 'págs. 219–246',
        readTime: '26 min de lectura',
        summary:
          'Cómo los equipos de ingeniería, producto y diseño implementan "Mañanas Silenciosas" compartidas y memorandos de decisión asíncronos.',
        keyTakeaway: 'Plano: La Carta de Acuerdos de Comunicación de Equipo en 1 Página.',
      },
    ],
  },
  {
    partNumber: 'REGLA IV',
    title: 'APROXIMACIÓN',
    subtitle: 'Cómo dosificar tu ambición a lo largo de trimestres, años y décadas.',
    chapters: [
      {
        number: 10,
        title: 'El Reinicio del Viernes y la Calibración Semanal',
        pages: 'págs. 249–270',
        readTime: '18 min de lectura',
        summary:
          'Un ritual paso a paso de 30 minutos para los viernes por la tarde que transforma semanas caóticas en aprendizajes acumulativos.',
        keyTakeaway: 'Checklist: La Retrospectiva de 5 Preguntas del Viernes.',
      },
      {
        number: 11,
        title: 'Sprints de 6 Semanas y Descompresión Deliberada',
        pages: 'págs. 271–292',
        readTime: '21 min de lectura',
        summary:
          'Reemplaza las metas anuales rígidas por ciclos de construcción de 6 semanas seguidos de 1 semana dedicada al mantenimiento y la curiosidad.',
        keyTakeaway: 'Planificador: La Arquitectura de Sprints Estacionales.',
      },
      {
        number: 12,
        title: 'Una Vida Medida en Profundidad, No en Velocidad',
        pages: 'págs. 293–312',
        readTime: '17 min de lectura',
        summary:
          'Una reflexión final sobre el oficio, la presencia y por qué recuperar tu atención es el acto supremo de libertad creativa.',
        keyTakeaway: 'Manifiesto: Los 10 Principios de una Vida en Cadencia Profunda.',
      },
    ],
  },
  {
    partNumber: 'REGLA V',
    title: 'EN EL GREEN',
    subtitle: 'Cómo dosificar tu ambición a lo largo de trimestres, años y décadas.',
    chapters: [
      {
        number: 10,
        title: 'El Reinicio del Viernes y la Calibración Semanal',
        pages: 'págs. 249–270',
        readTime: '18 min de lectura',
        summary:
          'Un ritual paso a paso de 30 minutos para los viernes por la tarde que transforma semanas caóticas en aprendizajes acumulativos.',
        keyTakeaway: 'Checklist: La Retrospectiva de 5 Preguntas del Viernes.',
      },
      {
        number: 11,
        title: 'Sprints de 6 Semanas y Descompresión Deliberada',
        pages: 'págs. 271–292',
        readTime: '21 min de lectura',
        summary:
          'Reemplaza las metas anuales rígidas por ciclos de construcción de 6 semanas seguidos de 1 semana dedicada al mantenimiento y la curiosidad.',
        keyTakeaway: 'Planificador: La Arquitectura de Sprints Estacionales.',
      },
      {
        number: 12,
        title: 'Una Vida Medida en Profundidad, No en Velocidad',
        pages: 'págs. 293–312',
        readTime: '17 min de lectura',
        summary:
          'Una reflexión final sobre el oficio, la presencia y por qué recuperar tu atención es el acto supremo de libertad creativa.',
        keyTakeaway: 'Manifiesto: Los 10 Principios de una Vida en Cadencia Profunda.',
      },
    ],
  },
];

export const CHAPTER_ONE_EXCERPT = {
  chapterNumber: 'REGLA 01',
  title: 'El Mito de la Jornada de 10 Horas',
  epigraph:
    '«El mayor obstáculo para el trabajo significativo no es la pereza; es el agotador teatro de parecer siempre disponible.»',
  pages: [
    {
      pageNumber: 11,
      heading: 'Los Fantasmas de Mánchester',
      paragraphs: [
        'A las 8:47 de la mañana de un martes lluvioso en Zúrich, observé cómo un arquitecto de software sénior llamado Marcus abría su portátil, daba un sorbo a su espresso y perdía toda su mañana en apenas cuatro minutos.',
        'No ocurrió ninguna catástrofe. No hubo caída de servidores ni reunión de emergencia con la junta directiva. Marcus simplemente hizo lo que millones de profesionales ambiciosos hacen cada mañana: revisó tres canales de Slack, respondió dos "preguntas rápidas", aceptó una invitación de calendario y echó un vistazo a un boletín del sector.',
        'Para las 8:51 AM, cuando por fin abrió el documento de arquitectura principal que se había prometido terminar esa semana, ya se había producido un cambio fisiológico sutil. Su variabilidad de la frecuencia cardíaca había descendido. Tres hilos de conversación inconclusos giraban silenciosamente en su corteza prefrontal dorsolateral como pestañas del navegador en segundo plano consumiendo memoria del sistema.',
        'Marcus permaneció frente a su escritorio hasta las 6:45 de la tarde. Cuando le pregunté camino al tranvía cuánto había avanzado en la especificación de arquitectura, se frotó las sienes y me dedicó una sonrisa de cansado reconocimiento: «¿Sinceramente? Quizá cuarenta y cinco minutos de pensamiento real. El resto del día simplemente… se evaporó».',
      ],
    },
    {
      pageNumber: 12,
      heading: 'Por Qué tu Cerebro No Es un Telar Industrial',
      paragraphs: [
        'Vivimos en la edad de oro de las herramientas cognitivas, pero seguimos programando nuestras mentes con una plantilla inventada para las fábricas textiles de vapor del siglo XIX. En un telar industrial, la producción es lineal: si una hora produce diez metros de algodón, diez horas producen cien metros.',
        'El trabajo del conocimiento obedece a una física radicalmente distinta. El rendimiento cognitivo de alto impacto —ya sea depurar un sistema distribuido, redactar una estrategia, diseñar una interfaz o escribir un capítulo— es exponencial y frágil. Un único bloque ininterrumpido de noventa minutos de síntesis profunda produce sistemáticamente más valor transformador que ocho horas fragmentadas de retoques a media atención.',
        'En el estudio de nuestro laboratorio con 4,200 profesionales del conocimiento de catorce industrias, registramos no cuánto tiempo pasaban frente a pantallas brillantes, sino en qué momento ocurrían realmente sus decisiones y creaciones de mayor impacto. Los resultados fueron sorprendentemente consistentes:',
      ],
      callout: {
        title: 'HALLAZGO DE CAMPO #1: EL TECHO DE LAS 3.8 HORAS',
        body: 'Entre el 10% de los profesionales con mayor rendimiento —fundadores, ingenieros principales, autores superventas e investigadores científicos—, la síntesis de alta concentración promedió apenas 3.8 horas al día. Más allá de ese umbral, la tasa de errores se duplicó y la originalidad creativa cayó un 64%.',
      },
    },
    {
      pageNumber: 13,
      heading: 'Las Dos Monedas del Trabajo Moderno',
      paragraphs: [
        'Si los profesionales de élite solo dedican unas cuatro horas diarias al enfoque profundo, ¿por qué tantas personas brillantes y motivadas se sienten atrapadas en maratones de diez horas? Porque los entornos laborales modernos confunden dos modos de trabajo fundamentalmente incompatibles:',
        '1. Disponibilidad Visible (Velocidad Superficial): Responder mensajes en noventa segundos, asistir a cada reunión opcional y mantener el punto verde siempre activo. Resulta cómodo a corto plazo porque transmite sensación de diligencia ante los demás.',
        '2. Creación Compuesta (Cadencia Profunda): Desconectarse temporalmente para resolver problemas difíciles y ambiguos que no ofrecen dopamina inmediata, pero que definen el rumbo de tu carrera y la supervivencia de tu organización.',
        'Esta es la verdad incómoda: nadie es ascendido, recordado ni realizado por haber tenido el tiempo de respuesta más rápido en Slack durante el tercer trimestre. Sin embargo, a menos que diseñes deliberadamente una frontera entre ambos modos, la Velocidad Superficial canibalizará la Creación Compuesta todos los días de tu vida.',
        'En las próximas páginas no te pediremos que te levantes a las 4:30 de la mañana ni que tires tu teléfono. En su lugar, instalaremos un sistema operativo ligero, empezando mañana mismo con tu primer Bloque Piedra Angular de 90 minutos.',
      ],
    },
  ],
};

export const BONUS_TOOLKIT: BonusItem[] = [
  {
    id: 'notion-os',
    title: 'El Espacio de Trabajo Digital Cadencia Profunda',
    formatTag: 'Notion + Obsidian + PDF Imprimible',
    value: 'Valorado en $29 • Incluido Gratis',
    description:
      'Olvídate de configurar páginas en blanco. Duplica en un solo clic el planificador semanal exacto de Elena, el registro de Bloques Piedra Angular y el panel de Reinicio del Viernes.',
    bullets: [
      'Hoja interactiva de Diagnóstico de Energía y Cronotipo de 7 días',
      'Plantilla diaria de Bloque Piedra Angular y Estacionamiento de Bucles Abiertos',
      'Seguimiento de Sprints Estacionales de 6 semanas con barras de progreso automáticas',
    ],
  },
  {
    id: 'audio-soundscapes',
    title: '4 Paisajes Sonoros Acústicos de Enfoque (Pistas de 90 Min)',
    formatTag: 'MP3 Sin Pérdida / Escucha en Cualquier Dispositivo',
    value: 'Valorado en $19 • Incluido Gratis',
    description:
      'Diseñados en colaboración con neurocientíficos acústicos en Zúrich para inducir una rápida activación prefrontal y aislar el ruido de oficina.',
    bullets: [
      'Pista 01: Lluvia de Zúrich y Cinta Analógica Cálida (Enfoque Analítico)',
      'Pista 02: Pulso Gamma 40Hz Minimalista (Depuración y Código Profundo)',
      'Pista 03: Horizonte Acústico del Alba Alpina (Escritura y Estrategia)',
    ],
  },
  {
    id: 'async-scripts',
    title: 'La Bóveda de Guiones de Límites Asíncronos',
    formatTag: 'Archivo de Plantillas y Manual de Equipo',
    value: 'Valorado en $15 • Incluido Gratis',
    description:
      '22 guiones palabra por palabra para correo y Slack con los que proteger tu calendario, declinar reuniones de bajo impacto y alinear expectativas con jefes o clientes.',
    bullets: [
      'Cómo proponer un piloto de "Mañanas sin Reuniones" a tu directivo',
      'Respuestas amables pero firmes ante interrupciones de "¿Tienes 15 minutos?"',
      'Carta de Acuerdos de Comunicación de Equipo en 1 página lista para compartir',
    ],
  },
];

export const READER_REVIEWS: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Marcus Chen',
    role: 'Vicepresidente de Ingeniería',
    company: 'LinearScale',
    category: 'Fundadores y Directivos',
    rating: 5,
    highlight: 'Redujimos las reuniones internas un 42% en solo tres semanas.',
    quote:
      'Compré 35 ejemplares para todo nuestro equipo de liderazgo de ingeniería. Implementamos el "Acuerdo de Mañanas Silenciosas" del Capítulo 9 y la Esclusa Cognitiva de las 4:45 PM. Nuestra velocidad de entrega se disparó en dos sprints y el agotamiento cayó a su mínimo histórico.',
    avatarInitials: 'MC',
    verifiedFormat: 'Comprador del Paquete Maestría',
  },
  {
    id: 'r2',
    name: 'Soraia Lindqvist',
    role: 'Diseñadora Principal de Producto',
    company: 'Atelier Studio (Estocolmo)',
    category: 'Creativos y Escritores',
    rating: 5,
    highlight: 'Por fin un libro de productividad que no trata a los humanos como robots.',
    quote:
      'La mayoría de los libros de productividad me generan ansiedad y culpa. Cadencia Profunda se sintió como respirar hondo. Aprender a sincronizar mi trabajo de diseño con mi pico ultradiano matutino —y dejar las tareas administrativas para las 3:00 PM sin remordimientos— transformó mi relación con mi oficio.',
    avatarInitials: 'SL',
    verifiedFormat: 'Tapa Dura de Coleccionista',
  },
  {
    id: 'r3',
    name: 'Devon K.',
    role: 'Ingeniero Principal de Sistemas',
    company: 'Ex-Cloudflare',
    category: 'Ingenieros y Creadores',
    rating: 5,
    highlight: 'El "Protocolo de Captura de Estado" del Capítulo 2 vale oro puro.',
    quote:
      'Como ingeniero principal alternando entre incidentes y documentos de arquitectura, el cambio de contexto estaba destruyendo mi semana. El hábito de 90 segundos de Captura de Estado me ahorra al menos seis horas semanales de intentar recordar por dónde iba.',
    avatarInitials: 'DK',
    verifiedFormat: 'Comprador del Paquete Maestría',
  },
  {
    id: 'r4',
    name: 'Hannah Al-Mansoor',
    role: 'Fundadora y CEO',
    company: 'Veridian Bio',
    category: 'Fundadores y Directivos',
    rating: 5,
    highlight: 'Terminé la presentación de nuestra Serie B en cuatro mañanas sin trabajar un solo fin de semana.',
    quote:
      'Antes de leer este libro, confundía el compromiso como fundadora con trabajar 70 horas por semana. El sistema de Elena me demostró que 90 minutos de pensamiento estratégico blindado antes de abrir el correo superan a un día entero apagando fuegos.',
    avatarInitials: 'HA',
    verifiedFormat: 'Tapa Dura de Coleccionista',
  },
  {
    id: 'r5',
    name: 'Lucas Meyer',
    role: 'Autor Independiente y Podcaster',
    company: 'The Craft Dispatch',
    category: 'Creativos y Escritores',
    rating: 5,
    highlight: 'La edición física en tapa dura es una obra de arte sobre mi escritorio.',
    quote:
      'No solo la prosa es impecable; el objeto físico en sí —el papel crema, la apertura plana y los diagramas a dos tintas— hace que quieras abrirlo cada mañana. Además, la plantilla de Notion incluida me tomó solo diez minutos en configurar.',
    avatarInitials: 'LM',
    verifiedFormat: 'Comprador del Paquete Maestría',
  },
  {
    id: 'r6',
    name: 'Priya Nair',
    role: 'Investigadora Sénior en Inteligencia Artificial',
    company: 'ETH AI Lab',
    category: 'Ingenieros y Creadores',
    rating: 5,
    highlight: 'Rigor empírico absoluto y cero relleno.',
    quote:
      'Se nota de inmediato que Ismael Campos Rodríguez es una científica del comportamiento real. Cada protocolo está respaldado por investigaciones sobre carga cognitiva y no por clichés motivacionales. El ritual de Reinicio del Viernes ya es sagrado en mi casa.',
    avatarInitials: 'PN',
    verifiedFormat: 'Edición eBook',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿En qué se diferencia Cadencia Profunda de otros libros sobre enfoque o hábitos?',
    answer:
      'La mayoría de los libros de productividad proponen un aislamiento extremo ("borra todas las aplicaciones y múdate a una cabaña") o horarios milimétricos que se derrumban en cuanto un compañero te escribe por Slack. Cadencia Profunda nació dentro de organizaciones modernas reales: te ofrece protocolos concretos para trabajar con profundidad sin dejar de colaborar con un equipo ágil, un jefe o una familia.',
  },
  {
    question: '¿Cómo recibo el Kit de Plantillas en Notion y los Paisajes Sonoros de Enfoque?',
    answer:
      'Inmediatamente después de completar tu pedido (para cualquier edición, incluida la de Tapa Dura), recibirás un correo de acceso instantáneo con tu enlace privado para descargar los archivos digitales sin DRM, escuchar las 4 pistas acústicas y duplicar las plantillas en Notion, Obsidian o PDF.',
  },
  {
    question: '¿Qué pasa si mi trabajo tiene muchas reuniones y un horario impredecible?',
    answer:
      'El Capítulo 5 ("Domando el Río Superficial") y el Capítulo 9 ("Trabajo Profundo Colaborativo") fueron escritos específicamente para quienes no tienen control total sobre su agenda. Incluso recuperar tres Bloques Piedra Angular de 60 a 90 minutos por semana —usando los guiones de negociación incluidos— genera un cambio drástico en tus resultados y tu tranquilidad.',
  },
  {
    question: '¿A qué países envían la edición en Tapa Dura y cuánto tarda la entrega?',
    answer:
      'Realizamos envíos a todo el mundo desde centros logísticos en Estados Unidos, España, México, Reino Unido y Alemania. Los pedidos se despachan en menos de 24 horas y llegan en un plazo de 3 a 5 días hábiles. Además, todo pedido físico incluye acceso inmediato al eBook digital para que puedas empezar a leer el Capítulo 1 hoy mismo.',
  },
  {
    question: '¿Cómo funciona la Garantía de 30 Días "Léelo y Aplícalo"?',
    answer:
      'Lee el libro y pon a prueba el Bloque Piedra Angular de 90 minutos y la Esclusa Cognitiva de las 4:45 PM durante 30 días. Si no te sientes notablemente más sereno y en control de tu trabajo de mayor impacto, responde al correo de tu recibo y te devolveremos el 100% de tu dinero, sin formularios ni preguntas, y podrás conservar todos los bonos digitales.',
  },
  {
    question: '¿Ofrecen descuentos por volumen para equipos, clubes de lectura o eventos de empresa?',
    answer:
      '¡Sí! Más de 140 empresas han adquirido Cadencia Profunda para sus equipos. Los pedidos de 10 o más ejemplares reciben un 25% de descuento junto con una guía de debate para equipos, y los pedidos de 50 o más ejemplares incluyen una sesión virtual en vivo de preguntas y respuestas de 45 minutos con Ismael Campos Rodríguez.',
  },
];
