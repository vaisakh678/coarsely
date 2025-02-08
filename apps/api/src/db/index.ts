import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
	host: "localhost",
	port: 5432,
	database: "coursely",
	user: "vaisakh",
	password: "nasa",
	ssl: false,
});

const db = drizzle(pool, { schema });

export default db;
