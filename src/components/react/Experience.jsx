import React, { useState, useRef, useEffect } from 'react';

const EXPERIENCE_DATA = [
    {
        id: '01',
        type: 'ACTUAL',
        role: 'Practicante I+DevOps',
        context: 'Banco Bci',
        company: 'Banco de Crédito e Inversiones (Bci)',
        period: 'Marzo 2026 — Presente',
        status: 'EN EJECUCIÓN',
        statusColor: 'emerald',
        desc: 'Investigación e integración de automatizaciones de calidad, portales IDP y herramientas asistidas por Inteligencia Artificial en la industria financiera.',
        bullets: [
            'Investigación e implementación de automatizaciones para la validación de pruebas continuas a partir de colecciones Postman y cURL.',
            'Integración de sistemas de gobernanza de pruebas para mejorar la visualización y trazabilidad en portales internos de desarrollo (IDP).',
            'Desarrollo de un asistente inteligente basado en roles para apoyar la gestión y adopción interna de herramientas asistidas por IA (GitHub Copilot).',
            'Participación en flujos de evaluación de tecnologías emergentes y redacción de documentación técnica.'
        ],
        tags: ['I+DevOps', 'Postman', 'cURL', 'GenAI', 'GitHub Copilot', 'IDP'],
        stats: [
            { label: 'AUTOMATIZACIÓN DE PRUEBAS', value: 95 },
            { label: 'REDUCCIÓN FRICCIÓN COGNITIVA', value: 92 },
            { label: 'ADOPCIÓN HERRAMIENTAS IA', value: 90 }
        ],
        accentColor: '#10b981',
        glowColor: 'rgba(16, 185, 129, 0.2)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        )
    },
    {
        id: '02',
        type: 'FREELANCE',
        role: 'Desarrollador Web Freelance',
        context: 'Lubricentro La Esquina',
        company: 'Cliente Independiente — Santiago, Chile',
        period: 'Ene 2025 — Feb 2025',
        status: 'COMPLETADO',
        statusColor: 'blue',
        desc: 'Diseño e implementación integral de la plataforma web comercial del negocio para optimizar la visibilidad digital y gestión de servicios.',
        bullets: [
            'Desarrollo frontend en React, Tailwind CSS y JavaScript con arquitectura responsiva y optimización SEO.',
            'Diseño de interfaz de usuario enfocado en catálogo de productos, trayectoria del equipo y atención al cliente.',
            'Integración backend en Django con base de datos PostgreSQL para gestión de servicios.'
        ],
        tags: ['React', 'Django', 'PostgreSQL', 'Tailwind', 'SEO'],
        stats: [
            { label: 'INGENIERÍA FRONTEND', value: 94 },
            { label: 'EXPERIENCIA DE USUARIO (UX)', value: 92 },
            { label: 'OPTIMIZACIÓN Y RENDIMIENTO', value: 95 }
        ],
        accentColor: '#3b82f6',
        glowColor: 'rgba(59, 130, 246, 0.2)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
        )
    },
    {
        id: '03',
        type: 'LABS',
        role: 'DevOps & Automatización',
        context: 'Proyectos Personales',
        company: 'Labs & Experimentación Personal',
        period: '2024 — 2025',
        status: 'EN CURSO',
        statusColor: 'purple',
        desc: 'Contenerización avanzada de servicios y orquestación para garantizar la paridad de entornos de ejecución.',
        bullets: [
            'Virtualización completa de microservicios con Docker e infraestructura escalable en la nube.',
            'Scripting y programación asíncrona en Python para procesamiento masivo de datos en background.',
            'Administración, replicación y tuning de bases de datos PostgreSQL y MongoDB.'
        ],
        tags: ['Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'Python'],
        stats: [
            { label: 'CONTENERIZACIÓN DOCKER', value: 98 },
            { label: 'AUTOMATIZACIÓN SCRIPTING', value: 95 },
            { label: 'NUBE HÍBRIDA & VPC', value: 90 }
        ],
        accentColor: '#a855f7',
        glowColor: 'rgba(168, 85, 247, 0.2)',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
            </svg>
        )
    }
];

const colorMap = {
    emerald: {
        badge: 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20',
        dot: 'bg-emerald-500',
        bar: 'from-emerald-500 to-teal-400',
        text: 'text-emerald-500',
        border: 'border-emerald-500/30',
        ring: 'ring-emerald-500/20',
        activeLine: 'bg-emerald-500',
        icon: 'text-emerald-400',
    },
    blue: {
        badge: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
        dot: 'bg-blue-500',
        bar: 'from-blue-500 to-cyan-400',
        text: 'text-blue-500',
        border: 'border-blue-500/30',
        ring: 'ring-blue-500/20',
        activeLine: 'bg-blue-500',
        icon: 'text-blue-400',
    },
    purple: {
        badge: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
        dot: 'bg-purple-500',
        bar: 'from-purple-500 to-pink-400',
        text: 'text-purple-500',
        border: 'border-purple-500/30',
        ring: 'ring-purple-500/20',
        activeLine: 'bg-purple-500',
        icon: 'text-purple-400',
    }
};

function StatBar({ label, value, color, animate }) {
    const [width, setWidth] = useState(0);
    const colors = colorMap[color];

    useEffect(() => {
        if (animate) {
            const t = setTimeout(() => setWidth(value), 80);
            return () => clearTimeout(t);
        } else {
            setWidth(0);
        }
    }, [animate, value]);

    return (
        <div className="flex flex-col gap-1.5">
            <div className="flex justify-between items-center text-[10px] font-mono text-gray-400">
                <span>{label}</span>
                <span className={`${colors.text} font-bold`}>{value}%</span>
            </div>
            <div className="h-[3px] w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                <div
                    className={`h-full bg-gradient-to-r ${colors.bar} rounded-full transition-all duration-700 ease-out`}
                    style={{ width: `${width}%` }}
                />
            </div>
        </div>
    );
}

export default function Experience() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(true);

    const activeItem = EXPERIENCE_DATA[activeIndex];
    const colors = colorMap[activeItem.statusColor];

    const handleSelect = (idx) => {
        if (idx === activeIndex) return;
        setAnimating(false);
        setTimeout(() => {
            setActiveIndex(idx);
            setAnimating(true);
        }, 150);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">

            {/* ─── LEFT: Vertical Timeline Selector ─── */}
            <div className="lg:col-span-4 flex flex-col relative">
                {/* Vertical spine line */}
                <div className="absolute left-[19px] top-5 bottom-5 w-[1px] bg-gradient-to-b from-gray-200 via-gray-200 to-transparent dark:from-white/10 dark:via-white/5" />

                <div className="flex flex-col gap-2">
                    {EXPERIENCE_DATA.map((item, idx) => {
                        const isActive = activeIndex === idx;
                        const c = colorMap[item.statusColor];
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleSelect(idx)}
                                className={`
                                    group relative text-left pl-12 pr-5 py-5 rounded-2xl
                                    border transition-all duration-300 select-none
                                    ${isActive
                                        ? `bg-white dark:bg-white/[0.03] ${c.border} shadow-lg`
                                        : 'bg-transparent border-transparent hover:bg-gray-50/60 dark:hover:bg-white/[0.02]'
                                    }
                                `}
                                style={isActive ? { boxShadow: `0 8px 32px -8px ${item.glowColor}` } : {}}
                            >
                                {/* Timeline dot */}
                                <span className={`
                                    absolute left-[13px] top-1/2 -translate-y-1/2
                                    w-[14px] h-[14px] rounded-full border-2 border-white dark:border-[#0c0c0e]
                                    transition-all duration-300 z-10
                                    ${isActive ? `${c.dot} scale-125 shadow-md` : 'bg-gray-300 dark:bg-gray-600'}
                                `}
                                style={isActive ? { boxShadow: `0 0 10px ${item.accentColor}` } : {}}
                                />

                                {/* Content */}
                                <div className="flex flex-col gap-0.5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`
                                            text-[9px] font-mono tracking-widest font-bold uppercase px-2 py-0.5
                                            rounded-full border transition-all duration-300
                                            ${isActive ? c.badge : 'text-gray-400 bg-gray-100/50 dark:bg-white/5 border-gray-200 dark:border-white/10'}
                                        `}>
                                            {item.type}
                                        </span>
                                    </div>
                                    <h3 className={`
                                        text-sm font-bold tracking-tight transition-colors duration-300 leading-snug
                                        ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'}
                                    `}>
                                        {item.context}
                                    </h3>
                                    <span className={`text-[11px] font-mono transition-colors duration-300 ${isActive ? 'text-gray-400' : 'text-gray-400/60'}`}>
                                        {item.period}
                                    </span>
                                </div>

                                {/* Active indicator arrow */}
                                {isActive && (
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 dark:text-white/20">
                                        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
                                            <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L9.19 8 6.22 5.03a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Bottom legend */}
                <div className="mt-6 ml-12 text-[10px] font-mono text-gray-400/60 tracking-wider">
                    TRAYECTORIA & OPERACIONES
                </div>
            </div>

            {/* ─── RIGHT: Detail Panel ─── */}
            <div className="lg:col-span-8">
                <div
                    className={`
                        relative rounded-3xl overflow-hidden
                        border border-gray-200/60 dark:border-white/[0.06]
                        bg-white/80 dark:bg-[#0a0a0c]/80
                        backdrop-blur-xl
                        transition-all duration-300
                        ${animating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                    `}
                    style={{
                        boxShadow: `0 24px 64px -16px ${activeItem.glowColor}, 0 4px 24px rgba(0,0,0,0.06)`
                    }}
                >
                    {/* Ambient glow blob */}
                    <div
                        className="absolute -top-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                        style={{ background: activeItem.accentColor }}
                    />

                    {/* Grid texture */}
                    <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

                    {/* ── Header ── */}
                    <div className="relative z-10 p-8 pb-6 border-b border-gray-100 dark:border-white/[0.05]">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex flex-col gap-3">
                                {/* Status + icon */}
                                <div className="flex items-center gap-3">
                                    <div className={`
                                        w-9 h-9 rounded-xl flex items-center justify-center
                                        border transition-all duration-300
                                        ${colors.badge}
                                    `}>
                                        <span className={colors.icon}>
                                            {activeItem.icon}
                                        </span>
                                    </div>
                                    <span className={`
                                        text-[10px] font-mono tracking-widest font-bold border rounded-full px-3 py-1 uppercase
                                        flex items-center gap-1.5
                                        ${colors.badge}
                                    `}>
                                        {activeItem.status === 'EN EJECUCIÓN' && (
                                            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} animate-pulse`} />
                                        )}
                                        {activeItem.status}
                                    </span>
                                </div>

                                {/* Role & Context */}
                                <div>
                                    <div className={`text-xs font-mono tracking-widest uppercase mb-1 ${colors.text}`}>
                                        {activeItem.context}
                                    </div>
                                    <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                        {activeItem.role}
                                    </h4>
                                    <p className="text-xs text-gray-400 font-mono mt-1.5">
                                        {activeItem.company} · {activeItem.period}
                                    </p>
                                </div>
                            </div>

                            {/* Corner ID */}
                            <div className="text-right font-mono text-[10px] text-gray-300 dark:text-white/15 leading-relaxed hidden sm:block shrink-0">
                                <div>SYS_ID: {activeItem.id}</div>
                                <div>PORT: 4321</div>
                                <div>STACK: ASTRO</div>
                            </div>
                        </div>
                    </div>

                    {/* ── Body ── */}
                    <div className="relative z-10 p-8 flex flex-col gap-7">

                        {/* Description + bullets */}
                        <div className="flex flex-col gap-4">
                            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                                {activeItem.desc}
                            </p>
                            <ul className="flex flex-col gap-2.5">
                                {activeItem.bullets.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                                        <span className={`font-mono mt-0.5 shrink-0 font-bold ${colors.text}`}>
                                            {String(idx + 1).padStart(2, '0')}.
                                        </span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Stats */}
                        <div className="p-5 rounded-2xl bg-gray-50/80 dark:bg-white/[0.02] border border-gray-100 dark:border-white/[0.04] flex flex-col gap-4">
                            <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
                                Métricas de rendimiento
                            </div>
                            <div className="flex flex-col gap-3.5">
                                {activeItem.stats.map((stat, idx) => (
                                    <StatBar
                                        key={`${activeIndex}-${idx}`}
                                        label={stat.label}
                                        value={stat.value}
                                        color={activeItem.statusColor}
                                        animate={animating}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {activeItem.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1.5 text-[10px] font-mono tracking-wider rounded-xl border border-gray-200 dark:border-white/[0.06] text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-white/[0.03] hover:border-gray-300 dark:hover:border-white/10 transition-colors duration-200"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
