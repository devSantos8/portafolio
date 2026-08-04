import React, { useState, useRef } from 'react';

const PHILOSOPHIES = [
    {
        id: '01',
        title: 'Rendimiento Extremo',
        subtitle: 'SITIOS ULTRA-VELOCES',
        desc: 'Código optimizado para interactividad instantánea, tiempos de carga mínimos y máximo rendimiento SEO.',
        color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
        glow: 'rgba(16, 185, 129, 0.15)',
        iconPath: (
            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        )
    },
    {
        id: '02',
        title: 'Código Seguro',
        subtitle: 'ARQUITECTURA ROBUSTA',
        desc: 'TypeScript estricto y patrones limpios para sistemas estables, modulares y fáciles de escalar.',
        color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
        glow: 'rgba(59, 130, 246, 0.15)',
        iconPath: (
            <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        )
    },
    {
        id: '03',
        title: 'DevOps & Cloud',
        subtitle: 'AUTOMATIZACIÓN CONTINUA',
        desc: 'Entornos reproducibles con Docker y pipelines de CI/CD para despliegues rápidos y seguros.',
        color: 'from-cyan-500/20 to-sky-500/20 border-cyan-500/30',
        glow: 'rgba(6, 182, 212, 0.15)',
        iconPath: (
            <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a3.75 3.75 0 00.75 2.25m19.5-2.25a3.75 3.75 0 01-.75 2.25m-1.5-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm-12 0a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />
            </svg>
        )
    },
    {
        id: '04',
        title: 'Estética Interactiva',
        subtitle: 'EXPERIENCIAS DIGITALES',
        desc: 'Experiencias inmersivas con animaciones fluidas a 60fps sincronizadas con el scroll.',
        color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
        glow: 'rgba(168, 85, 247, 0.15)',
        iconPath: (
            <svg className="w-8 h-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 01-1.622-3.395m3.42 3.42a15.995 15.995 0 005.043-.025m-1.622-3.395a15.998 15.998 0 011.62-3.388m4.52 7.908a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-2.928-2.928a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-2.928-2.928a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.4 4.417a5.25 5.25 0 10-7.424 7.424 5.25 5.25 0 007.424-7.424z" />
            </svg>
        )
    }
];

export default function PhilosophyShowcase() {
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const cardRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 10; // Max 10 deg
        const rotateY = ((x - centerX) / centerX) * 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.setProperty('--spotlight-x', `${x}px`);
        card.style.setProperty('--spotlight-y', `${y}px`);
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        if (!card) return;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {PHILOSOPHIES.map((item, idx) => {
                const isHovered = hoveredIdx === idx;
                const isAnyHovered = hoveredIdx !== null;

                return (
                    <div
                        key={item.id}
                        ref={(el) => (cardRefs.current[idx] = el)}
                        onMouseMove={(e) => {
                            setHoveredIdx(idx);
                            handleMouseMove(e, idx);
                        }}
                        onMouseLeave={() => {
                            setHoveredIdx(null);
                            handleMouseLeave(idx);
                        }}
                        className={`p-8 rounded-[2.5rem] bg-gray-50/70 dark:bg-[#0c0c0e]/40 border border-gray-200/50 dark:border-white/5 backdrop-blur-md relative overflow-hidden transition-all duration-500 ease-out select-none cursor-none flex flex-col justify-between min-h-[360px]
                            ${isAnyHovered && !isHovered ? 'opacity-30 scale-[0.98]' : 'opacity-100'}
                        `}
                        style={{
                            boxShadow: isHovered ? `0 20px 40px -15px ${item.glow}` : 'none'
                        }}
                    >
                        {/* Spotlight Radial Background */}
                        <div 
                            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                background: `radial-gradient(180px circle at var(--spotlight-x, 0px) var(--spotlight-y, 0px), rgba(16, 185, 129, 0.05), transparent 80%)`
                            }}
                        />

                        {/* Top Section */}
                        <div className="flex justify-between items-start w-full relative z-10">
                            <div className="flex flex-col gap-1">
                                <span className="text-[10px] font-mono tracking-widest text-emerald-500 dark:text-emerald-400 font-bold uppercase">
                                    {item.subtitle}
                                </span>
                                <h3 className="text-2xl font-bold tracking-tight mt-1 text-gray-900 dark:text-white">
                                    {item.title}
                                </h3>
                            </div>
                            <span className="font-mono text-3xl font-bold opacity-10 dark:opacity-20 text-gray-400 dark:text-gray-600">
                                {item.id}
                            </span>
                        </div>

                        {/* Middle Section (Dynamic SVG Animation) */}
                        <div className="my-8 flex justify-center items-center h-20 w-full relative z-10">
                            <div 
                                className={`p-4 rounded-3xl bg-white dark:bg-[#111113]/80 border border-gray-100 dark:border-white/5 shadow-sm transition-all duration-700
                                    ${isHovered ? 'scale-125 rotate-[360deg] border-emerald-500/20' : 'scale-100 rotate-0'}
                                `}
                            >
                                {item.iconPath}
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed font-light relative z-10">
                            {item.desc}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
