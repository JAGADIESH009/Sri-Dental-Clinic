# Sri Dental Clinic

A modern Next.js web application for Sri Dental Clinic.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS / PostCSS
- **Database**: Prisma ORM
- **Authentication**: NextAuth (Auth.js)

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
