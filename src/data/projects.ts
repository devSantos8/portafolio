export interface Project {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	fullDescription?: string;
	images: string[];
	backgroundColor: string;
	tags: string[];
	category: string[];
	year: string;
	role?: string;
	client?: string;
	liveUrl?: string;
	githubUrl?: string;
	challenge?: string;
	solution?: string;
	features?: string[];
}

export const projects: Project[] = [
	{
		id: 'tuki',
		title: 'Tuki',
		subtitle: 'WebApp - 2026',
		description: 'Software de organizacion de horario/pagos y gastos',
		images: [
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1507208658421-2eebafb5305f?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=800&fit=crop'
		],
		backgroundColor: '#f0ece1', // Warm Washi Paper / Sand
		tags: ['Next.js', 'Firebase', 'TypeScript', 'HeroUI'],
		category: ['frontend'],
		year: '2026',
		role: 'Disenador y Desarrollador Full-Stack',
		client: 'Proyecto Independiente',
		liveUrl: 'https://tuki.lat',
		githubUrl: 'https://github.com/JoainMonroy/tuki',
		challenge: 'Organizar turnos, pagos de horas extras y control de gastos en un entorno laboral dinamico suele ser caotico, lento y propenso a errores manuales en hojas de calculo tradicionales.',
		solution: 'Disene y construi una aplicacion web ultra rapida en Next.js integrada con Firebase. Automatiza el calculo de salarios segun horas registradas y analiza la fluctuacion de gastos mensuales mediante graficos interactivos, permitiendo una gestion financiera impecable en tiempo real.',
		features: [
			'Calculo automatico de horas de trabajo y pagos de horas extras',
			'Sincronizacion de datos en tiempo real mediante base de datos reactiva',
			'Gestor de gastos mensuales interactivo con categorias personalizadas',
			'Diseno centrado en dispositivos moviles para uso rapido en el campo'
		]
	},
	{
		id: 'commitflow',
		title: 'CommitFlow',
		subtitle: 'Proyecto de Titulo - 2025',
		description: 'Plataforma integral de conexión laboral que une talento TI con oportunidades. Incluye sistemas avanzados de matching, panel administrativo robusto y experiencia de usuario fluida.',
		fullDescription: 'Desarrollada con arquitectura escalable y buenas prácticas. Algoritmos de matching inteligente para conectar profesionales con empresas.',
		images: [
			'https://images.unsplash.com/photo-1522071820081-009f0ab9ba74?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=800&fit=crop'
		],
		backgroundColor: '#ffffff', // Pure White
		tags: ['Django', 'Python', 'PostgreSQL'],
		category: ['backend', 'frontend'],
		year: '2025',
		role: 'Arquitecto de Software y Backend Developer',
		client: 'Proyecto de Titulo Universitario',
		liveUrl: 'https://commitflow.cl',
		githubUrl: 'https://github.com/JoainMonroy/commitflow',
		challenge: 'El proceso de contratacion en el area tecnologica suele estar fragmentado, carecer de validaciones tecnicas rapidas y no emparejar eficientemente a ingenieros con ofertas acordes a sus habilidades.',
		solution: 'Desarrolle una plataforma robusta con Django y PostgreSQL que implementa un sistema inteligente de emparejamiento entre perfiles de candidatos y ofertas de empleo, integrando ademas un panel administrativo completo de control y reporteria de postulaciones.',
		features: [
			'Algoritmo de matching optimizado para evaluar perfiles y propuestas de empleo',
			'Panel de administracion avanzado para control de candidatos y estadisticas de uso',
			'Integracion de perfiles interactivos detallando habilidades tecnicas verificadas',
			'Base de datos relacional optimizada con busquedas indexadas para maxima velocidad'
		]
	},
	{
		id: 'lubricentro',
		title: 'Lubricentro La Esquina',
		subtitle: 'Pagina Web - 2025',
		description: 'Pagina web para un lubricentro, para mostrar sus productos y servicios.',
		images: [
			'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1491336477066-31156b5e4f35?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=800&fit=crop'
		],
		backgroundColor: '#b5c1b5', // Muted Sage / Matcha
		tags: ['Astro', 'Tailwind CSS', 'JavaScript'],
		category: ['frontend'],
		year: '2025',
		role: 'Frontend Developer y UX Designer',
		client: 'Lubricentro La Esquina',
		liveUrl: 'https://lubricentrolaesquina.cl',
		githubUrl: 'https://github.com/JoainMonroy/lubricentro-la-esquina',
		challenge: 'El negocio carecia de presencia digital, limitando su alcance a clientes locales de paso y dificultando la cotizacion rapida de mantenimientos de vehiculos habituales.',
		solution: 'Disene y construi un sitio web estatico optimizado mediante Astro y Tailwind CSS. Centrado en la experiencia de usuario y SEO local, permitiendo a los conductores cotizar y agendar servicios en segundos.',
		features: [
			'Rendimiento impecable de carga rozando el 100% en auditorias LightHouse',
			'Catalogo visual de servicios principales como filtros y cambios de aceite',
			'Estructura web semantica optimizada para buscadores y conversion local',
			'Formulario directo de contacto y consultas enlazado eficientemente'
		]
	},
	{
		id: 'pipeline-dashboard',
		title: 'PipelineOps Dashboard',
		subtitle: 'DevOps & CI/CD - 2026 (En Proceso)',
		description: 'Dashboard centralizado para el monitoreo, gestión y control de estado de pipelines CI/CD y workflows de GitHub Actions en múltiples proyectos.',
		images: [
			'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800&fit=crop'
		],
		backgroundColor: '#1c1c1c', // Ink Charcoal
		tags: ['DevOps', 'GitHub Actions', 'CI/CD', 'TypeScript', 'React'],
		category: ['devops', 'backend', 'frontend'],
		year: '2026',
		role: 'DevOps & Frontend Engineer',
		client: 'Proyecto en Proceso (Personal)',
		liveUrl: 'https://github.com/JoainMonroy',
		githubUrl: 'https://github.com/JoainMonroy',
		challenge: 'Supervisar el estado de ejecucion de pipelines CI/CD y workflows de GitHub Actions en multiples repositorios independientes suele requerir revisar cada proyecto individualmente, dificultando la deteccion temprana de fallos.',
		solution: 'Disenando e implementando un dashboard operacional centralizado que consume las APIs de GitHub Actions para supervisar en tiempo real el estado de ejecucion, logs y metricas de despliegue de todos los proyectos activos.',
		features: [
			'Monitoreo centralizado en tiempo real del estado de GitHub Actions',
			'Panel interactivo para consultar historial de ejecuciones y logs de despliegue',
			'Sistema de alertas y notificaciones ante fallos en flujos de integracion continua',
			'Interfaz intuitiva para la gestion rapida de repositorios y entornos'
		]
	},
];

export const getFeaturedProjects = () => projects.slice(0, 4);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getAllProjects = () => projects;