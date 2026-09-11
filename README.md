# Unity Dental Clinics

A modern Next.js web application for Unity Dental Clinics.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS / PostCSS
- **Database**: Prisma ORM
- **Authentication**: NextAuth (Auth.js)

## Project Structure

```text
/
├── prisma/             # Database schema and local SQLite DB
├── public/             # Static assets (images, icons)
├── scripts/            # Build and database preparation scripts
├── src/
│   ├── actions/        # Server actions for data mutation
│   ├── app/            # Next.js App Router
│   │   ├── (admin)/    # Admin dashboard routes
│   │   ├── (public)/   # Public website routes
│   │   └── api/        # API routes and Auth.js handlers
│   ├── components/     # React components (home, layout, ui)
│   └── lib/            # Shared utilities and Auth.js config
├── .env.example        # Environment variable template
├── components.json     # shadcn/ui configuration
└── package.json        # Dependencies and npm scripts
```

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Copy `.env.example` to `.env.local` and update the values.
   ```bash
   cp .env.example .env.local
   ```

3. **Database Setup**
   The project uses Prisma. Run the setup scripts and start the development server.
   ```bash
   npm run dev
   ```
   *The `postinstall` script automatically prepares the database and generates Prisma client.*

4. **Access the App**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com).
The build process is automated via the `build` script in `package.json`, which also handles the necessary build steps.
