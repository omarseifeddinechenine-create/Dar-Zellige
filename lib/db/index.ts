import { drizzle } from "drizzle-orm/node-postgres"
import { Pool } from "pg"
import * as schema from "./schema"

export const hasDb = Boolean(process.env.DATABASE_URL)

let connectionString = process.env.DATABASE_URL
if (connectionString && connectionString.includes("localhost")) {
  // Prevent Node dual-stack IPv6 (::1) race by enforcing IPv4 (127.0.0.1)
  connectionString = connectionString.replace("localhost", "127.0.0.1")
}

export const pool = hasDb
  ? new Pool({
      connectionString,
      connectionTimeoutMillis: 5000,
    })
  : null

if (pool) {
  // Prevent unhandled error events from crashing the Node process
  pool.on("error", (err) => {
    console.error("Postgres connection pool error:", err.message)
  })
}

export const db = (hasDb && pool)
  ? drizzle(pool, { schema })
  : (new Proxy({} as ReturnType<typeof drizzle>, {
      get() {
        throw new Error("No database configured: DATABASE_URL environment variable is not set.")
      },
    }))
