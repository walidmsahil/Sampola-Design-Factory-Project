/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"], // 通过 class 切换暗模式
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'footer-background': 'url(var(--footer-background-url))', // Use CSS variable for the background image URL
			},
			fontSize: {
				xs: 'calc(var(--font-size) * 0.75)',
				sm: 'calc(var(--font-size) * 0.875)',
				base: 'var(--font-size)',
				lg: 'calc(var(--font-size) * 1.125)',
				xl: 'calc(var(--font-size) * 1.25)',
				'2xl': 'calc(var(--font-size) * 1.5)',
				'3xl': 'calc(var(--font-size) * 1.875)',
				'4xl': 'calc(var(--font-size) * 2.25)',
				'5xl': 'calc(var(--font-size) * 3)',
				'6xl': 'calc(var(--font-size) * 3.75)',
				'7xl': 'calc(var(--font-size) * 4.5)',
				'8xl': 'calc(var(--font-size) * 6)',
				'9xl': 'calc(var(--font-size) * 8)',
			},
			colors: {
				background: 'var(--background)',    // 变量值会在 CSS 中定义
				foreground: 'var(--foreground)',
				button: 'var(--button-background)', // 搜索框背景颜色    
				'button-green': 'var(--button-green-background)', // 搜索框背景颜色    
				'button-hover': 'var(--button-hover-background)', // 搜索框背景颜色    
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)',
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
		}
	},
	plugins: [require("tailwindcss-animate")],
  };
  