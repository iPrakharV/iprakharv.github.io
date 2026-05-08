# Prakhar Verma Portfolio

Personal portfolio for Prakhar Verma, a computer science honors student at Purdue Fort Wayne. The site keeps my experience, selected projects, resume, and contact links in one place.

Live site: [iprakharv.com](https://iprakharv.com)

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes
- Formspree
- GitHub Pages

## Project Structure

- `app/` contains the Next.js routes and global styles.
- `components/` contains the reusable sections used on the homepage.
- `lib/data.ts` contains the portfolio content shown on the site.
- `public/resume.pdf` is the downloadable resume.
- `.github/workflows/deploy.yml` builds and deploys the static export.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
```

The app is configured for static export. GitHub Actions builds the site from `main` and deploys the generated `out/` directory to GitHub Pages.

## Notes

The site is intentionally compact. Project cards link to public work where available, and the content avoids claims that are not supported by the linked repos or resume.
