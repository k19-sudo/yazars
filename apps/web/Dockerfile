FROM oven/bun:latest AS base
WORKDIR /app

# Copy root workspace files first
COPY package.json bun.lock ./
COPY packages/ ./packages/

# Copy web app
COPY apps/web/package.json ./apps/web/

# Install dependencies
RUN bun install --frozen-lockfile

# Copy web source
COPY apps/web/ ./apps/web/

# Build for production
RUN cd apps/web && bun run build

# --- Production stage ---
FROM oven/bun:latest
WORKDIR /app

COPY --from=base /app/apps/web/dist ./dist

EXPOSE 3000

CMD ["bunx", "serve", "-s", "dist", "-l", "3000"]