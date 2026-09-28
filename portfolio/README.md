# Subavarshini J: Developer Portfolio (Angular)

A single-page portfolio for a Java / Spring Boot backend developer. Built with Angular 18 standalone components and signals. It links to GitHub, LinkedIn and email, and opens with a working token-bucket demo that echoes the API Rate Limiting System project.

## 1. Quick start

```bash
npm install
npm start          # dev server at http://localhost:4200
npm run build      # production build in dist/portfolio/browser
```
Requires Node 18.19+ or 20+.

## 2. Project structure

```
src/
  index.html               page shell, fonts, meta description
  main.ts                  bootstraps AppComponent
  styles.css               design tokens, layout, dark mode
  app/
    data.ts                ALL content (profile, socials, skills, projects...)
    app.component.ts       page layout: nav, hero, sections, footer
    rate-demo.component.ts interactive token-bucket demo
```

## 3. Features

- **Hero with a live demo.** "Send request" spends one of 5 tokens; a token refills every 1.2 s. An empty bucket returns `429`, exactly the behaviour of the rate limiter project.
- **Social integration.** GitHub, LinkedIn and email render from one `SOCIALS` array, in the hero and the contact section.
- **Data-driven content.** Change `data.ts` and the whole site updates; no template edits needed.
- **Projects section** with stack chips, outcome bullets and links (live API docs, GitHub).
- **Skills, education, certifications, achievements** taken from the resume.
- **Responsive and accessible.** Two-column layout collapses on phones, visible keyboard focus, `aria-live` results in the demo, reduced-motion respected, automatic dark mode.

## 3a. Technologies used

| Area | Choice | Why |
|---|---|---|
| Framework | Angular 18, standalone components | No NgModules; less boilerplate |
| State | Angular signals | Simple reactive state for the demo |
| Control flow | `@for` built-in syntax | Modern replacement for `*ngFor` |
| Styling | Plain CSS with custom properties | Small, themeable, no build dependency |
| Fonts | Bricolage Grotesque, Instrument Sans | Google Fonts, with system fallbacks |
| Tooling | Angular CLI, esbuild application builder | Fast builds |

## 4. Implementation notes

**Data layer (`data.ts`).** Typed constants (`PROFILE`, `SOCIALS`, `SKILLS`, `PROJECTS`, ...). `AppComponent` copies them onto fields and the template loops over them.

**AppComponent.** One template with anchor-linked sections (`#projects`, `#skills`, `#background`, `#contact`). Smooth scrolling is plain CSS.

**RateDemoComponent.** State is two signals: `tokens` and `log`. `send()` checks `tokens() > 0`: if true it decrements and logs `200`, otherwise it logs `429`. An interval started in `ngOnInit` adds a token (capped at capacity) and is cleared in `ngOnDestroy` to avoid leaks. This is a simplified, client-side illustration of the Token Bucket strategy; the real limiter is server-side (below).

**Theming.** Colours are CSS variables on `:root`; a `prefers-color-scheme: dark` block swaps them. Semantic colours `--ok` and `--deny` are reused by the demo.

## 5. Project documentation

### Multi-Tenant SaaS Task Management System
- **Purpose:** task management platform where each tenant's data is isolated.
- **Stack:** Java, Spring Boot, Spring MVC, Spring Security, JWT, PostgreSQL, JPA/Hibernate, Docker, Swagger/OpenAPI.
- **Features:** JWT authentication, role-based access control (RBAC), tenant-isolated data, 10+ REST endpoints, 8+ Spring Boot modules in a microservice-oriented layout.
- **Deployment:** containerized with Docker, PostgreSQL for persistence, publicly reachable with Swagger UI documentation.

### API Rate Limiting System
- **Purpose:** protect APIs from excess traffic with interchangeable algorithms.
- **Stack:** Java, Spring Boot, Spring MVC, Redis, Lua.
- **Design:** Strategy pattern with three algorithms: Fixed Window, Sliding Window, Token Bucket.
- **Concurrency:** counting runs in atomic Lua scripts inside Redis, so concurrent requests cannot race between read and write.
- **Observability:** metrics dashboard for request counts, rate-limit hits and usage patterns.

### AI-Powered Wireless Surveillance Robot
- **Purpose:** real-time video monitoring with on-device object detection.
- **Stack:** Python, YOLOv8n, OpenCV, Raspberry Pi 5 (Linux).
- **Model:** YOLOv8n fine-tuned on a custom 3,600+ image dataset to distinguish soldiers from civilians across terrains, integrated in the live detection pipeline.

## 6. Customising

- Edit `src/app/data.ts` for text, links and projects.
- To add LeetCode or other profiles, add an entry to `SOCIALS`, e.g. `{ label: 'LeetCode', url: '...' }` (your resume mentions LeetCode but has no link).
- Your phone number is deliberately not shown on the public page; add it to `SOCIALS` as a `tel:` link if you want it.
- Change palette in the `:root` block of `styles.css`.
- Add a project by appending an object to `PROJECTS`.

## 7. Deployment

`npm run build`, then upload `dist/portfolio/browser` to Netlify, Vercel, Firebase Hosting or GitHub Pages. For GitHub Pages, build with `ng build --base-href /<repo-name>/`.
