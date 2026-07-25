# Portafolio Profesional

Sitio web personal y portafolio interactivo de alto rendimiento enfocado en arquitectura de software, desarrollo full-stack e integración de experiencias web avanzadas. Diseñado con estética moderna estilo Awwwards, animaciones fluidas a 60 FPS y rendimiento optimizado.

## Características Principales

- **Arquitectura de Alto Rendimiento:** Generación de sitio estático (SSG) con Astro 5.3 para tiempos de carga mínimos y métricas sobresalientes en Core Web Vitals.
- **Experiencia Visual e Interactiva:** Animaciones de texto e imágenes con GSAP y SplitType, desplazamiento suave con Lenis, y componentes dinámicos en React.
- **Bento Grid:** Sección modular para mostrar el kit tecnológico, hábitos de desarrollo y certificaciones destacadas.
- **Modo Oscuro y Claro:** Sistema de temas responsivo integrado mediante Tailwind CSS.
- **Proyectos Destacados:** Muestra detallada de aplicaciones desarrolladas (Tuki, CommitFlow, Lubricentro La Esquina, Pulsar).

## Stack Tecnológico

### Core & Frameworks
- **Framework Principal:** Astro 5.3
- **Biblioteca de Interfaz:** React 19
- **Lenguaje:** TypeScript

### Estilos & Tipografía
- **CSS Framework:** Tailwind CSS 3.4
- **Procesadores:** PostCSS + Autoprefixer
- **Fuentes:** @fontsource (Instrument Serif, Inter, Onest, Barlow)

### Animaciones & WebGL
- **Animaciones:** GSAP 3.15 + @gsap/react
- **Scroll:** Lenis 1.3
- **Manipulación de Texto:** SplitType
- **Gráficos & Shaders:** Three.js, Simplex Noise, Shaders React

## Estructura del Proyecto

```text
src/
├── components/          Componentes Astro y React (Hero, About, Projects, BentoGrid, Footer)
│   └── react/           Componentes interactivos (BentoGrid, ColorBends, MeshBackground)
├── data/                Estructuras de datos y proyectos (projects.ts)
├── layouts/             Plantilla principal de la aplicación (Layout.astro)
├── pages/               Rutas estáticas (index.astro, proyectos individuales)
├── scripts/             Lógica de animaciones e integraciones de scroll (animations.js)
└── styles/              Estilos globales y variables CSS (global.css)
```

## Comandos de Desarrollo

| Comando | Descripción |
| :--- | :--- |
| `npm install` | Instala las dependencias del proyecto |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:4321` |
| `npm run build` | Compila el sitio para producción en la carpeta `./dist/` |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run astro -- --help` | Muestra la ayuda del CLI de Astro |

