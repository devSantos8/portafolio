export interface Project {
	id: string;
	title: string;
	description: string;
	fullDescription?: string;
	image: string;
	link: string;
	linkType: 'github' | 'live' | 'external';
	tags: string[];
	featured: boolean;
	backgroundColor?: string;
	glowColor?: string;
}

export const projects: Project[] = [
	{
		id: 'commitflow',
		title: 'CommitFlow',
		description: 'Plataforma integral de conexión laboral que une talento TI con oportunidades y sistemas avanzados de matching.',
		fullDescription: 'CommitFlow es una solución end-to-end para conectar profesionales de IT con empresas. Incluye algoritmos de matching inteligente, panel administrativo robusto y experiencia de usuario fluida. Desarrollada con arquitectura escalable y buenas prácticas de desarrollo.',
		image: '/projects/workco.webp',
		link: 'https://github.com/17santo',
		linkType: 'github',
		tags: ['Django', 'React', 'SQL'],
		featured: true,
		backgroundColor: 'from-red-500/0 via-red-500/0 to-red-500/5',
		glowColor: 'to-red-500/10',
	},
	{
		id: 'dashboard-data',
		title: 'Dashboard Data',
		description: 'Interfaz moderna para visualizar métricas en tiempo real con componentes dinámicos y analítica profunda.',
		fullDescription: 'Dashboard desarrollado con arquitectura modular. Visualización de datos en tiempo real, gráficos interactivos y exportación de reportes. Optimizado para rendimiento y accesibilidad.',
		image: '/projects/dashboard.webp',
		link: 'https://github.com/17santo',
		linkType: 'github',
		tags: ['Django', 'JS Vanilla'],
		featured: true,
	},
	{
		id: 'lubricentro',
		title: 'Lubricentro La Esquina',
		description: 'Ecommerce moderno con catálogo dinámico, carrito de compras y sistema de pagos integrado para lubricantes y accesorios automotrices.',
		fullDescription: 'Plataforma de e-commerce completa para venta de productos automotrices. Incluye carrito persistente, búsqueda avanzada, integración de pagos y panel de administración. Diseño responsivo y experiencia móvil optimizada.',
		image: '/projects/lubricentro.webp',
		link: 'https://lubricentro-la-esquina.vercel.app',
		linkType: 'live',
		tags: ['Next.js', 'Tailwind', 'Stripe'],
		featured: true,
		backgroundColor: 'from-emerald-500/0 via-emerald-500/0 to-emerald-500/5',
		glowColor: 'to-emerald-500/10',
	},
	{
		id: 'project-4',
		title: 'Sistema de Gestión',
		description: 'Herramienta de gestión de proyectos con seguimiento de tareas, colaboración en tiempo real y reportes automatizados.',
		fullDescription: 'Sistema diseñado para equipos de desarrollo. Seguimiento de issues, milestones, comentarios colaborativos y automatización de workflows. Integración con Git y notificaciones en tiempo real.',
		image: '/projects/default.webp',
		link: 'https://github.com/17santo',
		linkType: 'github',
		tags: ['React', 'Node.js', 'MongoDB'],
		featured: false,
	},
	{
		id: 'project-5',
		title: 'Landing Page Premium',
		description: 'Página de presentación con animaciones smooth, diseño moderno y optimización SEO completa.',
		fullDescription: 'Landing optimizada con performance scores altos. Animaciones suaves, microinteracciones delightful y CMS headless para contenidos.',
		image: '/projects/default.webp',
		link: 'https://github.com/17santo',
		linkType: 'github',
		tags: ['Astro', 'Tailwind', 'GSAP'],
		featured: false,
	},
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
