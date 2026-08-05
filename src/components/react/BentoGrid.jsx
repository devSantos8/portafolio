import React, { useState } from 'react';

export default function BentoGrid() {
    // Lista de Certificados Importantes
    const certificates = [
        {
            title: 'Google AI Essentials',
            issuer: 'Google',
            date: '2026',
            color: 'hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.08)]',
            icon: (
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 6a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
            )
        },
        {
            title: 'DevOps Essential',
            issuer: 'LinkedIn Learning',
            date: '2026',
            color: 'hover:border-teal-500/30 hover:shadow-[0_0_20px_rgba(20,184,166,0.08)]',
            icon: (
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            )
        },
        {
            title: 'Git Fundamentals',
            issuer: 'DataCamp',
            date: '2026',
            color: 'hover:border-orange-500/30 hover:shadow-[0_0_20px_rgba(249,115,22,0.08)]',
            icon: (
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        }
    ];

    // Tecnologías destacadas (con SVGs oficiales limpios)
    const techs = [
        { name: 'React', color: 'hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.12)] text-cyan-400', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <ellipse cx="12" cy="12" rx="10" ry="4.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
        )},
        { name: 'Next.js', color: 'hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)] text-gray-900 dark:text-white', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.665 21.978C16.758 23.284 14.47 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0c6.627 0 12 5.373 12 12 0 3.584-1.572 6.8-4.062 9.004l-7.795-10.428v-.001h-2.115v7.85h1.792V13.88l6.843 9.098zm-3.033-14.428h-1.792v6.611l1.792 2.39V7.55z" />
            </svg>
        )},
        { name: 'Tailwind', color: 'hover:border-sky-400/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.12)] text-sky-400', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"/>
            </svg>
        )},
        { name: 'Python', color: 'hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.12)] text-yellow-500', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.926 2C6.98 2 7.294 4.148 7.294 4.148v2.164h4.721v.687H5.202S2 6.64 2 11.637c0 4.996 2.793 4.814 2.793 4.814h1.668v-2.355s-.09-2.793 2.744-2.793h4.673s2.61.045 2.61-2.52v-4.63S16.892 2 11.926 2zm-2.58 1.53c.475 0 .86.385.86.86 0 .475-.385.86-.86.86a.862.862 0 0 1-.86-.86c0-.475.385-.86.86-.86z"/>
                <path d="M12.074 22c4.946 0 4.632-2.148 4.632-2.148v-2.164h-4.721v-.687h6.813S22 17.36 22 12.363c0-4.996-2.793-4.814-2.793-4.814h-1.668v2.355s.09 2.793-2.744 2.793h-4.673s-2.61-.045-2.61 2.52v4.63S7.108 22 12.074 22zm2.58-1.53a.862.862 0 0 1-.86-.86c0-.475.385-.86.86-.86.475 0 .86.385.86.86 0 .475-.385.86-.86.86z"/>
            </svg>
        )},
        { name: 'TypeScript', color: 'hover:border-blue-600/50 hover:shadow-[0_0_20px_rgba(37,99,235,0.12)] text-blue-500', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 3h21A1.5 1.5 0 0 1 24 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 19.5v-15A1.5 1.5 0 0 1 1.5 3zm10.742 8.799H9.366v7.355h-2.19v-7.355H4.3v-1.74h7.942v1.74zm7.397 4.908c-.482.493-1.164.74-2.046.74-.633 0-1.205-.125-1.716-.375a5.508 5.508 0 0 1-1.393-.974l1.242-1.42c.38.358.78.625 1.202.802.421.176.814.264 1.178.264.444 0 .783-.082 1.018-.246.235-.164.352-.397.352-.7 0-.204-.055-.37-.164-.497-.11-.127-.272-.239-.487-.336-.215-.097-.488-.19-.82-.279l-.668-.182a4.42 4.42 0 0 1-1.226-.525c-.347-.226-.613-.509-.798-.849-.185-.34-.278-.752-.278-1.237 0-.466.126-.889.378-1.269a3.03 3.03 0 0 1 1.077-.963c.466-.245 1.026-.368 1.68-.368.563 0 1.096.108 1.6.324.504.216.945.506 1.323.87l-1.187 1.344a3.916 3.916 0 0 0-1.026-.642 2.766 2.766 0 0 0-1.015-.195c-.387 0-.693.078-.918.234-.225.156-.338.375-.338.657 0 .2.052.363.156.488.104.125.258.232.463.321.205.089.47.177.795.264l.668.176c.551.144.999.324 1.344.54.345.216.608.494.789.834.181.34.272.748.272 1.224 0 .493-.131.94-.393 1.34-.262.4-.64.71-1.135.93z"/>
            </svg>
        )},
        { name: 'NodeJS', color: 'hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.12)] text-green-500', icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1.608c-.344 0-.687.091-.989.268L2.502 6.74a1.98 1.98 0 0 0-.99.1.72.72 0 0 0-.001.002 1.977 1.977 0 0 0-.99 1.716v9.884c0 .7.373 1.346.99 1.717l8.509 4.864c.302.177.645.268.989.268.344 0 .687-.091.989-.268l8.509-4.864a1.977 1.977 0 0 0 .99-1.717V8.558c0-.7-.373-1.346-.99-1.717l-8.509-4.865a1.978 1.978 0 0 0-.989-.268zm0 2.296l7.009 4.005-2.88 1.646-4.129-2.359v-3.292zm-1.5 3.292v3.292L6.371 8.138 10.5 5.827l.001.369zm3 0l4.129 2.359-4.129 2.359V8.119zm-3 4.708l4.129 2.359-4.129 2.359-4.129-2.359 4.129-2.359zm-7.499.709l2.999 1.714v3.428L2.999 15.25v-3.428zm14.999 0v3.428l-2.999 1.714v-3.428l2.999-1.714z"/>
            </svg>
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
                            <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate mt-1">sdp interlude</h4>
                            <p className="text-xs text-gray-500 dark:text-neutral-400 truncate">Travis Scott</p>
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
                            href="mailto:joainmonroy12@gmail.com" 
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
