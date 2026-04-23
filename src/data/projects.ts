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
		],
		backgroundColor: '#ffffff', // Pure White
		tags: ['Django', 'Python', 'PostgreSQL'],
		year: '2025',
	},
	{
		id: 'dashboard-data',
		title: 'Dashboard Analytics',
		subtitle: 'Visualización de Métricas - 2024',
		description: 'Interfaz moderna para visualizar métricas en tiempo real con componentes dinámicos y analítica profunda.',
		images: [
			'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
		],
		backgroundColor: '#f0ece1', // Warm Washi Paper / Sand
		tags: ['React', 'Chart.js', 'Node.js'],
		year: '2024',
	},
	{
		id: 'lubricentro',
		title: 'Lubricentro La Esquina',
		subtitle: 'Pagina Web - 2025',
		description: 'Pagina web para un lubricentro, para mostrar sus productos y servicios.',
		images: [
			'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=800&fit=crop',
			'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=800&fit=crop',
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
		],
		backgroundColor: '#1c1c1c', // Ink Charcoal
		tags: ['Node.js', 'Docker', 'Redis'],
		year: '2023',
	},
	{
		id: 'task-management',
		title: 'TaskFlow',
		subtitle: 'Gestión de Proyectos - 2023',
		description: 'Herramienta de gestión de proyectos con seguimiento de tareas, colaboración en tiempo real.',
		images: [
			'https://images.unsplash.com/photo-1611224923853-80b0f2f1cd3e?w=600&h=800&fit=crop',
		],
		backgroundColor: '#ffffff',
		tags: ['React', 'Socket.io', 'MongoDB'],
		year: '2023',
	},
	{
		id: 'devops-pipeline',
		title: 'DevOps Pipeline',
		subtitle: 'CI/CD Automation - 2023',
		description: 'Pipeline de integración y despliegue continuo completamente automatizado.',
		images: [
			'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=800&fit=crop',
		],
		backgroundColor: '#0d1117',
		tags: ['GitHub Actions', 'Kubernetes', 'Terraform'],
		year: '2023',
	},
	{
		id: 'landing-premium',
		title: 'Landing Premium',
		subtitle: 'Página de Presentación - 2024',
		description: 'Landing page con animaciones smooth, diseño moderno y optimización SEO completa.',
		images: [],
		backgroundColor: '#ffffff',
		tags: ['Astro', 'GSAP', 'Tailwind CSS'],
		year: '2024',
	},
	{
		id: 'restaurante-app',
		title: 'Sistema Restaurante',
		subtitle: 'Gestión Integral - 2022',
		description: 'Sistema completo para gestión de restaurante con pedidos e inventario.',
		images: [],
		backgroundColor: '#ffffff',
		tags: ['Java', 'Spring Boot', 'MySQL'],
		year: '2022',
	},
	{
		id: 'portfolio-v1',
		title: 'Portfolio v1',
		subtitle: 'Primer Portfolio - 2021',
		description: 'Mi primera página de portfolio personal.',
		images: [],
		backgroundColor: '#ffffff',
		tags: ['HTML', 'CSS', 'JavaScript'],
		year: '2021',
	},
];

export const getFeaturedProjects = () => projects.slice(0, 4);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getAllProjects = () => projects;