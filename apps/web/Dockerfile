FROM oven/bun:latest

WORKDIR /app

# Önce bağımlılıkları yükle (Cache için)
COPY package.json bun.lockb ./
RUN bun install

COPY . .

EXPOSE 5173

CMD ["bun", "run", "dev", "--host"]