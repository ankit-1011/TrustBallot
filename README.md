TrustBallot 🗳️

Decentralized, transparent, and privacy‑first voting. TrustBallot is a React + TypeScript app that provides a modern UI for creating and participating in elections, designed to integrate with on‑chain smart contracts for verifiable results.

## Table of Contents
- Overview
- Features
- Tech Stack
- Project Structure
- Getting Started
- Scripts
- Development Notes (Routing)
- Contributing
- License

## Overview
TrustBallot aims to make secure voting simple. While the current repository includes the frontend application, it is intentionally structured to plug into blockchain smart contracts for tamper‑proof, auditable elections.

## Features
- Modern, responsive UI with an 8‑bit retro theme option
- Animated landing experience with Framer Motion
- Typed React components with TypeScript
- Ready for client‑side routing (React Router)
- Tailwind CSS styling

## Tech Stack
- React 19, TypeScript, Vite
- Tailwind CSS 4
- Framer Motion
- React Router DOM 7
- Custom UI components (including `8bit` variants)

## Project Structure
```
TrustBallot/
├─ tballot/
│  ├─ src/
│  │  ├─ Pages/
│  │  │  ├─ home.tsx       # Landing page
│  │  │  └─ Login.tsx      # Login screen
│  │  ├─ components/
│  │  │  └─ ui/
│  │  │     ├─ 8bit/       # Retro UI variants
│  │  │     └─ ...
│  │  ├─ App.tsx           # App shell (routes live here)
│  │  ├─ main.tsx          # App bootstrap
│  │  └─ index.css         # Global styles
│  ├─ package.json
│  └─ vite.config.ts
└─ README.md (this file)
```

## Getting Started

### Prerequisites
- Node.js ≥ 18
- pnpm (recommended) or npm/yarn

### Install
From the `tballot` directory:
```bash
pnpm install
# or
npm install
```

### Run Dev Server
```bash
pnpm dev
# or
npm run dev
```
Visit the URL printed by Vite (typically `http://localhost:5173`).

### Build for Production
```bash
pnpm build
# or
npm run build
```

### Preview Production Build
```bash
pnpm preview
# or
npm run preview
```

## Scripts
The `tballot/package.json` provides the following scripts:
- `dev`: Start the Vite dev server
- `build`: Type‑check and build for production
- `lint`: Run ESLint
- `preview`: Preview the production build locally

## Development Notes (Routing)
Client‑side routing uses React Router. Ensure the app is wrapped with a router and routes are defined:

```tsx
// src/main.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

```tsx
// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Login from './Pages/Login'

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Routes>
)

export default App
```

Use absolute, lowercase paths when navigating, e.g. `navigate('/login')`.

## Contributing
Contributions are welcome! Please open an issue or submit a PR with a clear description of the change.

## License
MIT © 2025 TrustBallot


