import { defineConfig } from "drizzle-kit";

const config = defineConfig({
	schema: "./src/db/schema.ts",
	out: "./src/db/migrations",
	dialect: "postgresql",
	dbCredentials: {
		host: "localhost",
		port: 5432,
		database: "coursely",
		user: "vaisakh",
		password: "nasa",
		ssl: false,
	},
	verbose: true,
	strict: true,
});

export default config;
