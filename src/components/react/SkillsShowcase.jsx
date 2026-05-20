import React, { useState } from 'react';

const CATEGORIES = [
    { id: 'frontend', name: 'Frontend', index: '01.FE' },
    { id: 'backend', name: 'Backend', index: '02.BE' },
    { id: 'devops', name: 'DevOps & Tools', index: '03.DO' }
];

const SKILLS_BY_CAT = {
    frontend: [
        { name: 'React', level: 'Avanzado', desc: 'Interfaces modulares y gestión de estado reactiva de alta velocidad.', color: 'hover:border-cyan-500/30 hover:bg-cyan-500/5 text-cyan-400 font-bold border-cyan-500/10 bg-cyan-950/10' },
        { name: 'Next.js', level: 'Avanzado', desc: 'Renderizado en servidor (SSR) y optimización avanzada de páginas.', color: 'hover:border-white/30 hover:bg-white/5 text-gray-300 font-bold border-white/10 bg-white/5' },
        { name: 'Astro', level: 'Avanzado', desc: 'Sitios ultra-rápidos con hidratación parcial controlada e islas de código.', color: 'hover:border-orange-500/30 hover:bg-orange-500/5 text-orange-400 font-bold border-orange-500/10 bg-orange-950/10' },
        { name: 'TypeScript', level: 'Avanzado', desc: 'Código estricto y tipado seguro para prevenir errores en tiempo de ejecución.', color: 'hover:border-blue-500/30 hover:bg-blue-500/5 text-blue-400 font-bold border-blue-500/10 bg-blue-950/10' },
        { name: 'Tailwind CSS', level: 'Avanzado', desc: 'Estilos responsivos modulares y maquetación de alto nivel pixel-perfect.', color: 'hover:border-sky-500/30 hover:bg-sky-500/5 text-sky-400 font-bold border-sky-500/10 bg-sky-950/10' },
        { name: 'GSAP', level: 'Intermedio', desc: 'Animaciones complejas y fluidas sincronizadas con ScrollTrigger.', color: 'hover:border-green-500/30 hover:bg-green-500/5 text-green-400 font-bold border-green-500/10 bg-green-950/10' },
        { name: 'HTML5/CSS3', level: 'Avanzado', desc: 'Estructura semántica limpia y variables nativas para consistencia global.', color: 'hover:border-orange-600/30 hover:bg-orange-600/5 text-orange-500 font-bold border-orange-600/10 bg-orange-950/10' },
        { name: 'SEO Opt', level: 'Avanzado', desc: 'Indexación avanzada, metadatos y auditorías Lighthouse impecables.', color: 'hover:border-emerald-500/30 hover:bg-emerald-500/5 text-emerald-400 font-bold border-emerald-500/10 bg-emerald-950/10' }
    ],
    backend: [
        { name: 'Python', level: 'Avanzado', desc: 'Programación asíncrona, scripting automatizado y lógica compleja.', color: 'hover:border-yellow-500/30 hover:bg-yellow-500/5 text-yellow-400 font-bold border-yellow-500/10 bg-yellow-950/10' },
        { name: 'Django', level: 'Avanzado', desc: 'Desarrollo backend rápido, ORM robusto y paneles de administración seguros.', color: 'hover:border-emerald-600/30 hover:bg-emerald-600/5 text-emerald-400 font-bold border-emerald-600/10 bg-emerald-950/10' },
        { name: 'Node.js', level: 'Avanzado', desc: 'Entorno de ejecución orientado a eventos y APIs altamente escalables.', color: 'hover:border-green-500/30 hover:bg-green-500/5 text-green-400 font-bold border-green-500/10 bg-green-950/10' },
        { name: 'Express.js', level: 'Avanzado', desc: 'Rutas eficientes, middlewares personalizados y servidores web ligeros.', color: 'hover:border-gray-400/30 hover:bg-gray-400/5 text-gray-300 font-bold border-gray-400/10 bg-gray-950/10' },
        { name: 'APIs RESTful', level: 'Avanzado', desc: 'Endpoints estructurados bajo estándares REST, formatos JSON y JWT.', color: 'hover:border-teal-500/30 hover:bg-teal-500/5 text-teal-400 font-bold border-teal-500/10 bg-teal-950/10' },
        { name: 'PostgreSQL', level: 'Avanzado', desc: 'Modelado relacional robusto, integridad de datos y optimización de consultas.', color: 'hover:border-indigo-400/30 hover:bg-indigo-400/5 text-indigo-400 font-bold border-indigo-400/10 bg-indigo-950/10' },
        { name: 'MongoDB', level: 'Intermedio', desc: 'Bases de datos no relacionales flexibles para almacenamiento dinámico.', color: 'hover:border-green-400/30 hover:bg-green-400/5 text-green-300 font-bold border-green-400/10 bg-green-950/10' },
        { name: 'JWT Auth', level: 'Avanzado', desc: 'Autenticación stateless segura basada en tokens firmados criptográficamente.', color: 'hover:border-pink-500/30 hover:bg-pink-500/5 text-pink-400 font-bold border-pink-500/10 bg-pink-950/10' }
    ],
    devops: [
        { name: 'Docker', level: 'Avanzado', desc: 'Contenerización de microservicios para garantizar paridad entre entornos.', color: 'hover:border-sky-500/30 hover:bg-sky-500/5 text-sky-400 font-bold border-sky-500/10 bg-sky-950/10' },
        { name: 'Git / GitHub', level: 'Avanzado', desc: 'Control de versiones en equipos mediante flujos Gitflow y Pull Requests.', color: 'hover:border-orange-600/30 hover:bg-orange-600/5 text-orange-400 font-bold border-orange-600/10 bg-orange-950/10' },
        { name: 'GitHub Actions', level: 'Intermedio', desc: 'Integración continua para validar sintaxis, tests e integración automática.', color: 'hover:border-purple-500/30 hover:bg-purple-500/5 text-purple-400 font-bold border-purple-500/10 bg-purple-950/10' },
        { name: 'AWS Cloud', level: 'Intermedio', desc: 'Arquitecturas redundantes en ECS, EC2, S3 y bases de datos RDS.', color: 'hover:border-yellow-600/30 hover:bg-yellow-600/5 text-yellow-500 font-bold border-yellow-600/10 bg-yellow-950/10' },
        { name: 'CI/CD Pipelines', level: 'Intermedio', desc: 'Automatización del ciclo de vida del software reduciendo tiempos de despliegue.', color: 'hover:border-emerald-500/30 hover:bg-emerald-500/5 text-emerald-400 font-bold border-emerald-500/10 bg-emerald-950/10' },
        { name: 'Figma Design', level: 'Intermedio', desc: 'Diseño UX/UI moderno y prototipos de interfaces interactivas de alta fidelidad.', color: 'hover:border-pink-500/30 hover:bg-pink-500/5 text-pink-400 font-bold border-pink-500/10 bg-pink-950/10' },
        { name: 'Bash / Scripting', level: 'Avanzado', desc: 'Automatización de tareas complejas en Linux y optimización de servidores.', color: 'hover:border-blue-400/30 hover:bg-blue-400/5 text-blue-300 font-bold border-blue-400/10 bg-blue-950/10' }
    ]
};

export default function SkillsShowcase() {
    const [activeTab, setActiveTab] = useState('frontend');
    const [hoveredSkill, setHoveredSkill] = useState(null);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-stretch">
            {/* Left: Tab Selectors */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6 border-r border-gray-100 dark:border-white/5 pr-0 lg:pr-10">
                <div className="flex flex-row lg:flex-col gap-3 w-full">
                    {CATEGORIES.map(cat => {
                        const isActive = activeTab === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => {
                                    setActiveTab(cat.id);
                                    setHoveredSkill(null);
                                }}
                                className={`flex-1 lg:flex-none text-left p-6 rounded-3xl transition-all duration-300 border flex items-center justify-between group
                                    ${isActive 
                                        ? 'bg-white dark:bg-[#0c0c0e]/80 border-emerald-500/30 text-emerald-500 dark:text-emerald-400 shadow-[0_15px_30px_rgba(16,185,129,0.03)]' 
                                        : 'bg-transparent border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/50 dark:hover:bg-[#0c0c0e]/10'
                                    }
                                `}
                            >
                                <div className="flex flex-col gap-1">
                                    <span className="font-mono text-[9px] tracking-widest opacity-60">
                                        {cat.index}
                                    </span>
                                    <span className="text-lg font-bold tracking-tight">
                                        {cat.name}
                                    </span>
                                </div>
                                <span className={`w-2 h-2 rounded-full transition-transform duration-500
                                    ${isActive ? 'bg-emerald-500 scale-125' : 'bg-transparent scale-0 group-hover:scale-100 group-hover:bg-gray-400'}
                                `} />
                            </button>
                        );
                    })}
                </div>

                {/* Technical status console display (Dynamic details on hover) */}
                <div className="hidden lg:flex flex-col gap-3 p-6 rounded-3xl bg-[#030304]/90 dark:bg-[#050507]/90 border border-white/5 font-mono text-xs w-full text-emerald-400/90 shadow-2xl relative overflow-hidden">
                    {/* Console matrix background line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                    
                    <div className="flex justify-between items-center opacity-60 text-[9px] text-gray-500 border-b border-white/5 pb-2">
                        <span>SYSTEM CONSOLE v1.0.4</span>
                        <span className="animate-pulse">● LIVE</span>
                    </div>

                    <div className="flex flex-col gap-2 min-h-[90px]">
                        {hoveredSkill ? (
                            <>
                                <div>
                                    <span className="text-gray-500">&gt; TECH:</span> {hoveredSkill.name.toUpperCase()}
                                </div>
                                <div>
                                    <span className="text-gray-500">&gt; NIVEL:</span> {hoveredSkill.level.toUpperCase()}
                                </div>
                                <div className="text-gray-300 leading-relaxed mt-1 text-[11px]">
                                    &gt; {hoveredSkill.desc}
                                </div>
                            </>
                        ) : (
                            <div className="text-gray-500 italic flex items-center justify-center h-[90px] text-center">
                                Pasa el mouse sobre un chip de tecnología para leer la especificación del sistema.
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Right: Interactive Skills Grid */}
            <div className="lg:col-span-8 flex flex-col justify-center">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                    {SKILLS_BY_CAT[activeTab].map(skill => {
                        const isHovered = hoveredSkill?.name === skill.name;
                        return (
                            <div
                                key={skill.name}
                                onMouseEnter={() => setHoveredSkill(skill)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                className={`p-6 rounded-[2rem] border transition-all duration-300 backdrop-blur-md cursor-none flex flex-col justify-between min-h-[140px] relative overflow-hidden select-none
                                    ${isHovered 
                                        ? `${skill.color} border-current scale-[1.03] shadow-lg` 
                                        : 'bg-gray-50/50 dark:bg-[#0c0c0e]/20 border-gray-200/50 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/10 text-gray-900 dark:text-white'
                                    }
                                `}
                            >
                                <div className="flex justify-between items-start">
                                    <span className="text-lg font-bold tracking-tight">{skill.name}</span>
                                    <span className={`text-[10px] font-mono font-medium px-2 py-0.5 rounded-full border transition-colors
                                        ${isHovered 
                                            ? 'border-current bg-current/10' 
                                            : 'border-gray-200 dark:border-white/10 text-gray-400 bg-transparent'
                                        }
                                    `}>
                                        {skill.level}
                                    </span>
                                </div>

                                <p className="text-[11px] text-gray-400 leading-relaxed font-light mt-4 line-clamp-2">
                                    {skill.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
