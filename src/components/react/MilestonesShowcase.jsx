import React, { useState, useRef } from 'react';

const MILESTONES = [
    {
        id: 'inacap',
        title: 'Ingeniería en Informática',
        institution: 'INACAP',
        period: '2021 - 2025',
        type: 'EDUCACIÓN FORMAL',
        status: 'Completado',
        credentialId: 'INC-2025-INF99',
        focus: 'Arquitectura de software, redes, bases de datos relacionales, gestión de proyectos y optimización.',
        color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
        brandGlow: 'rgba(16, 185, 129, 0.15)',
        details: [
            'Ingeniería de software, análisis y patrones de desarrollo avanzados.',
            'Tesis técnica en arquitecturas escalables basadas en microservicios.',
            'Administración y modelado de bases de datos relacionales robustas.'
        ]
    },
    {
        id: 'aws',
        title: 'AWS Certified Cloud Practitioner',
        institution: 'Amazon Web Services (AWS)',
        period: '2024',
        type: 'CERTIFICACIÓN CLOUD',
        status: 'Activo',
        credentialId: 'AWS-CCP-8812903',
        focus: 'Infraestructura cloud, seguridad, computación serverless, bases de datos y red VPC.',
        color: 'from-orange-500/20 to-yellow-500/20 border-orange-500/30 text-orange-400',
        brandGlow: 'rgba(249, 115, 22, 0.15)',
        details: [
            'Dominio de servicios core (EC2, S3, RDS, Lambda, VPC, IAM).',
            'Diseño de arquitecturas redundantes y de alta disponibilidad.',
            'Seguridad compartida, encriptación y optimización de costos.'
        ]
    },
    {
        id: 'alura',
        title: 'Desarrollador Full Stack',
        institution: 'Alura Latam & Oracle Next Education',
        period: '2024',
        type: 'ESPECIALIZACIÓN WEB',
        status: 'Completado',
        credentialId: 'ONE-ALU-77610',
        focus: 'Desarrollo web moderno, metodologías ágiles, Java backend y React frontend.',
        color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400',
        brandGlow: 'rgba(59, 130, 246, 0.15)',
        details: [
            'Formación en programación orientada a objetos y patrones lógicos.',
            'Construcción de aplicaciones SPA reactivas y servidores backend.',
            'Control de versiones avanzado con Git y trabajo ágil.'
        ]
    },
    {
        id: 'efset',
        title: 'EF SET English Certificate (C2)',
        institution: 'EF Standard English Test',
        period: '2023',
        type: 'ACREDITACIÓN IDIOMA',
        status: 'Vigente',
        credentialId: 'EF-SET-C2-PRO',
        focus: 'Competencia lingüística completa en idioma inglés bilingüe en contextos profesionales.',
        color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30 text-purple-400',
        brandGlow: 'rgba(168, 85, 247, 0.15)',
        details: [
            'Nivel C2 Proficiente: Dominio nativo para entornos de ingeniería.',
            'Comprensión total de documentación técnica y especificaciones.',
            'Capacidad probada para equipos multiculturales en inglés.'
        ]
    }
];

export default function MilestonesShowcase() {
    const [activeId, setActiveId] = useState('inacap');
    const badgeRef = useRef(null);

    const activeItem = MILESTONES.find(m => m.id === activeId);

    const handleMouseMove = (e) => {
        const badge = badgeRef.current;
        if (!badge) return;

        const rect = badge.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 12; // Max 12 deg
        const rotateY = ((x - centerX) / centerX) * 12;

        badge.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
        badge.style.setProperty('--glow-x', `${x}px`);
        badge.style.setProperty('--glow-y', `${y}px`);
    };

    const handleMouseLeave = () => {
        const badge = badgeRef.current;
        if (!badge) return;
        badge.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-stretch">
            {/* Left: Milestones List */}
            <div className="lg:col-span-5 flex flex-col gap-4">
                {MILESTONES.map(item => {
                    const isActive = activeId === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActiveId(item.id)}
                            className={`text-left p-6 rounded-[2rem] border transition-all duration-300 flex flex-col gap-2 relative overflow-hidden group select-none
                                ${isActive
                                    ? 'bg-white dark:bg-[#0c0c0e]/80 border-emerald-500/30 shadow-[0_15px_30px_rgba(16,185,129,0.03)]'
                                    : 'bg-transparent border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50/50 dark:hover:bg-[#0c0c0e]/10'
                                }
                            `}
                        >
                            <div className="flex justify-between items-center w-full">
                                <span className={`text-[10px] font-mono tracking-wider font-bold transition-colors
                                    ${isActive ? 'text-emerald-500' : 'text-gray-400'}
                                `}>
                                    {item.type}
                                </span>
                                <span className="font-mono text-xs opacity-60">
                                    {item.period}
                                </span>
                            </div>
                            <h3 className={`text-lg font-bold tracking-tight mt-1 transition-colors
                                ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-300'}
                            `}>
                                {item.title}
                            </h3>
                            <span className="text-xs text-gray-400 font-mono mt-1">
                                {item.institution}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Right: Realistic 3D Interactive Certificate Card */}
            <div className="lg:col-span-7 flex items-center justify-center">
                <div
                    ref={badgeRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="w-full p-8 md:p-10 rounded-[2.5rem] bg-gray-50 dark:bg-[#0c0c0e]/40 border border-gray-200/50 dark:border-white/5 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[480px] transition-transform duration-200 ease-out select-none cursor-none"
                    style={{
                        boxShadow: `0 30px 60px -20px ${activeItem.brandGlow}`
                    }}
                >
                    {/* Glowing Aura spotlights */}
                    <div 
                        className="absolute inset-0 pointer-events-none opacity-50"
                        style={{
                            background: `radial-gradient(220px circle at var(--glow-x, 0px) var(--glow-y, 0px), ${activeItem.brandGlow.replace('0.15', '0.08')}, transparent 80%)`
                        }}
                    />

                    {/* Holographic lines/grid visual layer */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40 dark:opacity-60" />

                    {/* Badge Top Header */}
                    <div className="flex justify-between items-start border-b border-gray-200/50 dark:border-white/5 pb-6 relative z-10">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono tracking-widest text-emerald-500 dark:text-emerald-400 font-bold uppercase">
                                VERIFIED CREDENTIAL
                            </span>
                            <h4 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-1">
                                {activeItem.title}
                            </h4>
                            <span className="text-xs text-gray-400 font-mono mt-0.5">
                                {activeItem.institution}
                            </span>
                        </div>

                        {/* Spinning Hologram security seal */}
                        <div className="w-16 h-16 rounded-full border border-dashed border-emerald-500/40 dark:border-emerald-500/20 flex items-center justify-center p-1.5 animate-[spin_20s_linear_infinite] relative">
                            <div className="absolute inset-2 rounded-full border border-dotted border-emerald-500/20" />
                            <svg className="w-8 h-8 text-emerald-500/60 dark:text-emerald-500/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                <path d="M2 12h20" />
                            </svg>
                        </div>
                    </div>

                    {/* Badge Center Details Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-b border-gray-200/50 dark:border-white/5 relative z-10 text-xs font-mono">
                        <div>
                            <span className="text-gray-400 block mb-1">RANGO FECHAS</span>
                            <span className="text-gray-800 dark:text-gray-200 font-medium">{activeItem.period}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-1">TIPO TÍTULO</span>
                            <span className="text-gray-800 dark:text-gray-200 font-medium">{activeItem.type.split(' ')[0]}</span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-1">CÓDIGO ID</span>
                            <span className="text-gray-800 dark:text-gray-200 font-medium truncate block max-w-[120px]" title={activeItem.credentialId}>
                                {activeItem.credentialId}
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-400 block mb-1">ESTADO REGISTRO</span>
                            <span className="text-emerald-500 dark:text-emerald-400 font-bold flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                {activeItem.status.toUpperCase()}
                            </span>
                        </div>
                    </div>

                    {/* Badge Bullet details */}
                    <div className="flex-1 py-6 flex flex-col gap-4 relative z-10">
                        <div className="text-xs text-gray-400 font-mono tracking-wider uppercase">
                            ESPECIFICACIONES DE IMPACTO
                        </div>
                        <ul className="flex flex-col gap-2.5 text-xs text-gray-500 dark:text-gray-300 leading-relaxed font-light">
                            {activeItem.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                    <span className="text-emerald-500 font-mono mt-0.5">&gt;</span>
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Badge Footer */}
                    <div className="pt-4 flex justify-between items-center relative z-10 border-t border-gray-200/50 dark:border-white/5 text-[9px] font-mono text-gray-400">
                        <span>SECURITY ALGORITHM: AES-256</span>
                        <span>VALIDATE VIA BLOCKCHAIN HASH</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
