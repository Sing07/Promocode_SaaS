import { env } from "@/data/env/server";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"

const sql = neon(env.DATABASE_URL as string);
export const db = drizzle(sql, {schema});
