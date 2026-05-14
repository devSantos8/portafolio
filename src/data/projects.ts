export interface Project {
	id: string;
	title: string;
	subtitle: string;
	description: string;
	fullDescription?: string;
	images: string[];
	backgroundColor: string;
	tags: string[];
	year: string;
}

export const projects: Project[] = [
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
		year: '2025',
	},
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
		year: '2026',
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
		year: '2025',
	},
	{
		id: 'api-gateway',
		title: 'API Gateway',
		subtitle: 'Microservicios - 2023',
		description: 'Arquitectura de microservicios con API Gateway centralizado. Gestión de autenticación, rate limiting.',
		images: [
			'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&h=800&fit=crop'
		],
		backgroundColor: '#1c1c1c', // Ink Charcoal
		tags: ['Node.js', 'Docker', 'Redis'],
		year: '2023',
	},
];

export const getFeaturedProjects = () => projects.slice(0, 4);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getAllProjects = () => projects;