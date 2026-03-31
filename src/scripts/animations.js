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
			Habilidades: {
				fromTransform: 'translate3d(0,110px,0) scale(0.94) rotateX(5deg)',
				sectionAnimation: {
					y: 0,
					scale: 1,
					rotateX: 0,
					filter: 'blur(0px)',
					duration: 1.02,
					ease: 'power3.out',
				},
				itemFromTransform: 'translateY(28px) scale(0.96)',
				itemAnimation: { y: 0, scale: 1, duration: 0.76, ease: 'power3.out' },
				itemStagger: 0.08,
				itemDelay: 0.13,
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
					return uniqueElements(Array.from(section.querySelectorAll('article, .fade-in-section')));
				case 'Sobre-mi':
					return uniqueElements(Array.from(section.querySelectorAll('.fade-in-section, article, aside')));
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
		// PROJECT CARDS HOVER ANIMATIONS
		// ============================================
		const projectCards = document.querySelectorAll('.carousel-item');
		projectCards.forEach((card) => {
			const image = card.querySelector('img');
			const cardContent = card.querySelector('.space-y-4') || card.querySelector('a > div:last-child');

			// Hover effect on card
			card.addEventListener('mouseenter', () => {
				gsap.to(card, {
					duration: 0.4,
					backgroundColor: 'rgba(255, 255, 255, 0.1)',
					boxShadow: '0 20px 50px rgba(26, 115, 232, 0.2)',
					ease: 'power2.out',
				});

				if (image) {
					gsap.to(image, {
						duration: 0.6,
						scale: 1.08,
						filter: 'brightness(1.1)',
						ease: 'power2.out',
					});
				}
			});

			card.addEventListener('mouseleave', () => {
				gsap.to(card, {
					duration: 0.4,
					backgroundColor: 'rgba(255, 255, 255, 0)',
					boxShadow: '0 12px 32px rgba(15, 23, 42, 0.06)',
					ease: 'power2.out',
				});

				if (image) {
					gsap.to(image, {
						duration: 0.6,
						scale: 1,
						filter: 'brightness(1)',
						ease: 'power2.out',
					});
				}
			});
		});

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
