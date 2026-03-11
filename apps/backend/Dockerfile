FROM node:20-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/backend/package.json apps/backend/package.json
RUN pnpm install --filter backend... --no-frozen-lockfile

COPY apps/backend apps/backend
WORKDIR /app/apps/backend
RUN pnpm prisma generate && pnpm build

EXPOSE 4000
CMD ["pnpm", "start:prod"]

