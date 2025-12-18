import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Extended palette
        success: "hsl(var(--success, 142 76% 36%))",
        warning: "hsl(var(--warning, 38 92% 50%))",
        info: "hsl(var(--info, 199 89% 48%))",
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'system-ui', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '0.9rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem', letterSpacing: '-0.02em' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.025em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
        '9xl': ['8rem', { lineHeight: '1', letterSpacing: '-0.025em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "2xl": "calc(var(--radius) + 8px)",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        'soft': '0 2px 15px 0 rgba(0, 0, 0, 0.08)',
        'glow': '0 0 20px hsl(var(--primary) / 0.3)',
        'glow-lg': '0 0 40px hsl(var(--primary) / 0.4)',
        'glow-accent': '0 0 20px hsl(var(--accent) / 0.3)',
        'inner-glow': 'inset 0 0 20px hsl(var(--primary) / 0.1)',
        'colored': '0 4px 14px 0 hsl(var(--primary) / 0.25)',
        'elevated': '0 10px 40px -10px hsl(var(--primary) / 0.2)',
        'float': '0 20px 50px -15px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 20px -2px hsl(var(--primary) / 0.08)',
        'card-hover': '0 12px 40px -8px hsl(var(--primary) / 0.15)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-shine': 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
        'mesh': 'radial-gradient(at 40% 20%, hsl(var(--primary) / 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, hsl(var(--accent) / 0.1) 0px, transparent 50%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.6" },
          "25%": { transform: "translateY(-15px) translateX(8px)", opacity: "0.8" },
          "50%": { transform: "translateY(-25px) translateX(0)", opacity: "1" },
          "75%": { transform: "translateY(-15px) translateX(-8px)", opacity: "0.8" }
        },
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.15)" }
        },
        "text-glow": {
          "0%, 100%": { textShadow: "0 0 20px rgba(255,255,255,0.3)" },
          "50%": { textShadow: "0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(255,255,255,0.3)" }
        },
        "scroll-indicator": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(10px)", opacity: "0.4" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        "shimmer-slow": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)", animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)" },
          "50%": { transform: "translateY(-15%)", animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)" }
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" }
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px hsl(var(--primary) / 0.3)" },
          "50%": { boxShadow: "0 0 25px hsl(var(--primary) / 0.6), 0 0 50px hsl(var(--primary) / 0.3)" }
        },
        "glow-pulse-accent": {
          "0%, 100%": { boxShadow: "0 0 5px hsl(var(--accent) / 0.3)" },
          "50%": { boxShadow: "0 0 25px hsl(var(--accent) / 0.6), 0 0 50px hsl(var(--accent) / 0.3)" }
        },
        "ripple": {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(4)", opacity: "0" }
        },
        "ripple-soft": {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" }
        },
        "glitch": {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" }
        },
        "glitch-intense": {
          "0%, 100%": { transform: "translate(0)", filter: "hue-rotate(0deg)" },
          "10%": { transform: "translate(-5px, -2px)", filter: "hue-rotate(90deg)" },
          "20%": { transform: "translate(5px, 2px)", filter: "hue-rotate(180deg)" },
          "30%": { transform: "translate(-3px, 4px)", filter: "hue-rotate(270deg)" },
          "40%": { transform: "translate(3px, -4px)", filter: "hue-rotate(0deg)" },
          "50%": { transform: "translate(-2px, 2px)", filter: "hue-rotate(45deg)" },
          "60%": { transform: "translate(2px, -2px)", filter: "hue-rotate(90deg)" },
          "70%": { transform: "translate(-4px, 1px)", filter: "hue-rotate(135deg)" },
          "80%": { transform: "translate(4px, -1px)", filter: "hue-rotate(180deg)" },
          "90%": { transform: "translate(-1px, 3px)", filter: "hue-rotate(225deg)" }
        },
        "orbit": {
          "0%": { transform: "rotate(0deg) translateX(80px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(80px) rotate(-360deg)" }
        },
        "orbit-reverse": {
          "0%": { transform: "rotate(360deg) translateX(60px) rotate(-360deg)" },
          "100%": { transform: "rotate(0deg) translateX(60px) rotate(0deg)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        },
        "spin-reverse": {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        "confetti-fall": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(720deg)", opacity: "0" }
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.5)", opacity: "0" }
        },
        "pulse-ring-accent": {
          "0%": { transform: "scale(0.8)", opacity: "0.8", borderColor: "hsl(var(--accent))" },
          "100%": { transform: "scale(2)", opacity: "0", borderColor: "hsl(var(--accent))" }
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "scale-in": {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "scale-in-bounce": {
          "0%": { transform: "scale(0)", opacity: "0" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "wiggle": {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        },
        "wiggle-more": {
          "0%, 100%": { transform: "rotate(-6deg)" },
          "50%": { transform: "rotate(6deg)" }
        },
        "heartbeat": {
          "0%, 100%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.15)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.15)" },
          "70%": { transform: "scale(1)" }
        },
        "typing": {
          "0%, 100%": { width: "0" },
          "50%": { width: "100%" }
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" }
        },
        "blink-cursor": {
          "0%, 100%": { borderColor: "currentColor" },
          "50%": { borderColor: "transparent" }
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        "gradient-y": {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" }
        },
        "gradient-xy": {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "25%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "75%": { backgroundPosition: "0% 100%" }
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        "blur-in": {
          "0%": { filter: "blur(12px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" }
        },
        "blur-out": {
          "0%": { filter: "blur(0)", opacity: "1" },
          "100%": { filter: "blur(12px)", opacity: "0" }
        },
        "morph": {
          "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
          "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
          "50%": { borderRadius: "50% 60% 50% 60% / 40% 30% 70% 50%" },
          "75%": { borderRadius: "40% 30% 60% 50% / 60% 70% 30% 40%" }
        },
        "flip-horizontal": {
          "0%": { transform: "rotateY(0)" },
          "100%": { transform: "rotateY(180deg)" }
        },
        "flip-vertical": {
          "0%": { transform: "rotateX(0)" },
          "100%": { transform: "rotateX(180deg)" }
        },
        "swing": {
          "0%, 100%": { transform: "rotate(0deg)", transformOrigin: "top center" },
          "25%": { transform: "rotate(15deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(5deg)" }
        },
        "rubber-band": {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "30%": { transform: "scale3d(1.25, 0.75, 1)" },
          "40%": { transform: "scale3d(0.75, 1.25, 1)" },
          "50%": { transform: "scale3d(1.15, 0.85, 1)" },
          "65%": { transform: "scale3d(0.95, 1.05, 1)" },
          "75%": { transform: "scale3d(1.05, 0.95, 1)" },
          "100%": { transform: "scale3d(1, 1, 1)" }
        },
        "jello": {
          "0%, 100%": { transform: "skewX(0deg) skewY(0deg)" },
          "22%": { transform: "skewX(-12.5deg) skewY(-12.5deg)" },
          "33%": { transform: "skewX(6.25deg) skewY(6.25deg)" },
          "44%": { transform: "skewX(-3.125deg) skewY(-3.125deg)" },
          "55%": { transform: "skewX(1.5625deg) skewY(1.5625deg)" },
          "66%": { transform: "skewX(-0.78125deg) skewY(-0.78125deg)" },
          "77%": { transform: "skewX(0.390625deg) skewY(0.390625deg)" },
          "88%": { transform: "skewX(-0.1953125deg) skewY(-0.1953125deg)" }
        },
        "tada": {
          "0%": { transform: "scale3d(1, 1, 1)" },
          "10%, 20%": { transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)" },
          "30%, 50%, 70%, 90%": { transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)" },
          "40%, 60%, 80%": { transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)" },
          "100%": { transform: "scale3d(1, 1, 1)" }
        },
        "shake-x": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" }
        },
        "shake-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateY(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateY(5px)" }
        },
        "rotate-in": {
          "0%": { transform: "rotate(-200deg)", opacity: "0" },
          "100%": { transform: "rotate(0)", opacity: "1" }
        },
        "zoom-in": {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        "zoom-out": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.5)", opacity: "0" }
        },
        "border-spin": {
          "0%": { borderColor: "hsl(var(--primary))" },
          "33%": { borderColor: "hsl(var(--accent))" },
          "66%": { borderColor: "hsl(var(--secondary))" },
          "100%": { borderColor: "hsl(var(--primary))" }
        },
        "text-shimmer": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "-200% 50%" }
        },
        "marquee": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" }
        },
        "levitate": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "25%": { transform: "translateY(-10px) rotate(1deg)" },
          "50%": { transform: "translateY(-20px) rotate(0deg)" },
          "75%": { transform: "translateY(-10px) rotate(-1deg)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "float-gentle": "float-gentle 4s ease-in-out infinite",
        "slow-zoom": "slow-zoom 25s ease-in-out infinite alternate",
        "text-glow": "text-glow 3s ease-in-out infinite",
        "scroll-indicator": "scroll-indicator 2s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
        "shimmer-slow": "shimmer-slow 3s linear infinite",
        "bounce-slow": "bounce-slow 3s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s infinite",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-down": "fade-in-down 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.6s ease-out forwards",
        "fade-in-right": "fade-in-right 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
        "slide-down": "slide-down 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "glow-pulse-accent": "glow-pulse-accent 2s ease-in-out infinite",
        "ripple": "ripple 0.6s ease-out",
        "ripple-soft": "ripple-soft 1s ease-out infinite",
        "glitch": "glitch 0.3s ease-in-out",
        "glitch-intense": "glitch-intense 0.5s ease-in-out",
        "orbit": "orbit 4s linear infinite",
        "orbit-reverse": "orbit-reverse 6s linear infinite",
        "spin-slow": "spin-slow 8s linear infinite",
        "spin-reverse": "spin-reverse 8s linear infinite",
        "confetti-fall": "confetti-fall 5s linear forwards",
        "pulse-ring": "pulse-ring 1.5s ease-out infinite",
        "pulse-ring-accent": "pulse-ring-accent 2s ease-out infinite",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "slide-in-bottom": "slide-in-bottom 0.5s ease-out",
        "scale-in": "scale-in 0.3s ease-out",
        "scale-in-bounce": "scale-in-bounce 0.5s ease-out",
        "wiggle": "wiggle 0.5s ease-in-out infinite",
        "wiggle-more": "wiggle-more 0.5s ease-in-out infinite",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "typing": "typing 3s steps(40) infinite",
        "blink": "blink 1s step-end infinite",
        "blink-cursor": "blink-cursor 1s step-end infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient-y": "gradient-y 3s ease infinite",
        "gradient-xy": "gradient-xy 6s ease infinite",
        "float-slow": "float-slow 5s ease-in-out infinite",
        "blur-in": "blur-in 0.6s ease-out forwards",
        "blur-out": "blur-out 0.4s ease-in forwards",
        "morph": "morph 8s ease-in-out infinite",
        "flip-horizontal": "flip-horizontal 0.6s ease-in-out",
        "flip-vertical": "flip-vertical 0.6s ease-in-out",
        "swing": "swing 1s ease-in-out",
        "rubber-band": "rubber-band 1s ease-out",
        "jello": "jello 1s ease-in-out",
        "tada": "tada 1s ease-in-out",
        "shake-x": "shake-x 0.8s ease-in-out",
        "shake-y": "shake-y 0.8s ease-in-out",
        "rotate-in": "rotate-in 0.6s ease-out",
        "zoom-in": "zoom-in 0.4s ease-out",
        "zoom-out": "zoom-out 0.4s ease-in",
        "border-spin": "border-spin 3s linear infinite",
        "text-shimmer": "text-shimmer 2s linear infinite",
        "marquee": "marquee 25s linear infinite",
        "marquee-reverse": "marquee-reverse 25s linear infinite",
        "levitate": "levitate 5s ease-in-out infinite"
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snap': 'cubic-bezier(0, 1, 0, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
        '98': '0.98',
        '97': '0.97',
      },
      rotate: {
        '1': '1deg',
        '2': '2deg',
        '-1': '-1deg',
        '-2': '-2deg',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
