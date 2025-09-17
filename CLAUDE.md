# Claude Instructions for Inna Operating Manual

## Project Overview
**Repository**: inna-operating-manual
**Purpose**: Personal profile landing page showcasing Inna Dedova's "Strategic Catalyst" CliftonStrengths profile
**Domain**: i-dedova.vercel.app
**Parent Project**: Extension of lazy-pm-ai-workbook

## Tech Stack
- **Framework**: React 19 + Vite + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Visualization**: React Flow (for interactive CliftonStrengths diagram)
- **Deployment**: Vercel

## Development Commands
```bash
npm install          # Install dependencies (REQUIRED - not installed yet)
npm run dev         # Start development server
npm run build       # Build for production
npm run lint        # Run ESLint
npm run preview     # Preview production build
```

## Required Dependencies to Install
```bash
npm install @xyflow/react clsx tailwind-merge tailwindcss-animate
npx shadcn@latest add button card
```

## Project Structure
```
├── src/
│   ├── components/     # React components (to be created)
│   ├── lib/
│   │   └── utils.ts   # cn() utility for className merging
│   ├── App.tsx        # Main app component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── PROFILE_PAGE_PLAN.md  # Complete implementation plan
├── components.json    # shadcn/ui configuration
├── tailwind.config.js # Custom design system with animations
└── package.json       # Dependencies and scripts
```

## Design System
**Colors**: HSL-based warm professional palette
- Primary: `hsl(215 25% 27%)` - warm slate
- Accent: `hsl(250 30% 60%)` - sophisticated purple
- Highlight: `hsl(43 74% 66%)` - energetic amber

**Custom Animations**: fade-in, slide-up, glow, accordion
**Custom Gradients**: gradient-primary, gradient-surface, gradient-accent

## Key Implementation Requirements

### 1. Page Sections (from PROFILE_PAGE_PLAN.md)
- Hero Section with "Strategic Catalyst" tagline
- About Section with quantified achievements
- Interactive React Flow CliftonStrengths visualization (main feature)
- "Working With Me" guide
- Strategic compensation for weaknesses
- Portfolio connection to lazy-pm-ai-workbook
- LinkedIn CTA

### 2. React Flow Visualization
- 5 Superpower nodes with click interactions
- Shows relationships between strengths
- Custom styled nodes matching design system
- Mobile-responsive touch interactions

### 3. Content Sources
All content is based on files in the lazy-pm-ai-workbook repository:
- `CliftonStrengths-Analysis.md` - Main analysis
- `CliftonStrengths-34-Full-Profile.md` - Complete profile
- `Personal-Weaknesses-And-Working-Style.md` - Working style guide
- `Resume_PM_I.Dedova_2025.md` - Professional achievements

## Development Workflow
1. **Always check PROFILE_PAGE_PLAN.md** for detailed implementation requirements
2. **Follow existing design system** from tailwind.config.js
3. **Use shadcn/ui components** consistently
4. **Test React Flow interactions** on both desktop and mobile
5. **Reference lazy-pm-ai-workbook** for content and styling consistency

## Important Notes
- Dependencies are NOT installed yet - run `npm install` first
- Project is ready for development but needs package installation
- Design system is already configured and matches parent project
- All content and messaging is finalized in PROFILE_PAGE_PLAN.md

## Commands to Run After Fresh Start
```bash
cd "C:\Users\innad\Documents\GitHub\inna-operating-manual"
npm install
npm install @xyflow/react clsx tailwind-merge tailwindcss-animate
npx shadcn@latest add button card badge
npm run dev  # Should start on localhost:5173
```

## Related Repositories
- **lazy-pm-ai-workbook**: Parent project with content sources and design system reference
- **Domain**: Deploy to i-dedova.vercel.app when ready