import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Film-inspired color system
				'film-base': 'hsl(var(--film-base))',
				'film-silver': 'hsl(var(--film-silver))',
				'film-grain': 'hsl(var(--film-grain))',
				
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					warm: 'hsl(var(--secondary-warm))'
				},
				
				// Darkroom chemistry colors
				'stop-bath': 'hsl(var(--stop-bath))',
				'fixer': 'hsl(var(--fixer))',
				
				// Camera equipment colors
				'lens-chrome': 'hsl(var(--lens-chrome))',
				'camera-black': 'hsl(var(--camera-black))',
				'lcd-green': 'hsl(var(--lcd-green))',
				'focus-peaking': 'hsl(var(--focus-peaking))',
				
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'shutter-click': {
					'0%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(0.95)' },
					'100%': { transform: 'scale(1)' }
				},
				'film-advance': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-120px)' }
				},
				'develop': {
					'0%': { 
						filter: 'brightness(0) contrast(0)',
						opacity: '0'
					},
					'50%': {
						filter: 'brightness(0.5) contrast(0.8)',
						opacity: '0.7'
					},
					'100%': { 
						filter: 'brightness(1) contrast(1)',
						opacity: '1'
					}
				},
				'focus-peaking': {
					'0%, 100%': { boxShadow: '0 0 0 0 hsl(var(--focus-peaking) / 0.7)' },
					'50%': { boxShadow: '0 0 0 4px hsl(var(--focus-peaking) / 0)' }
				},
				'aperture-open': {
					'from': { clipPath: 'circle(20% at center)' },
					'to': { clipPath: 'circle(80% at center)' }
				},
				'lens-flare': {
					'0%': { 
						backgroundPosition: '-100% center',
						opacity: '0'
					},
					'50%': { opacity: '1' },
					'100%': { 
						backgroundPosition: '200% center',
						opacity: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'shutter': 'shutter-click 150ms ease-in-out',
				'film-advance': 'film-advance 400ms cubic-bezier(0.4, 0, 0.2, 1)',
				'develop': 'develop 800ms ease-in-out',
				'focus-peaking': 'focus-peaking 2s infinite',
				'aperture': 'aperture-open 600ms ease-out',
				'lens-flare': 'lens-flare 1.5s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
