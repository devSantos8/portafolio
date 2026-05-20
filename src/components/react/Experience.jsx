import React, { useState, useRef } from 'react';

const EXPERIENCE_DATA = [
    {
        id: '01',
        role: 'Desarrollador Full-Stack (Práctica)',
        company: 'INACAP / Entorno Tecnológico',
        period: 'Marzo 2025 - Presente',
        status: 'EN EJECUCIÓN',
        statusColor: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
        desc: 'Liderando análisis y optimización de plataformas web institucionales y sistemas internos de alta velocidad.',
        bullets: [
            'Migración de sistemas legados hacia Astro y React 19 logrando tiempos de carga instantáneos.',
            'Desarrollo de micro-servicios y APIs estructuradas bajo flujos de datos consistentes en TypeScript.',
            'Coordinación técnica en control de versiones robusto y metodologías ágiles Gitflow.'
        ],
        tags: ['React', 'Astro', 'TypeScript', 'Tailwind', 'Git'],
        stats: [
            { label: 'ARQUITECTURA FRONTEND', value: 96 },
            { label: 'RENDIMIENTO DE CARGA', value: 98 },
            { label: 'INTEGRACIÓN DE APIS', value: 92 }
        ],
        brandGlow: 'rgba(16, 185, 129, 0.15)'
    },
    {
        id: '02',
        role: 'Desarrollador Full-Stack Freelance',
        company: 'Proyectos Independientes',
        period: '2023 - 2025',
        status: 'COMPLETADO',
        statusColor: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        desc: 'Concepción, diseño e implementación a medida de plataformas web seguras y modulares para clientes.',
        bullets: [
            'Construcción de backends robustos en Django y Node.js con modelamiento estructurado de datos.',
            'Diseño de endpoints RESTful eficientes con sistemas de autenticación stateless JWT.',
            'Interfaces interactivas y accesibles bajo estrictos lineamientos de diseño UX/UI en Figma.'
        ],
        tags: ['Django', 'Node.js', 'PostgreSQL', 'Figma', 'JWT Auth'],
        stats: [
            { label: 'INGENIERÍA BACKEND', value: 94 },
            { label: 'DISEÑO DE INTERFACES', value: 90 },
            { label: 'OPTIMIZACIÓN BASE DATOS', value: 92 }
        ],
        brandGlow: 'rgba(59, 130, 246, 0.15)'
    },
    {
        id: '03',
        role: 'DevOps & Automatización',
        company: 'Proyectos Personales & Labs',
        period: '2024 - 2025',
        status: 'COMPLETADO',
        statusColor: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        desc: 'Contenerización avanzada de servicios y orquestación para garantizar la paridad de entornos de ejecución.',
        bullets: [
            'Virtualización completa de microservicios con Docker e infraestructura escalable en la nube.',
            'Scripting y programación asíncrona en Python para procesamiento masivo de datos en background.',
            'Administración, replicación y tuning de bases de datos PostgreSQL y MongoDB.'
        ],
        tags: ['Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Scripting'],
        stats: [
            { label: 'CONTENERIZACIÓN DOCKER', value: 98 },
            { label: 'AUTOMATIZACIÓN SCRIPTING', value: 95 },
            { label: 'NUBE HÍBRIDA & VPC', value: 90 }
        ],
        brandGlow: 'rgba(168, 85, 247, 0.15)'
    }
];

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const cardRef = useRef(null);

    const activeItem = EXPERIENCE_DATA[activeIndex];

    const handleMouseMove = (e) => {
        const card = cardRef.current;
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 8; // Max 8 deg
        const rotateY = ((x - centerX) / centerX) * 8;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        card.style.setProperty('--glow-x', `${x}px`);
        card.style.setProperty('--glow-y', `${y}px`);
    };

    const handleMouseLeave = () => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-stretch">
            {/* Left Column: Interactive Role Selector Timeline */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                {EXPERIENCE_DATA.map((item, idx) => {
                    const isActive = activeIndex === idx;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveIndex(idx)}
                            className={`text-left p-6 rounded-[2rem] border transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group select-none
                                ${isActive
                                    ? 'bg-white dark:bg-[#0c0c0e]/80 border-emerald-500/30 shadow-[0_15px_30px_rgba(16,185,129,0.03)]'
                                    : 'bg-transparent border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/50 dark:hover:bg-[#0c0c0e]/10'
                                }
                            `}
                        >
                            {/* Accent timeline indicator dot inside item */}
                            <div className="flex justify-between items-center w-full">
                                <span className={`text-[10px] font-mono tracking-wider font-bold transition-colors flex items-center gap-2
                                    ${isActive ? 'text-emerald-500' : 'text-gray-400'}
                                `}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'}`} />
                                    ROL {item.id}
                                </span>
                                <span className="font-mono text-xs opacity-60">
                                    {item.period}
                                </span>
                            </div>

                            <h3 className={`text-lg font-bold tracking-tight mt-1 transition-colors
                                ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'}
                            `}>
                                {item.role}
                            </h3>

                            <span className="text-xs text-gray-400 font-mono mt-0.5">
                                {item.company}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Right Column: 3D System Control Dashboard Panel */}
            <div className="lg:col-span-7 flex items-center justify-center">
                <div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="w-full p-8 md:p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#0c0c0e]/40 border border-gray-200/50 dark:border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[480px] transition-transform duration-200 ease-out select-none cursor-none"
                    style={{
                        boxShadow: `0 30px 60px -20px ${activeItem.brandGlow}`
                    }}
                >
                    {/* Glowing radial background aura */}
                    <div 
                        className="absolute inset-0 pointer-events-none opacity-50"
                        style={{
                            background: `radial-gradient(220px circle at var(--glow-x, 0px) var(--glow-y, 0px), ${activeItem.brandGlow.replace('0.15', '0.08')}, transparent 80%)`
                        }}
                    />

                    {/* Technical grid backdrop layer */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 dark:opacity-60" />

                    {/* Dashboard Header */}
                    <div className="flex justify-between items-start border-b border-gray-200/50 dark:border-white/5 pb-6 relative z-10">
                        <div className="flex flex-col gap-1.5">
                            <span className={`text-[10px] font-mono tracking-widest font-bold border rounded-full px-3 py-0.5 w-max uppercase
                                ${activeItem.statusColor}
                            `}>
                                {activeItem.status}
                            </span>
                            <h4 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">
                                {activeItem.role}
                            </h4>
                            <span className="text-xs text-gray-400 font-mono">
                                {activeItem.company}
                            </span>
                        </div>

                        {/* Top corner code indicators */}
                        <div className="font-mono text-[10px] text-gray-400 opacity-60 text-right leading-relaxed hidden sm:block">
                            <span>SYS_LOAD: SECURE</span> <br />
                            <span>PORT: 4321 // ASTRO</span>
                        </div>
                    </div>

                    {/* Role description and bullet accomplishments */}
                    <div className="flex-1 py-6 flex flex-col gap-5 relative z-10">
                        <p className="text-xs text-gray-400 font-mono tracking-wide uppercase">
                            REGISTRO DE OPERACIÓN Y LOGS
                        </p>
                        
                        <p className="text-sm text-gray-700 dark:text-gray-300 font-light leading-relaxed">
                            {activeItem.desc}
                        </p>

                        <ul className="flex flex-col gap-3 text-xs text-gray-500 dark:text-gray-300 leading-relaxed font-light">
                            {activeItem.bullets.map((bullet, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-emerald-500 font-mono mt-0.5">&gt;</span>
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Live Metric Stats Bar Allocations */}
                    <div className="py-6 border-y border-gray-200/50 dark:border-white/5 relative z-10 flex flex-col gap-4">
                        <div className="text-xs text-gray-400 font-mono tracking-wide uppercase">
                            MÉTRICAS DE RENDIMIENTO ASIGNADAS
                        </div>
                        <div className="flex flex-col gap-3">
                            {activeItem.stats.map((stat, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                                        <span>{stat.label}</span>
                                        <span className="text-emerald-500 font-bold">{stat.value}%</span>
                                    </div>
                                    <div className="h-1.5 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden relative">
                                        <div
                                            className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${stat.value}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard Footer Pill tags */}
                    <div className="pt-6 flex flex-wrap gap-2 relative z-10">
                        {activeItem.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 border border-gray-200 dark:border-white/5 rounded-full text-[10px] font-mono text-gray-700 dark:text-gray-300 bg-white/40 dark:bg-white/5"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
