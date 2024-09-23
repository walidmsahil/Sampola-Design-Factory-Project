/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
		colors: {
			background: '#FDFBFB',  // 使用十六进制颜色值
			foreground: '#000000',  // 替换为你想要的颜色
			darkBackground: '#333333',  // 深色模式背景
			darkForeground: '#FFFFFF',  // 深色模式前景
			card: {
				DEFAULT: '#F1F1F1',  // 替换为十六进制颜色
				foreground: '#333333'
			},
			popover: {
				DEFAULT: '#FFFFFF',
				foreground: '#444444'
			},
			primary: {
				DEFAULT: '#3498db',
				foreground: '#FFFFFF'
			},
			secondary: {
				DEFAULT: '#2ecc71',
				foreground: '#FFFFFF'
			},
			muted: {
				DEFAULT: '#95a5a6',
				foreground: '#FFFFFF'
			},
			accent: {
				DEFAULT: '#e74c3c',
				foreground: '#FFFFFF'
			},
			destructive: {
				DEFAULT: '#c0392b',
				foreground: '#FFFFFF'
			},
			border: '#dddddd',
			input: '#eeeeee',
			ring: '#3498db',
			chart: {
				'1': '#1abc9c',
				'2': '#2ecc71',
				'3': '#e74c3c',
				'4': '#9b59b6',
				'5': '#f1c40f'
			},
			green: {
				light: '#AABB99',
				DEFAULT: '#45624E',
				dark: '#45624E'
			}
		},
		borderRadius: {
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		},
		keyframes: {
			'accordion-down': {
				from: {
					height: '0'
				},
				to: {
					height: 'var(--radix-accordion-content-height)'
				}
			},
			'accordion-up': {
				from: {
					height: 'var(--radix-accordion-content-height)'
				},
				to: {
					height: '0'
				}
			}
		},
		animation: {
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		}
	}
},
  plugins: [require("tailwindcss-animate")],
};
