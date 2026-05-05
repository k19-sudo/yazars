# Yazars

AI-powered automated workflow platform for software companies and agencies.

## Structure

```
apps/
  web/   → React SPA (TanStack Router + Vite)
  api/   → Bun HTTP server
packages/
  database/ → Drizzle ORM schema & driver (@yazars/database)
```

## Getting Started

```bash
cp .env.example .env
bun install
bun dev        # start all services
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun dev:web` | Start web app |
| `bun dev:api` | Start API server |
| `bun db:generate` | Generate Drizzle migrations |
| `bun db:push` | Push schema to database |
| `bun db:studio` | Open Drizzle Studio |

## Docker

```bash
docker compose up
```

## License

See [LICENSE.md](LICENSE.md).