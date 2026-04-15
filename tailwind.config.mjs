/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// Paleta profesional personalizada
				neutral: {
					0: '#FFFFFF',
					50: '#F8F9FB',
					100: '#F0F2F6',
					200: '#E8ECEF',
					300: '#DFE4E8',
					400: '#D0D7DE',
					500: '#BFCAD0',
					600: '#8C959B',
					700: '#6E7681',
					800: '#424A53',
					900: '#24292F',
					950: '#0D1117',
				},
				brand: {
					primary: '#DC2626',
					primaryDark: '#DC2626',
					secondary: '#3B82F6',
					accent: '#F97316',
				},
			},
		},
	},
	plugins: [],
}
