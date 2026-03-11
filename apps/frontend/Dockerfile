FROM node:20-alpine AS base
ENV PNPM_HOME=/pnpm
ENV PATH=$PNPM_HOME:$PATH
RUN corepack enable

WORKDIR /app
COPY package.json pnpm-workspace.yaml ./
COPY apps/frontend/package.json apps/frontend/package.json
RUN pnpm install --filter frontend... --no-frozen-lockfile

COPY apps/frontend apps/frontend
WORKDIR /app/apps/frontend
RUN pnpm build

EXPOSE 3000
CMD ["pnpm", "start"]

