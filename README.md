# Aspire AI

An interactive AI-powered learning platform built with Next.js 16, featuring Python and AI courses with hands-on exercises.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Auth**: NextAuth v5 (Google OAuth + Credentials)
- **Database**: PostgreSQL on Neon via Prisma 6
- **AI**: Google Gemini API
- **Styling**: Tailwind CSS v4 + shadcn/ui (Radix Nova)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Environment Variables

Copy the `.env` file and fill in the values:

```env
# Database (Neon PostgreSQL)
DATABASE_URL="postgresql://..."

# NextAuth
AUTH_SECRET="your-secret"
AUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"

# Gemini AI
GEMINI_API_KEY="your-api-key"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Database

```bash
# Push schema to database
npx prisma db push

# Seed with sample courses & lessons
npm run seed

# Open Prisma Studio
npx prisma studio
```

### Auth Endpoints

- `GET /api/auth/session` — Get current session
- `POST /api/auth/signin` — Sign in (Google or credentials)
- `POST /api/auth/signout` — Sign out

Protected routes: `/learn/*`, `/practice/*`, `/profile/*` (redirect to `/login` if unauthenticated).

## Project Structure

```
app/               # Next.js App Router pages & API routes
  api/auth/        # NextAuth route handler
  page.tsx         # Landing page
  globals.css      # Tailwind v4 + shadcn theme
components/ui/     # shadcn UI components
lib/
  auth.ts          # NextAuth configuration
  db.ts            # Prisma client singleton
  prisma.ts        # Re-exports from db.ts
  utils.ts         # cn() helper
prisma/
  schema.prisma    # Database schema
  seed.ts          # Seed script
proxy.ts           # Route protection (Next.js 16 proxy)
types/             # TypeScript declarations
```

## Database Schema

- **User** — Accounts with coding level and progress tracking
- **Account / Session / VerificationToken** — NextAuth models
- **Course** — Language courses (Python, AI Basics, JavaScript)
- **Lesson** — Course lessons with video and exercises
- **Exercise** — Coding challenges with starter code, solutions, hints
- **UserProgress** — Lesson completion tracking
- **ChatMessage** — AI chat history per user

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run seed` | Seed the database |
| `npx prisma studio` | Open DB browser |
