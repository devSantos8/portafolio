let runtimeCleanup = [];
let lenisInstance = null;
let tickerCallback = null;

const pushCleanup = (fn) => {
	runtimeCleanup.push(fn);
};

const clearRuntime = () => {
	runtimeCleanup.forEach((fn) => {
		try {
			fn();
		} catch {
			// noop
		}
	});
	runtimeCleanup = [];
};

const getRoutePath = () => {
	const path = window.location.pathname.replace(/\/+$/, '');
	return path.length === 0 ? '/' : path;
};

const setupLenis = (gsap, ScrollTrigger, reducedMotion) => {
	if (reducedMotion) return;

	return import('lenis').then((lenisModule) => {
		const Lenis = lenisModule.default;

		if (lenisInstance) {
			lenisInstance.destroy();
			lenisInstance = null;
		}

		lenisInstance = new Lenis({
			duration: 1.15,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			direction: 'vertical',
			gestureDirection: 'vertical',
			smoothWheel: true,
			smoothTouch: false,
			wheelMultiplier: 0.92,
		});

		lenisInstance.on('scroll', ScrollTrigger.update);

		tickerCallback = (time) => {
			lenisInstance?.raf(time * 1000);
		};

		gsap.ticker.add(tickerCallback);
		gsap.ticker.lagSmoothing(0);

		pushCleanup(() => {
			if (tickerCallback) {
				gsap.ticker.remove(tickerCallback);
				tickerCallback = null;
			}
			lenisInstance?.destroy();
			lenisInstance = null;
		});
	});
};

const animateIndexPage = (gsap, ScrollTrigger, reducedMotion) => {
	const hero = document.querySelector('.js-hero');
	const heroKicker = document.querySelector('.js-hero-kicker');
	const heroTitle = document.querySelector('.js-hero-title');
	const heroSubtitle = document.querySelector('.js-hero-subtitle');
	const heroCta = document.querySelector('.js-hero-cta');
	const heroOrb = document.querySelector('.js-hero-orb');
	const scrollIndicator = document.querySelector('.js-scroll-indicator');
	const cards = Array.from(document.querySelectorAll('.js-project-card'));
	const manifesto = document.querySelector('.js-manifesto-title');
	const horizontalPin = document.querySelector('.js-horizontal-pin');
	const horizontalTrack = document.querySelector('.js-project-rail-track');
	const railPanels = Array.from(document.querySelectorAll('.js-rail-panel'));
	const ctaSection = document.querySelector('.js-cta-section');

	const splitWords = (element) => {
		if (!element || element.getAttribute('data-split') === 'true') return [];
		const raw = element.textContent || '';
		const words = raw.trim().split(/\s+/).filter(Boolean);
		element.innerHTML = words
			.map((word) => `<span class="js-word" style="display:inline-block; margin-right:0.2em;">${word}</span>`)
			.join('');
		element.setAttribute('data-split', 'true');
		return Array.from(element.querySelectorAll('.js-word'));
	};

	const heroWords = splitWords(heroTitle);
	const manifestoWords = splitWords(manifesto);

	if (hero && heroTitle && heroSubtitle && !reducedMotion) {
		const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
		tl.fromTo(
			heroKicker,
			{ autoAlpha: 0, y: 24 },
			{ autoAlpha: 1, y: 0, duration: 0.5 }
		)
			.fromTo(
				heroWords,
				{ autoAlpha: 0, yPercent: 120, rotateX: 18, transformOrigin: '50% 100%' },
				{ autoAlpha: 1, yPercent: 0, rotateX: 0, duration: 0.85, stagger: 0.045 },
				'-=0.1'
			)
			.fromTo(
				heroSubtitle,
				{ autoAlpha: 0, y: 42 },
				{ autoAlpha: 1, y: 0, duration: 0.9 },
				'-=0.5'
			)
			.fromTo(
				heroCta,
				{ autoAlpha: 0, y: 24 },
				{ autoAlpha: 1, y: 0, duration: 0.6 },
				'-=0.55'
			)
			.fromTo(
				scrollIndicator,
				{ autoAlpha: 0, y: 12 },
				{ autoAlpha: 0.75, y: 0, duration: 0.55 },
				'-=0.32'
			);

		if (heroOrb) {
			gsap.to(heroOrb, {
				yPercent: 18,
				scale: 1.18,
				ease: 'none',
				scrollTrigger: {
					trigger: hero,
					start: 'top top',
					end: 'bottom top',
					scrub: 0.85,
				},
			});
		}

		gsap.to([heroTitle, heroSubtitle, heroKicker], {
			yPercent: -16,
			autoAlpha: 0.24,
			ease: 'none',
			scrollTrigger: {
				trigger: hero,
				start: 'top top',
				end: 'bottom top',
				scrub: 0.7,
			},
		});
	}

	if (manifestoWords.length > 0 && !reducedMotion) {
		gsap.fromTo(
			manifestoWords,
			{ autoAlpha: 0, yPercent: 90 },
			{
				autoAlpha: 1,
				yPercent: 0,
				duration: 0.72,
				stagger: 0.035,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: manifesto,
					start: 'top 82%',
					toggleActions: 'play none none none',
				},
			}
		);
	}

	if (horizontalPin && horizontalTrack && railPanels.length > 0 && !reducedMotion && window.matchMedia('(min-width: 1024px)').matches) {
		const getDistance = () => Math.max(0, horizontalTrack.scrollWidth - window.innerWidth + window.innerWidth * 0.16);

		const horizontalTween = gsap.to(horizontalTrack, {
			x: () => -getDistance(),
			ease: 'none',
			scrollTrigger: {
				trigger: horizontalPin,
				start: 'top top',
				end: () => `+=${getDistance()}`,
				scrub: 1,
				pin: true,
				anticipatePin: 1,
				invalidateOnRefresh: true,
			},
		});

		railPanels.forEach((panel, idx) => {
			const img = panel.querySelector('img');
			if (img) {
				gsap.fromTo(
					img,
					{ scale: 1.16, xPercent: -3 },
					{
						scale: 1.03,
						xPercent: 3,
						ease: 'none',
						scrollTrigger: {
							trigger: panel,
							containerAnimation: horizontalTween,
							start: 'left right',
							end: 'right left',
							scrub: 1,
						},
					}
				);
			}

			gsap.fromTo(
				panel,
				{ autoAlpha: 0.72, y: 24 },
				{
					autoAlpha: 1,
					y: 0,
					duration: 0.6,
					ease: 'power2.out',
					scrollTrigger: {
						trigger: panel,
						containerAnimation: horizontalTween,
						start: 'left 70%',
						end: 'left 35%',
						toggleActions: idx === 0 ? 'play none none reverse' : 'play none none reverse',
					},
				}
			);
		});
	}

	if (cards.length > 0 && !reducedMotion) {
		gsap.set(cards, { autoAlpha: 0, y: 80, scale: 0.965, transformOrigin: '50% 80%' });

		ScrollTrigger.batch(cards, {
			start: 'top 82%',
			onEnter: (batch) => {
				gsap.to(batch, {
					autoAlpha: 1,
					y: 0,
					scale: 1,
					duration: 0.9,
					ease: 'power3.out',
					stagger: { each: 0.11, from: 'start' },
					overwrite: 'auto',
				});
			},
			onLeaveBack: (batch) => {
				gsap.to(batch, {
					autoAlpha: 0,
					y: 58,
					duration: 0.45,
					ease: 'power1.out',
				});
			},
		});

		cards.forEach((card) => {
			const image = card.querySelector('img');
			if (!image) return;

			gsap.fromTo(
				image,
				{ scale: 1.16, yPercent: -5 },
				{
					scale: 1.03,
					yPercent: 5,
					ease: 'none',
					scrollTrigger: {
						trigger: card,
						start: 'top bottom',
						end: 'bottom top',
						scrub: 1,
					},
				}
			);
		});
	}

	if (ctaSection && !reducedMotion) {
		const ctaTargets = ctaSection.querySelectorAll('h2, p, a');
		gsap.fromTo(
			ctaTargets,
			{ autoAlpha: 0, y: 42 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.85,
				stagger: 0.1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: ctaSection,
					start: 'top 78%',
					toggleActions: 'play none none none',
				},
			}
		);
	}
};

const animateProfilePage = (gsap, ScrollTrigger, reducedMotion) => {
	const introSection = document.querySelector('.js-profile-hero');
	const revealGroups = Array.from(document.querySelectorAll('.js-reveal-group'));
	const skillCards = Array.from(document.querySelectorAll('.js-skill-card'));

	if (introSection && !reducedMotion) {
		const introTargets = introSection.querySelectorAll('.js-reveal-intro');
		gsap.fromTo(
			introTargets,
			{ autoAlpha: 0, y: 48 },
			{ autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.12, ease: 'power3.out' }
		);
	}

	revealGroups.forEach((group) => {
		const items = group.querySelectorAll('.js-reveal-item');
		if (items.length === 0 || reducedMotion) return;

		gsap.fromTo(
			items,
			{ autoAlpha: 0, y: 54, scale: 0.985 },
			{
				autoAlpha: 1,
				y: 0,
				scale: 1,
				duration: 0.82,
				ease: 'power3.out',
				stagger: 0.08,
				scrollTrigger: {
					trigger: group,
					start: 'top 76%',
					toggleActions: 'play none none none',
				},
			}
		);
	});

	if (skillCards.length > 0 && !reducedMotion) {
		gsap.fromTo(
			skillCards,
			{ autoAlpha: 0, y: 66 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.9,
				ease: 'power3.out',
				stagger: 0.12,
				scrollTrigger: {
					trigger: skillCards[0].parentElement,
					start: 'top 78%',
					toggleActions: 'play none none none',
				},
			}
		);
	}
};

const animateContactPage = (gsap, ScrollTrigger, reducedMotion) => {
	const hero = document.querySelector('.js-contact-hero');
	const contactLinks = Array.from(document.querySelectorAll('.js-contact-link'));
	const infoCards = Array.from(document.querySelectorAll('.js-contact-card'));

	if (hero && !reducedMotion) {
		const heroTargets = hero.querySelectorAll('.js-contact-intro');
		gsap.fromTo(
			heroTargets,
			{ autoAlpha: 0, y: 46 },
			{ autoAlpha: 1, y: 0, duration: 0.88, stagger: 0.11, ease: 'power3.out' }
		);
	}

	if (contactLinks.length > 0 && !reducedMotion) {
		gsap.fromTo(
			contactLinks,
			{ autoAlpha: 0, y: 32, scale: 0.98 },
			{
				autoAlpha: 1,
				y: 0,
				scale: 1,
				duration: 0.7,
				ease: 'power2.out',
				stagger: 0.09,
				delay: 0.2,
			}
		);
	}

	if (infoCards.length > 0 && !reducedMotion) {
		gsap.fromTo(
			infoCards,
			{ autoAlpha: 0, y: 60 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.8,
				ease: 'power3.out',
				stagger: 0.1,
				scrollTrigger: {
					trigger: infoCards[0].parentElement,
					start: 'top 80%',
					toggleActions: 'play none none none',
				},
			}
		);
	}
};

const animateProjectDetailPage = (gsap, ScrollTrigger, reducedMotion) => {
	const hero = document.querySelector('.js-project-hero');
	const heroImage = hero?.querySelector('img');
	const introCard = document.querySelector('.js-project-intro-card');
	const tags = Array.from(document.querySelectorAll('.js-project-tag'));
	const otherCards = Array.from(document.querySelectorAll('.js-other-project-card'));

	if (heroImage && !reducedMotion) {
		gsap.fromTo(
			heroImage,
			{ scale: 1.22, filter: 'blur(8px)' },
			{ scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }
		);

		gsap.to(heroImage, {
			yPercent: 10,
			ease: 'none',
			scrollTrigger: {
				trigger: hero,
				start: 'top top',
				end: 'bottom top',
				scrub: 0.85,
			},
		});
	}

	if (introCard && !reducedMotion) {
		const introTargets = introCard.querySelectorAll('p, h1, .flex');
		gsap.fromTo(
			introTargets,
			{ autoAlpha: 0, y: 44 },
			{ autoAlpha: 1, y: 0, duration: 0.86, stagger: 0.09, ease: 'power3.out', delay: 0.15 }
		);
	}

	if (tags.length > 0 && !reducedMotion) {
		gsap.fromTo(
			tags,
			{ autoAlpha: 0, scale: 0.86, y: 12 },
			{ autoAlpha: 1, scale: 1, y: 0, duration: 0.45, stagger: 0.06, ease: 'back.out(1.8)', delay: 0.25 }
		);
	}

	if (otherCards.length > 0 && !reducedMotion) {
		gsap.fromTo(
			otherCards,
			{ autoAlpha: 0, y: 62 },
			{
				autoAlpha: 1,
				y: 0,
				duration: 0.88,
				stagger: 0.12,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: otherCards[0].parentElement,
					start: 'top 82%',
					toggleActions: 'play none none none',
				},
			}
		);
	}
};

const setupHoverDepth = (gsap, reducedMotion) => {
	if (reducedMotion) return;
	if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

	const depthTargets = Array.from(document.querySelectorAll('.js-depth-hover'));

	depthTargets.forEach((el) => {
		const onEnter = () => {
			gsap.to(el, {
				y: -4,
				duration: 0.28,
				ease: 'power2.out',
				overwrite: 'auto',
			});
		};

		const onLeave = () => {
			gsap.to(el, {
				y: 0,
				duration: 0.3,
				ease: 'power2.out',
				overwrite: 'auto',
			});
		};

		el.addEventListener('mouseenter', onEnter);
		el.addEventListener('mouseleave', onLeave);

		pushCleanup(() => {
			el.removeEventListener('mouseenter', onEnter);
			el.removeEventListener('mouseleave', onLeave);
		});
	});
};

const setupPagePreloader = (gsap, reducedMotion) => {
	const preloader = document.querySelector('.js-page-preloader');
	if (!preloader || reducedMotion) {
		preloader?.remove();
		return;
	}

	const label = preloader.querySelector('.js-page-preloader-label');

	gsap.fromTo(
		label,
		{ autoAlpha: 0, y: 20 },
		{ autoAlpha: 1, y: 0, duration: 0.35, ease: 'power2.out' }
	);

	gsap.to(preloader, {
		autoAlpha: 0,
		duration: 0.55,
		delay: 0.45,
		ease: 'power2.inOut',
		onComplete: () => preloader.remove(),
	});
};

const setupHeaderMotion = (gsap, reducedMotion) => {
	if (reducedMotion) return;
	const header = document.getElementById('header');
	if (!header) return;

	let lastY = window.scrollY;
	let isHidden = false;

	const onScroll = () => {
		const y = window.scrollY;
		const goingDown = y > lastY;

		if (y < 48) {
			isHidden = false;
			gsap.to(header, { y: 0, autoAlpha: 1, duration: 0.28, ease: 'power2.out' });
			lastY = y;
			return;
		}

		if (goingDown && !isHidden) {
			isHidden = true;
			gsap.to(header, { y: -120, autoAlpha: 0.2, duration: 0.34, ease: 'power2.out' });
		} else if (!goingDown && isHidden) {
			isHidden = false;
			gsap.to(header, { y: 0, autoAlpha: 1, duration: 0.34, ease: 'power2.out' });
		}

		lastY = y;
	};

	window.addEventListener('scroll', onScroll, { passive: true });
	pushCleanup(() => window.removeEventListener('scroll', onScroll));
};

export const initAnimations = () => {
	if (typeof window === 'undefined') return;

	Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
		.then(([gsapModule, scrollTriggerModule]) => {
			const gsap = gsapModule.default;
			const { ScrollTrigger } = scrollTriggerModule;

			clearRuntime();
			gsap.registerPlugin(ScrollTrigger);
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

			const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
			const routePath = getRoutePath();

			const context = gsap.context(() => {
				setupPagePreloader(gsap, reducedMotion);
				setupHeaderMotion(gsap, reducedMotion);
				setupHoverDepth(gsap, reducedMotion);

				if (routePath === '/') {
					animateIndexPage(gsap, ScrollTrigger, reducedMotion);
				} else if (routePath === '/profile') {
					animateProfilePage(gsap, ScrollTrigger, reducedMotion);
				} else if (routePath === '/contact') {
					animateContactPage(gsap, ScrollTrigger, reducedMotion);
				} else if (routePath.startsWith('/projects/')) {
					animateProjectDetailPage(gsap, ScrollTrigger, reducedMotion);
				}

				ScrollTrigger.refresh();
			}, document.body);

			pushCleanup(() => {
				context.revert();
				ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			});

			return setupLenis(gsap, ScrollTrigger, reducedMotion);
		})
		.catch((error) => {
			console.error('Error loading premium animations:', error);
		});
};
