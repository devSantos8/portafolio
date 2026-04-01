// Exportamos la función para poder llamarla desde Astro en cada cambio de ruta
export const initAnimations = () => {
	if (typeof window !== 'undefined') {
		Promise.all([
			import('gsap'),
			import('gsap/ScrollTrigger'),
			import('lenis')
		]).then(([gsapModule, scrollTriggerModule, lenisModule]) => {
			const gsap = gsapModule.default;
			const { ScrollTrigger } = scrollTriggerModule;
			const Lenis = lenisModule.default;

			gsap.registerPlugin(ScrollTrigger);

			// Matar triggers anteriores si existen (para evitar duplicados en navegaciones SPA)
			ScrollTrigger.getAll().forEach(t => t.kill());

			const forceMotion = true;
		const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const shouldAnimate = forceMotion || !prefersReducedMotion;

		const sectionTargets = Array.from(document.querySelectorAll('section[id]')).filter((section) => section.id !== 'top');
		const sectionChildrenMap = new Map();

		const uniqueElements = (elements) => Array.from(new Set(elements)).filter(Boolean);

		const sectionProfiles = {
			Experiencia: {
				fromTransform: 'translate3d(0,120px,0) scale(0.95) rotateX(7deg)',
				sectionAnimation: {
					y: 0,
					scale: 1,
					rotateX: 0,
					filter: 'blur(0px)',
					duration: 1.05,
					ease: 'power3.out',
				},
				itemFromTransform: 'translateY(36px)',
				itemAnimation: { y: 0, scale: 1, duration: 0.78, ease: 'power2.out' },
				itemStagger: 0.095,
				itemDelay: 0.12,
			},
			'Sobre-mi': {
				fromTransform: 'translate3d(0,90px,0) scale(0.93)',
				sectionAnimation: {
					y: 0,
					scale: 1,
					filter: 'blur(0px)',
					duration: 0.98,
					ease: 'power3.out',
				},
				itemFromTransform: 'translateY(30px)',
				itemAnimation: { y: 0, scale: 1, duration: 0.78, ease: 'power2.out' },
				itemStagger: 0.09,
				itemDelay: 0.12,
			},
			Contacto: {
				fromTransform: 'translate3d(0,130px,0) scale(0.92)',
				sectionAnimation: {
					y: 0,
					scale: 1,
					filter: 'blur(0px)',
					duration: 0.92,
					ease: 'power2.out',
				},
				itemFromTransform: 'translateY(24px)',
				itemAnimation: { y: 0, scale: 1, duration: 0.7, ease: 'power1.out' },
				itemStagger: 0.1,
				itemDelay: 0.1,
			},
		};

		const defaultProfile = {
			fromTransform: 'translate3d(0,84px,0) scale(0.95)',
			sectionAnimation: {
				y: 0,
				scale: 1,
				filter: 'blur(0px)',
				duration: 0.96,
				ease: 'power3.out',
			},
			itemFromTransform: 'translateY(24px)',
			itemAnimation: { y: 0, scale: 1, duration: 0.72, ease: 'power2.out' },
			itemStagger: 0.09,
			itemDelay: 0.1,
		};

		const getSectionProfile = (id) => sectionProfiles[id] || defaultProfile;

		const getChildTargets = (section) => {
			switch (section.id) {
				case 'Experiencia':
					return uniqueElements(Array.from(section.querySelectorAll('.fade-in-section, .group')));
				case 'Proyectos':
					// Seleccionamos las tarjetas para que entren con una animación rápida
					return uniqueElements(Array.from(section.querySelectorAll('.fade-in-section, .fade-in-section')));
				case 'Sobre-mi':
					return []; // Vaciado porque lo controlamos con el ScrollTrigger ultra agresivo más abajo
				case 'Habilidades':
					return uniqueElements(Array.from(section.querySelectorAll('.fade-in-section, .skills-container .grid > article')));
				case 'Contacto':
					return uniqueElements(Array.from(section.querySelectorAll('.fade-in-section, .fade-in-section > *')));
				default:
					return uniqueElements(Array.from(section.querySelectorAll('.fade-in-section, article')));
			}
		};

		const revealAll = () => {
			sectionTargets.forEach((section) => {
				gsap.set(section, { opacity: 1, transform: 'none', filter: 'none', willChange: 'auto' });
				(sectionChildrenMap.get(section) || []).forEach((target) => {
					gsap.set(target, { opacity: 1, transform: 'none', willChange: 'auto' });
				});
			});
		};

		try {
			if (shouldAnimate && 'IntersectionObserver' in window) {
				sectionTargets.forEach((section) => {
					const profile = getSectionProfile(section.id);
					gsap.set(section, {
						opacity: 0,
						transform: profile.fromTransform,
						filter: 'blur(10px)',
						willChange: 'transform, opacity, filter',
					});

					const childTargets = getChildTargets(section);
					sectionChildrenMap.set(section, childTargets);
					childTargets.forEach((target) => {
						gsap.set(target, {
							opacity: 0,
							transform: profile.itemFromTransform,
							willChange: 'transform, opacity',
						});
					});
				});

				const sectionObserver = new IntersectionObserver(
					(entries, observer) => {
						entries.forEach((entry) => {
							if (!entry.isIntersecting) return;

							const section = entry.target;
							if (section.getAttribute('data-section-animated') === 'true') return;

							section.setAttribute('data-section-animated', 'true');
							const profile = getSectionProfile(section.id);

							gsap.to(section, {
								opacity: 1,
								...profile.sectionAnimation,
								onComplete: () => {
									gsap.set(section, { filter: 'none', willChange: 'auto' });
								},
							});

							const childTargets = sectionChildrenMap.get(section) || [];
							if (childTargets.length > 0) {
								gsap.to(childTargets, {
									opacity: 1,
									...profile.itemAnimation,
									stagger: profile.itemStagger,
									delay: profile.itemDelay,
									onComplete: () => {
										childTargets.forEach((target) => {
											gsap.set(target, { willChange: 'auto' });
										});
									},
								});
							}

							observer.unobserve(section);
						});
					},
					{ root: null, threshold: 0.15, rootMargin: '0px 0px -12% 0px' }
				);

				sectionTargets.forEach((section) => sectionObserver.observe(section));
			} else {
				revealAll();
			}
		} catch (error) {
			console.error('GSAP section animation failed:', error);
			revealAll();
		}

		// ============================================
		// INITIALIZE LENIS FIRST (before ScrollTrigger)
		// ============================================
		const lenis = new Lenis({
			duration: 1.0,
			easing: (t) => 1 - Math.pow(1 - t, 4),
			smoothWheel: true,
			wheelMultiplier: 1,
			touchMultiplier: 2,
		});

		// Connect Lenis scroll events to ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update);

		// Use GSAP ticker to drive Lenis
		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});
		
		// Expose Lenis globally for custom anchor routing
		window.lenis = lenis;

		gsap.set('body', { overscrollBehavior: 'none' });

		// ============================================
		// INITIAL PAGE LOAD TRANSITION
		// ============================================
		const pageLoadTl = gsap.timeline();
		
		// Ocultar elementos iniciales para la entrada
		gsap.set('.animate-fade-up, .animate-fade-up-delay-1, .animate-fade-up-delay-2, .animate-fade-up-delay-3', {
			autoAlpha: 0,
			y: 60,
			rotationX: 5,
			filter: 'blur(8px)',
			scale: 0.98
		});

		pageLoadTl
			.to('.animate-fade-up, .animate-fade-up-delay-1, .animate-fade-up-delay-2, .animate-fade-up-delay-3', {
				y: 0,
				rotationX: 0,
				autoAlpha: 1,
				filter: 'blur(0px)',
				scale: 1,
				duration: 1.2,
				stagger: 0.15,
				ease: 'power3.out',
				clearProps: 'all' // Limpiar para que no interfiera CSS o hover effects después
			});

		// ============================================
		// HERO PARALLAX SCROLL ANIMATION
		// ============================================
		const heroSection = document.getElementById('top');
		const heroContainer = heroSection?.querySelector('.relative');
		
		if (heroSection && heroContainer) {
			gsap.to(heroContainer, {
				scrollTrigger: {
					trigger: heroSection,
					start: 'top top',
					end: 'bottom top',
					scrub: true,
				},
				y: window.innerHeight * 0.2, // Baja la imagen suavemente creando paraláx
				scale: 0.85,                 // Se achica en el fondo
				opacity: 0,                  // Se desvanece
				filter: 'blur(10px)',        // Se desenfoca un poco
				transformOrigin: 'top center',
				ease: 'none'
			});
		}

		// ============================================
		// PROJECT CARDS SCROLL REVEAL (Despues de Trayectoria)
		// ============================================
		const projCards = document.querySelectorAll('#Proyectos .fade-in-section');
		
		projCards.forEach((card, index) => {
			gsap.fromTo(card,
				{
					opacity: 0,
					y: 60,
					scale: 0.98,
				},
				{
					scrollTrigger: {
						trigger: card,
						start: 'top 85%', // Asoma cuando la tarjeta entra al 85% de la ventana
						toggleActions: 'play none none none' // Se reproduce una sola vez cuando scrolleas hacia abajo
					},
					opacity: 1,
					y: 0,
					scale: 1,
					duration: 1,
					delay: index * 0.1, // Delay escalonado (cascada fluida)
					ease: 'power3.out',
					clearProps: 'transform' // Evita que afecte a la animación del hover luego
				}
			);
		});

		// ============================================
		// ABOUT ME (Sobre mí) HORIZONTAL SCROLL
		// ============================================
		const aboutSection = document.getElementById('Sobre-mi');
		if(aboutSection) {
			const horizontalWrapper = aboutSection.querySelector('.horizontal-scroll-wrapper');
			const bgOverlay = document.getElementById('about-bg-overlay');
			
			if (horizontalWrapper) {
				gsap.to(horizontalWrapper, {
					x: () => -(horizontalWrapper.scrollWidth - window.innerWidth), 
					ease: "none",
					scrollTrigger: {
						trigger: aboutSection,
						start: "center center", 
						end: () => "+=" + (horizontalWrapper.scrollWidth * 0.85), // Reducido para que termine un poco más rápido
						pin: true,
						scrub: 0.3, // Reducido de 1.2 a 0.3 para una respuesta casi inmediata, eliminando el "lag"
						invalidateOnRefresh: true, 
						onEnter: () => bgOverlay && (bgOverlay.style.opacity = '1'),
						onLeave: () => bgOverlay && (bgOverlay.style.opacity = '0'),
						onEnterBack: () => bgOverlay && (bgOverlay.style.opacity = '1'),
						onLeaveBack: () => bgOverlay && (bgOverlay.style.opacity = '0'),
					}
				});
			}
		}

		// ============================================
		// HABILIDADES REVEAL (Complemento a Sobre Mí)
		// ============================================
		const habilidadesSection = document.getElementById('Habilidades');
		if(habilidadesSection && aboutSection) {
			// 1. Transición de salida de "Sobre mí": Se difumina pero SIN afectar la escala 
			// para no romper el pin-spacer de GSAP (Bug de layout)
			const aboutContent = aboutSection.querySelector('.horizontal-scroll-wrapper');
			
			if (aboutContent) {
				gsap.to(aboutContent, {
					opacity: 0,
					// Quitamos el blur porque puede causar bugs gráficos severos en algunos navegadores al combinarse con transform/pin
					scrollTrigger: {
						trigger: habilidadesSection,
						start: "top 95%", 
						end: "top 40%",   
						scrub: true,
					}
				});
			}

			const header = habilidadesSection.querySelector('.skills-header');
			const container = habilidadesSection.querySelector('.skills-container');
			const cards = habilidadesSection.querySelectorAll('.skill-card');

			// 2. Animación de entrada de Habilidades muy limpia
			let tlHabilidades = gsap.timeline({
				scrollTrigger: {
					trigger: habilidadesSection,
					start: "top 75%", // Inicia un poco después de que Sobre Mí empieza a desaparecer
					end: "top 20%",
					toggleActions: "play none none reverse",
				}
			});

			tlHabilidades.fromTo([header, container], 
				{ y: 60, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
			).fromTo(cards, 
				{ y: 40, opacity: 0 },
				{ y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" },
				"-=0.4" // Se solapa con la aparición del contenedor principal
			);
		}

		// ============================================
		// CONTACTO FIN / MARQUEE ANIMATION
		// ============================================
		const contactSection = document.getElementById('Contacto');
		const marqueeContainer = contactSection?.querySelector('.marquee-container');
		const marqueeText = contactSection?.querySelector('.marquee-text');

		if (contactSection && marqueeContainer && marqueeText) {
			// Calculamos el ancho del texto vs el contenedor para un scroll perfecto
			let textWidth = marqueeText.offsetWidth;
			let containerWidth = marqueeContainer.offsetWidth;
			
			// Si el texto es mas pequeño que la panatalla se asegura un minimo de desplazamiento
			let distance = textWidth > containerWidth ? -(textWidth - containerWidth) : -(containerWidth * 0.5);

			gsap.fromTo(marqueeText, 
				{ x: window.innerWidth * 0.2 }, // Empieza asomandose por derecha
				{
					x: distance - (window.innerWidth * 0.3), // Termina perdiéndose por izquierda
					ease: "none",
					scrollTrigger: {
						trigger: contactSection,
						start: "top bottom", // Inicia al revelar el section de contacto
						end: "bottom center", // Termina cuando llegas al footer
						scrub: 0.5, // Suavizado para que se vea premium y sin saltos bruscos
					}
				}
			);
		}

		// ============================================
		// PROJECT CARDS HOVER ANIMATIONS (Removido para usar CSS puro Tailwind)
		// ============================================
		// Animaciones controladas ahora por CSS (hover:shadow, dark:hover:bg, etc.) para soportar bien Light/Dark mode.

		// ============================================
		// BUTTON HOVER ANIMATIONS
		// ============================================
		const buttons = document.querySelectorAll('a[class*="rounded-full"]');
		buttons.forEach((button) => {
			button.addEventListener('mouseenter', () => {
				gsap.to(button, {
					duration: 0.3,
					scale: 1.05,
					ease: 'back.out(1.7)',
				});
			});

			button.addEventListener('mouseleave', () => {
				gsap.to(button, {
					duration: 0.3,
					scale: 1,
					ease: 'back.out(1.7)',
				});
			});
		});

		// ============================================
		// SKILL CARDS HOVER & STAGGER
		// ============================================
		const skillCards = document.querySelectorAll('.skills-container article');
		skillCards.forEach((card, index) => {
			card.addEventListener('mouseenter', () => {
				gsap.to(card, {
					duration: 0.4,
					y: -8,
					boxShadow: '0 12px 40px rgba(26, 115, 232, 0.25)',
					ease: 'power2.out',
				});
			});

			card.addEventListener('mouseleave', () => {
				gsap.to(card, {
					duration: 0.4,
					y: 0,
					boxShadow: '0 8px 24px rgba(26, 115, 232, 0.12)',
					ease: 'power2.out',
				});
			});
		});

		// ============================================
		// TIMELINE ITEMS HOVER ANIMATIONS
		// ============================================
		const timelineItems = document.querySelectorAll('.relative.pl-16, .relative.pl-24');
		timelineItems.forEach((item) => {
			item.addEventListener('mouseenter', () => {
				gsap.to(item, {
					duration: 0.4,
					x: 8,
					ease: 'power2.out',
				});
			});

			item.addEventListener('mouseleave', () => {
				gsap.to(item, {
					duration: 0.4,
					x: 0,
					ease: 'power2.out',
				});
			});
		});
	});
	}
};
