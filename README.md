<p align="center">
  <img src="public/assets/images/img_frame19115_1.webp" alt="Next.js Event Page">
</p>

<br />

<div align="center"><strong>Vishwas Hegde  (vishwashegde4@gmail.com)</strong></div>
<div align="center">🙂</div>

<br />

<div align="center">
  <strong>linkedin<a href="https://www.linkedin.com/in/vishwashegde4"> vishwashegde</a></strong>
</div>

<br />

## Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ⛑ TypeScript
- 📏 ESLint — To find and fix problems in your code
- 💖 Prettier — Code Formatter for consistent style
- 🐶 Husky — For running scripts before committing
- 📄 Commitizen — To define a standard way of committing rules
- 🚓 Commitlint — To make sure your commit messages follow the convention
- 🖌 Renovate — To keep your dependencies up to date
- 🚫 lint-staged — Run ESLint and Prettier against staged Git files
- 👷 PR Workflow — Run Type Check & Linters on Pull Requests
- ⚙️ EditorConfig - Consistent coding styles across editors and IDEs
- 🗂 Path Mapping — Import components or images using the `@` prefix
- ✨ Tailwindcss - A utility-first CSS framework

## Quick Start

```bash
git clone https://github.com/zax4r0/eventpage.git
```

### Development

To start the project locally, run:

```bash
npm i
```

```bash
npm run dev
```

---OR---

```bash
yarn
```

```bash
yarn dev
```

Open `http://localhost:3000` with your browser to see the result.

## Documentation

### Requirements

- Node.js >= 12.22.0
- Yarn 1 (Classic)

### Directory Structure

- [`.github`](.github) — GitHub configuration including the CI workflow.<br>
- [`.husky`](.husky) — Husky configuration and hooks.<br>
- [`public`](./public) — Static assets such as robots.txt, images, and favicon.<br>
- [`src`](./src) — Application source code, including pages, components, styles.

### Scripts

- `yarn dev` — Starts the application in development mode at `http://localhost:3000`.
- `yarn build` — Creates an optimized production build of your application.
- `yarn start` — Starts the application in production mode.
- `yarn type-check` — Validate code using TypeScript compiler.
- `yarn lint` — Runs ESLint for all files in the `src` directory.
- `yarn format` — Runs Prettier for all files in the `src` directory.
- `yarn commit` — Run commitizen. Alternative to `git commit`.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import Button from '@/components/ui/Button';

// To import images or other files from the public folder
import avatar from '@/public/assets/images/avatar.png';
```

### Switch to npm

This uses pnpm by default, but this choice is yours. If you'd like to switch to npm, delete the `pnpm-lock.yaml` file, install the dependencies with `npm i`, change the CI workflow, and Husky Git hooks to use npm commands.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.
