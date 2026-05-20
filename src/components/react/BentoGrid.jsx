import React, { useState } from 'react';

export default function BentoGrid() {
    // Lista de Certificados Importantes
    const certificates = [
        {
            title: 'Desarrollador Full-Stack',
            issuer: 'Alura Latam & Oracle Next Education',
            date: '2024',
            color: 'hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.08)]',
            icon: (
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services (AWS)',
            date: '2024',
            color: 'hover:border-amber-500/30 hover:shadow-[0_0_20px_rgba(245,158,11,0.08)]',
            icon: (
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: 'EF SET English Certificate (C2 Proficient)',
            issuer: 'EF Standard English Test',
            date: '2023',
            color: 'hover:border-sky-500/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.08)]',
            icon: (
                <svg className="w-5 h-5 text-sky-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        }
    ];

    // Tecnologías destacadas
    const techs = [
        { name: 'React', color: 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] text-cyan-400', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2"/><path d="M12 2v20M17 3L7 21M22 7.5L2 16.5M22 16.5L2 7.5M17 21L7 3"/></svg>
        )},
        { name: 'Astro', color: 'hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.12)] text-orange-500', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 22h20L12 2zm0 4l6 12H6l6-12z"/></svg>
        )},
        { name: 'Tailwind', color: 'hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)] text-sky-400', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 6c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4z"/></svg>
        )},
        { name: 'Python', color: 'hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.12)] text-yellow-500', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2a5 5 0 0 0-5 5v2h5v1H7a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h3v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3h3a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-5V9h5a5 5 0 0 0 5-5V2a5 5 0 0 0-5-5h-3v3a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V2z"/></svg>
        )},
        { name: 'TypeScript', color: 'hover:border-blue-600/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.12)] text-blue-500', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9 16H6v-6h3v6zm6 0h-3v-6h3v6z"/></svg>
        )},
        { name: 'NodeJS', color: 'hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.12)] text-green-500', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-18v16"/></svg>
        )}
    ];

    return (
        <section id="bento-skills" className="w-full relative px-4 sm:px-8 md:px-16 pb-32 pt-10">
            {/* Animación del ecualizador */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes bounceHeight {
                    0%, 100% { height: 6px; }
                    50% { height: 26px; }
                }
                .bar-1 { animation: bounceHeight 1.1s ease-in-out infinite; }
                .bar-2 { animation: bounceHeight 0.8s ease-in-out infinite 0.2s; }
                .bar-3 { animation: bounceHeight 1.3s ease-in-out infinite 0.1s; }
                .bar-4 { animation: bounceHeight 0.9s ease-in-out infinite 0.3s; }
                .bar-5 { animation: bounceHeight 1.2s ease-in-out infinite 0.15s; }
            `}} />

            {/* Cabecera de la Sección */}
            <div className="mb-16 flex flex-col items-start gap-4 max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-3 font-bold tracking-widest text-sm uppercase">
                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                        Más sobre mí
                    </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 dark:text-white transition-colors duration-500">
                    Habilidades & Certificaciones
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mt-2">
                    Mi arsenal técnico actual, certificaciones clave y hábitos cotidianos de código.
                </p>
            </div>

            {/* Bento Grid Simétrico de 3 Columnas */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. SPOTIFY NOW PLAYING CARD (1 columna) */}
                <div className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 p-8 flex flex-col justify-between min-h-[260px] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.01)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="flex justify-between items-start z-10 w-full">
                        <span className="text-xs uppercase font-mono tracking-widest text-gray-400 dark:text-neutral-500">Hábitos de código</span>
                        <div className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-500">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.668-.135-.744-.47-.077-.337.135-.669.47-.745 3.848-.878 7.14-.51 9.82.13.296.18.387.563.207.858zm1.225-2.72c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.077-1.182-.413.125-.847-.107-.972-.52-.125-.413.108-.847.52-.972 3.67-1.114 8.243-.57 11.343 1.337.368.226.488.707.26 1.074zm.106-2.833C14.384 8.71 8.563 8.52 5.176 9.548c-.54.163-1.107-.145-1.27-.684-.163-.54.145-1.107.684-1.27 3.882-1.178 10.32-.957 14.4 1.464.484.288.643.91.355 1.395-.288.483-.91.642-1.395.354z"/></svg>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 z-10">
                        {/* Ecualizador Animado */}
                        <div className="w-16 h-16 rounded-2xl bg-neutral-200 dark:bg-neutral-900 border border-gray-300 dark:border-white/5 flex items-center justify-center gap-1 shrink-0">
                            <span className="w-1.5 rounded-full bg-green-500 bar-1"></span>
                            <span className="w-1.5 rounded-full bg-green-500 bar-2"></span>
                            <span className="w-1.5 rounded-full bg-green-500 bar-3"></span>
                            <span className="w-1.5 rounded-full bg-green-500 bar-4"></span>
                            <span className="w-1.5 rounded-full bg-green-500 bar-5"></span>
                        </div>
                        
                        <div className="overflow-hidden">
                            <span className="text-xs text-green-500 font-mono uppercase tracking-widest font-semibold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Sonando ahora
                            </span>
                            <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate mt-1">Sparks</h4>
                            <p className="text-xs text-gray-500 dark:text-neutral-400 truncate">Coldplay</p>
                        </div>
                    </div>
                </div>

                {/* 2. TECNOLOGÍAS DESTACADAS (2 columnas) */}
                <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 p-8 flex flex-col justify-between min-h-[260px] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.01)]">
                    <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="z-10">
                        <span className="text-xs uppercase font-mono tracking-widest text-gray-400 dark:text-neutral-500">Kit Tecnológico</span>
                        <h3 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white mt-1">Ecosistema & Herramientas</h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1.5 max-w-md">
                            Mis herramientas predilectas para desarrollar interfaces fluidas, de alto rendimiento y código mantenible.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 z-10 mt-6">
                        {techs.map((tech, idx) => (
                            <div 
                                key={idx} 
                                className={`flex items-center gap-3 px-4 py-3 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 cursor-none ${tech.color}`}
                            >
                                <span className="opacity-95">{tech.icon}</span>
                                <span className="text-sm font-medium tracking-tight text-gray-900 dark:text-white">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. CERTIFICADOS IMPORTANTES (2 columnas) */}
                <div className="col-span-1 md:col-span-2 group relative overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 p-8 flex flex-col justify-between min-h-[300px] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.01)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="z-10">
                        <span className="text-xs uppercase font-mono tracking-widest text-gray-400 dark:text-neutral-500">Formación y Respaldo</span>
                        <h3 className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white mt-1">Certificaciones Destacadas</h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 mt-1.5 max-w-md">
                            Formación técnica continua y estándares que validan mi compromiso con la excelencia.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3.5 z-10 mt-6 w-full">
                        {certificates.map((cert, idx) => (
                            <div 
                                key={idx} 
                                className={`flex justify-between items-center px-4 py-3.5 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5 transition-all duration-300 cursor-none ${cert.color}`}
                            >
                                <div className="flex items-center gap-3.5 overflow-hidden">
                                    <div className="p-2 rounded-xl bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-white/5 shrink-0">
                                        {cert.icon}
                                    </div>
                                    <div className="overflow-hidden">
                                        <h4 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white truncate">{cert.title}</h4>
                                        <p className="text-xs text-gray-500 dark:text-neutral-400 truncate">{cert.issuer}</p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-mono font-medium text-gray-400 dark:text-neutral-500 shrink-0 ml-4">{cert.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. HABLEMOS DE TU PROYECTO (1 columna) */}
                <div className="col-span-1 group relative overflow-hidden rounded-[2rem] bg-gray-50 dark:bg-[#0c0c0c] border border-gray-200 dark:border-white/5 p-8 flex flex-col justify-between min-h-[300px] transition-all duration-500 hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_10px_30px_rgba(255,255,255,0.01)]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-teal-500/5 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <span className="text-xs uppercase font-mono tracking-widest text-gray-400 dark:text-neutral-500 z-10">Conexión</span>

                    <div className="z-10 my-4">
                        <h3 className="text-3xl font-bold tracking-tighter text-gray-900 dark:text-white leading-tight">
                            ¿Tienes una idea en mente?
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 mt-2">
                            Siempre abierto a colaborar en proyectos ambiciosos, mentoría o roles full-stack.
                        </p>
                    </div>

                    <div className="z-10 w-full">
                        <a 
                            href="mailto:joainsantos@gmail.com" 
                            className="w-full py-4 px-6 rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors font-semibold tracking-tight text-center block text-sm shadow-xl active:scale-[0.98] transition-transform duration-100 cursor-none"
                        >
                            Hablemos hoy ➔
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
