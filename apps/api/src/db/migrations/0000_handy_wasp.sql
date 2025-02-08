CREATE TABLE "user" (
	"id" serial PRIMARY KEY NOT NULL,
	"full_name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"password" text,
	"refresh_token" text,
	"last_login" timestamp,
	CONSTRAINT "user_email_unique" UNIQUE("email")
);
