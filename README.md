# NOVA — AI Productivity Platform

NOVA is a fictional AI-powered productivity platform landing page built to demonstrate modern front-end development, UI/UX, responsive design, semantic structure and reusable React components.

## Project description

The page presents NOVA as a calm, premium AI workspace for teams. The design uses a dark editorial style, subtle glass surfaces, violet/cyan gradients, strong typography and a dashboard-inspired hero panel.

📸 Screenshots

### 🖥️ Desktop — Hero Section
  <img width="1797" height="889" alt="Screenshot 2026-09-09 134828" src="https://github.com/user-attachments/assets/bf096875-a002-4f50-ae6e-ce01c0a76626" />

### 🧩 Features & Solutions
  <img width="1920" height="1080" alt="Screenshot 2026-09-09 134943" src="https://github.com/user-attachments/assets/5118c2b1-7b12-4626-b4ac-f49829ad94e8" />
  
  <img width="1920" height="1080" alt="Screenshot 2026-09-09 135023" src="https://github.com/user-attachments/assets/d844202d-15d1-4a30-822e-0cc60598f4d4" />


### ⚙️ How It Works
 
 <img width="1920" height="1080" alt="Screenshot 2026-09-09 135014" src="https://github.com/user-attachments/assets/b638a77b-85f3-4694-ba9c-bf18fbaed9e5" />



## Technologies used

- Next.js 16 (App Router)
- React 19
- Tailwind CSS 4
- Plain JavaScript / JSX
- CSS animations and responsive utility classes

Next.js 16.3.4 is used because it is an Active LTS release as of September 2026. Tailwind CSS is configured through the current PostCSS plugin approach.

## Features

- Responsive desktop / laptop / tablet / mobile layout
- Fixed responsive navigation
- Mobile hamburger navigation
- Smooth scrolling for section links
- Hover effects for buttons and cards
- Working FAQ accordion
- Demo modal interaction
- Monthly / annual pricing toggle UI
- Animated company-logo marquee
- Newsletter validation interaction
- Back-to-top button
- Accessible labels on interactive controls
- Semantic sections, nav, main, footer and figure/blockquote markup

## File flow

```text
nova-ai-productivity/
├── app/
│   ├── globals.css          # Global styles, theme, animations, responsive helpers
│   ├── layout.js            # Root layout + metadata
│   └── page.js              # Home route entry
├── components/
│   ├── DemoModal.jsx        # Product demo modal
│   ├── FAQ.jsx              # Accessible FAQ accordion
│   ├── Icon.jsx             # Small reusable SVG icon set
│   ├── Navigation.jsx       # Desktop + mobile navigation
│   ├── Newsletter.jsx       # Email validation interaction
│   ├── PricingToggle.jsx    # Monthly / annual toggle UI
│   └── Site.jsx              # Main landing page sections
├── public/                  # Static assets can be added here
├── .eslintrc.json
├── .gitignore
├── jsconfig.json
├── package.json
├── postcss.config.mjs
└── README.md
```

## Installation

### 1. Extract / open the project

Open the `nova-ai-productivity` folder in VS Code.

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open the local URL shown by Next.js, normally:

```text
http://localhost:3000
```

### 4. Production build

```bash
npm run build
npm start
```

## Screenshots

Screenshots are intentionally not bundled because the project is designed to be run locally and then captured at your target viewport sizes. Suggested screenshots: desktop 1440px, tablet 1024px and mobile 390px.

## Live demo URL

`https://your-deployment-url.example`

Replace this placeholder after deploying to Vercel, Netlify or another Next.js-compatible host.

## AI tools used

- OpenAI / ChatGPT — planning, UI copy, component structure and code generation assistance.

## Notes for customization

- Replace placeholder company logos with real SVG assets in `public/` if needed.
- Connect the pricing buttons to your real checkout flow.
- Replace the demo modal placeholder with a product video.
- Connect newsletter submission to your email service.
- Add real privacy / terms pages before production use.
