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
		id: 'pulsar',
		title: 'Pulsar',
		subtitle: 'Control Dashboard - 2026 (En Desarrollo)',
		description: 'Dashboard de Control Plane de alto rendimiento diseñado para centralizar, supervisar y analizar el estado de salud de repositorios de software, contenedores Docker y despliegues en producción.',
		fullDescription: 'Pulsar es un Dashboard de Control Plane de alto rendimiento diseñado para centralizar, supervisar y analizar el estado de salud de repositorios de software, contenedores Docker y despliegues en producción.',
		images: [
			'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800&fit=crop'
		],
		backgroundColor: '#1c1c1c', // Ink Charcoal
		tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma ORM', 'Docker'],
		category: ['devops', 'backend', 'frontend'],
		year: '2026',
		role: 'Full-Stack & DevOps',
		client: 'Proyecto Independiente',
		liveUrl: undefined,
		githubUrl: 'https://github.com/17santo',
		challenge: 'Supervisar el estado de salud de repositorios de software, contenedores Docker y despliegues en produccion en multiples servicios de forma fragmentada.',
		solution: 'Desarrolle Pulsar, un Dashboard de Control Plane de alto rendimiento que realiza inspeccion en vivo de contenedores Docker, despliegues en Vercel y telemetria de repositorios de GitHub con persistencia ultrarrapida en SQLite via Prisma ORM 7 y LibSQL.',
		features: [
			'Control Plane & Telemetria: Sistema de monitoreo centralizado para repositorios de GitHub con filtrado avanzado y proyectos persistidos.',
			'Deteccion Automatica de Entornos: Algoritmos de inspeccion en vivo para contenedores Dockerfile y despliegues en Vercel.',
			'Autenticacion & Seguridad: Integracion de OAuth 2.0 con GitHub usando NextAuth.js v4 y tokens JWT.',
			'Base de Datos & ORM de Nueva Generacion: Implementacion de Prisma ORM v7 utilizando el adaptador LibSQL para SQLite.',
			'Interfaz UI/UX de Alto Nivel: Desarrollado con Next.js 16 (App Router), React 19 y Tailwind CSS v4.',
			'CI/CD & Contenerizacion: Empaquetado multi-etapa con Docker y pipeline de validacion automatizada mediante GitHub Actions.'
		]
	},
	{
		id: 'tuki',
		title: 'Tuki',
		subtitle: 'WebApp - 2026',
		description: 'Software de organizacion de horario/pagos y gastos',
		images: [
			'/projects/tuki/tuki-login-mockup.png',
			'/projects/tuki/tuki-home.png',
			'/projects/tuki/tuki-calendar.png',
			'/projects/tuki/tuki-expenses.png',
			'/projects/tuki/tuki-login.png'
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
	}
];

export const getFeaturedProjects = () => projects.slice(0, 4);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getAllProjects = () => projects;