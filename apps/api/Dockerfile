FROM oven/bun:latest AS base
WORKDIR /app

# Copy root workspace files first
COPY package.json bun.lock ./
COPY packages/ ./packages/

# Copy API app
COPY apps/api/package.json ./apps/api/

# Install dependencies
RUN bun install --frozen-lockfile

# Copy API source
COPY apps/api/ ./apps/api/

EXPOSE 5555

WORKDIR /app/apps/api

CMD ["bun", "run", "start"]
