# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BBS Publishing Collective (bbs-ink-forge) - A terminal-inspired React application with BBS aesthetics, built using Vite, TypeScript, React, and shadcn/ui components. The project features a retro terminal interface with publishing collective functionality including releases, agents, games, and chat.

## Development Commands

```bash
# Install dependencies
npm install

# Run development server (port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run linter
npm run lint

# Preview production build
npm run preview
```

## Architecture Overview

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **UI Components**: shadcn/ui with Radix UI primitives
- **Styling**: Tailwind CSS with custom terminal/BBS theme
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation

### Project Structure

The application follows a feature-based component architecture:

- **Main Entry**: `src/main.tsx` → `src/App.tsx` → Routes → Pages
- **Routing Pattern**: All pages in `src/pages/`, with Index as home and NotFound as catch-all
- **Component Organization**:
  - `src/components/ui/` - shadcn/ui base components (buttons, cards, dialogs, etc.)
  - `src/components/` - Feature components (BBSHeader, RecentReleases, LLMLiaison, etc.)
- **Path Aliasing**: `@/` maps to `./src/` for clean imports

### Key Design Patterns

1. **Terminal/BBS Aesthetic System**:
   - Custom CSS variables for terminal colors (cyan, green, amber, magenta)
   - Terminal window components with headers and glow effects
   - Scan line animations and subtle flicker effects
   - Monospace font family (SF Mono, Monaco, Cascadia Code)

2. **Component Structure**:
   - Components include "archaeology" metadata (conversation traces, thread genesis, contributors)
   - Status indicators use color coding (green=live, amber=wip, gray=planning)
   - Responsive grid layout (3 columns on desktop, stacked on mobile)

3. **TypeScript Configuration**:
   - Relaxed type checking (`noImplicitAny: false`, `strictNullChecks: false`)
   - Path aliasing configured in both tsconfig and Vite
   - Separate configs for app and node environments

## Important Implementation Details

### Terminal Theme System
The project uses a sophisticated terminal color system defined in `src/index.css`:
- Terminal background/surface/elevated colors
- Neon text effects (cyan primary, green terminal, amber accent)
- Scan line overlay animation
- Custom border and glow intensities

### Component Patterns
Components like `RecentReleases` demonstrate the archaeology pattern:
- Each item contains conversation traces showing origin
- Thread genesis tracks idea evolution
- Contributors are tracked per item
- Themes are tagged for categorization

### Mobile Responsiveness
- Sticky navigation for mobile view
- Responsive grid system (lg:grid-cols-3)
- Touch-friendly interaction areas
- Safe area insets for modern devices

## Lovable Platform Integration

This project is connected to Lovable (project ID: 952821e2-a53a-4e32-ae4d-fd612c405b2f) for visual development. Changes made via Lovable are automatically committed to this repository.

## TypeScript Linting Rules

ESLint is configured with:
- TypeScript unused variables disabled (`@typescript-eslint/no-unused-vars: off`)
- React Refresh warnings for component exports
- Standard React Hooks rules enabled