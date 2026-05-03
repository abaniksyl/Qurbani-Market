import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/lib/schema.js",
  out: "./drizzle",
  dialect: "sqlite",
  dbCredentials: {
    url: "auth.db",
  },
});
