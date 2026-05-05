import 'dotenv/config';
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./packages/database/migrations",
  schema: "./packages/database/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
