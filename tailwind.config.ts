import flowbitePlugin from 'flowbite/plugin';

import type { Config } from 'tailwindcss';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',
	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				// primary: {
				//   50: '#FFF5F2',
				//   100: '#FFF1EE',
				//   200: '#FFE4DE',
				//   300: '#FFD5CC',
				//   400: '#FFBCAD',
				//   500: '#FE795D',
				//   600: '#EF562F',
				//   700: '#EB4F27',
				//   800: '#CC4522',
				//   900: '#A5371B'
				// }
				//gray
				primary: {
					'50': '#f9fafb',
					'100': '#f3f4f6',
					'200': '#e5e7eb',
					'300': '#d1d5db',
					'400': '#9ca3af',
					'500': '#6b7280',
					'600': '#4b5563',
					'700': '#374151',
					'800': '#1f2937',
					'900': '#111827'
				}
			}
		}
	},

	plugins: [flowbitePlugin]
} as Config;
