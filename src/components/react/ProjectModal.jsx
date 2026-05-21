import React, { useState, useEffect } from 'react';
import { projects } from '../../data/projects';

export default function ProjectModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [project, setProject] = useState(null);
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        const handleOpen = (e) => {
            const foundProject = projects.find(p => p.id === e.detail.projectId);
            if (foundProject) {
                setProject(foundProject);
                setIsOpen(true);
                // Lock body scroll
                document.body.style.overflow = 'hidden';
                // Trigger animation delay
                setTimeout(() => setAnimateIn(true), 50);
            }
        };

        window.addEventListener('open-project-modal', handleOpen);
        return () => {
            window.removeEventListener('open-project-modal', handleOpen);
        };
    }, []);

    const handleClose = () => {
        setAnimateIn(false);
        setTimeout(() => {
            setIsOpen(false);
            setProject(null);
            // Restore body scroll
            document.body.style.overflow = '';
        }, 300); // match transition duration
    };

    if (!isOpen || !project) return null;

    const isDarkHero = project.backgroundColor === '#1c1c1c';
    const textColorClass = isDarkHero ? 'text-white' : 'text-gray-900';
    const textMutedClass = isDarkHero ? 'text-white/60' : 'text-gray-600';
    const borderClass = isDarkHero ? 'border-white/10' : 'border-gray-900/10';

    return (
        <div className="fixed inset-0 z-[100] flex items-end justify-center px-0 overflow-hidden">
            
            {/* Backdrop Blur */}
            <div 
                className={`absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer transition-opacity duration-500 ease-out will-change-opacity ${animateIn ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleClose}
            />

            {/* Bottom Drawer Box */}
            <div 
                className={`relative w-full h-[95vh] bg-gray-50 dark:bg-[#0c0c0e] rounded-t-[2.5rem] sm:rounded-t-[3rem] border-t border-gray-200/50 dark:border-white/10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform transform-gpu ${animateIn ? 'translate-y-0' : 'translate-y-full'}`}
            >
                {/* Drag Handle Indicator */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center items-center z-50 pointer-events-none">
                    <div className="w-16 h-1.5 rounded-full bg-gray-300 dark:bg-white/20 mt-2"></div>
                </div>
                
                {/* ─── Header ─── */}
                <div className="relative z-20 border-b border-gray-200/40 dark:border-white/5 bg-gray-50 dark:bg-[#0c0c0e] w-full">
                    <div className="max-w-7xl mx-auto w-full flex items-center justify-between px-6 pb-4 pt-6 md:px-8">
                    
                    {/* Brand Info */}
                    <div className="flex items-center gap-3">
                        <div 
                            className="w-10 h-10 rounded-xl flex items-center justify-center border font-mono text-sm font-bold shadow-sm transition-transform duration-300 hover:scale-105"
                            style={{ 
                                backgroundColor: project.backgroundColor,
                                borderColor: isDarkHero ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
                                color: isDarkHero ? '#fff' : '#000'
                            }}
                        >
                            {project.title.slice(0, 2).toUpperCase()}
                        </div>
                        <div>
                            <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                                {project.title}
                            </h4>
                            <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                                {project.subtitle}
                            </span>
                        </div>
                    </div>

                    {/* Action buttons + Close */}
                    <div className="flex items-center gap-2">
                        {project.liveUrl && (
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-black/5 dark:shadow-white/5 cursor-pointer items-center gap-1.5"
                            >
                                Visitar Web
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>
                        )}
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hidden sm:inline-flex px-4 py-2 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest hover:border-emerald-500/20 hover:scale-105 active:scale-95 transition-all duration-200 items-center gap-1.5"
                            >
                                GitHub
                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                            </a>
                        )}

                        <button 
                            onClick={handleClose}
                            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-250 dark:bg-white/5 dark:hover:bg-white/10 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-200"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    </div>

                </div>

                {/* ─── Body Scroll Container ─── */}
                <div className="flex-1 overflow-y-auto custom-scrollbar relative z-10 w-full" data-lenis-prevent="true">
                    <div className="max-w-7xl mx-auto w-full p-6 md:p-10 flex flex-col gap-10">
                    
                    {/* Device Mockup Showcase Frame */}
                    <div 
                        className="w-full aspect-[16/9] rounded-[2rem] border border-gray-200/50 dark:border-white/5 flex flex-col overflow-hidden relative shadow-lg group-hover:scale-[1.005] transition-all duration-300"
                        style={{ backgroundColor: project.backgroundColor }}
                    >
                        {/* Browser mockup top bar */}
                        <div className={`w-full h-8 sm:h-10 border-b ${isDarkHero ? 'border-white/10' : 'border-gray-900/10'} px-4 flex items-center gap-1.5 bg-white/50 dark:bg-black/40 relative z-20`}>
                            <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${isDarkHero ? 'bg-white/20' : 'bg-gray-950/20'}`}></span>
                            <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${isDarkHero ? 'bg-white/20' : 'bg-gray-950/20'}`}></span>
                            <span className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${isDarkHero ? 'bg-white/20' : 'bg-gray-950/20'}`}></span>
                            <div className={`mx-auto text-[9px] font-mono tracking-widest uppercase ${isDarkHero ? 'text-white/40' : 'text-gray-500'}`}>
                                {project.title.toLowerCase()}.dev
                            </div>
                        </div>

                        {/* Showcase internal content */}
                        <div className="flex-1 w-full relative flex flex-col justify-center items-center p-6 overflow-hidden select-none">
                            {/* Technical grid backdrop */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none z-0"></div>
                            
                            {/* Giant Outlined Watermark background */}
                            <div className={`absolute text-[12vw] sm:text-[7vw] font-black tracking-tighter uppercase select-none font-sans z-0 pointer-events-none ${isDarkHero ? 'text-white/[0.02]' : 'text-gray-900/[0.04]'}`}>
                                {project.title}
                            </div>

                            {/* Center Logo/Icon */}
                            <div className="relative z-10 text-center flex flex-col items-center max-w-sm">
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-[1.25rem] ${isDarkHero ? 'bg-white/10 border-white/20' : 'bg-black/5 border-black/10'} border flex items-center justify-center mb-4 transition-transform duration-500 hover:scale-105`}>
                                    <span className={`font-mono text-sm sm:text-xl font-bold ${isDarkHero ? 'text-white' : 'text-gray-900'}`}>
                                        {project.title.slice(0, 2).toUpperCase()}
                                    </span>
                                </div>
                                <span className={`text-sm sm:text-base font-mono tracking-widest uppercase mb-1 font-bold ${isDarkHero ? 'text-white' : 'text-gray-900'}`}>
                                    {project.title}
                                </span>
                                <span className={`text-[10px] sm:text-xs font-mono tracking-wider ${isDarkHero ? 'text-white/40' : 'text-gray-500'}`}>
                                    {project.subtitle}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section (Mobbin Style) */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 mt-4">
                        
                        {/* Left: Main Content (Challenge, Solution, Features) */}
                        <div className="flex-1 flex flex-col gap-12">
                            
                            {/* Challenge */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    El Desafío
                                </h3>
                                <p className="text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
                                    {project.challenge || project.description}
                                </p>
                            </div>

                            {/* Solution */}
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    La Solución
                                </h3>
                                <p className="text-base text-gray-600 dark:text-gray-400 font-normal leading-relaxed">
                                    {project.solution || project.fullDescription || 'Implementación de un sistema a medida, enfocado en rendimiento y estabilidad técnica.'}
                                </p>
                            </div>

                            {/* Features */}
                            {project.features && project.features.length > 0 && (
                                <div className="flex flex-col gap-5 pt-4">
                                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        Características Principales
                                    </h3>
                                    <ul className="flex flex-col gap-4">
                                        {project.features.map((feature, idx) => (
                                            <li key={idx} className="flex gap-4 items-start">
                                                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 text-xs font-medium shrink-0 mt-0.5">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                        </div>

                        {/* Right: Meta Specs Sidebar */}
                        <div className="w-full md:w-64 lg:w-72 shrink-0 flex flex-col gap-8">
                            
                            <div>
                                <span className="block text-[11px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-2">
                                    Rol
                                </span>
                                <span className="text-base font-medium text-gray-900 dark:text-gray-200">
                                    {project.role || 'Desarrollador'}
                                </span>
                            </div>
                            
                            <hr className="border-gray-200 dark:border-white/5" />

                            <div>
                                <span className="block text-[11px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-2">
                                    Cliente
                                </span>
                                <span className="text-base font-medium text-gray-900 dark:text-gray-200">
                                    {project.client || 'Independiente'}
                                </span>
                            </div>

                            <hr className="border-gray-200 dark:border-white/5" />

                            <div>
                                <span className="block text-[11px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-2">
                                    Año
                                </span>
                                <span className="text-base font-medium text-gray-900 dark:text-gray-200">
                                    {project.year}
                                </span>
                            </div>

                            <hr className="border-gray-200 dark:border-white/5" />

                            <div>
                                <span className="block text-[11px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 uppercase mb-3">
                                    Tecnologías
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 rounded-lg border border-gray-200 dark:border-white/5 text-[13px] font-medium text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-white/[0.02]">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Mobile buttons */}
                    <div className="flex sm:hidden flex-col gap-2 pt-4">
                        {project.liveUrl && (
                            <a 
                                href={project.liveUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-3.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-center shadow-lg"
                            >
                                Visitar Web
                            </a>
                        )}
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-full py-3.5 border border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-300 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-center"
                            >
                                GitHub
                            </a>
                        )}
                    </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
