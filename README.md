# Jewelry Monorepo Skeleton

Monorepo for a jewelry catalog project with:
- `apps/frontend`: Next.js + TypeScript
- `apps/backend`: NestJS + Prisma
- `PostgreSQL` database
- `MinIO` object storage

No business API is implemented yet; this is the architecture and runtime baseline.

## 1. Prerequisites

Install:
- Node.js 20 LTS
- pnpm 9 (`corepack enable` then `corepack prepare pnpm@9.15.0 --activate`)
- Docker Desktop

## 2. Initial setup

1. Verify env files and adjust values if needed:

- `.env`
- `apps/backend/.env`
- `apps/frontend/.env.local`

2. Install dependencies:

```bash
pnpm install
```

## 3. Start infrastructure only (recommended for development)

```bash
pnpm infra:up
```

This starts:
- PostgreSQL on `localhost:5433`
- MinIO API on `localhost:9000`
- MinIO Console on `localhost:9001`

Then initialize Prisma:

```bash
pnpm prisma:generate
pnpm prisma:migrate -- --name init
```

## 4. Run apps in dev mode

In terminal 1:

```bash
pnpm dev:backend
```

In terminal 2:

```bash
pnpm dev:frontend
```

Check:
- Frontend: `http://localhost:3000`
- Backend health: `http://localhost:4000/api/health`
- MinIO console: `http://localhost:9001`

## 5. Run full stack in Docker

```bash
pnpm docker:up
```

Stop:

```bash
pnpm docker:down
```

## 6. Repository layout

```text
apps/
  frontend/   # Next.js storefront + future admin UI
  backend/    # NestJS API + Prisma schema
```

## 7. Next step

Implement domain modules in backend:
- auth (JWT + refresh)
- groups
- products
- media (pre-signed URL flow for MinIO)
