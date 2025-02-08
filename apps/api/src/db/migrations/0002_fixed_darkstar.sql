CREATE TABLE "course" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"cover" text,
	"cover_video" text,
	"author_id" integer NOT NULL,
	"course_duration" integer DEFAULT 0 NOT NULL,
	"total_duration" integer DEFAULT 0 NOT NULL,
	"total_section" integer DEFAULT 0 NOT NULL,
	"rating" integer DEFAULT 0 NOT NULL,
	"enrolled" integer DEFAULT 0 NOT NULL,
	"amound" integer DEFAULT 0 NOT NULL,
	"currency" varchar DEFAULT 'USD' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "leacture" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"asset_type" "asset_type" NOT NULL,
	"asset_url" text NOT NULL,
	"visibility" "visibility" DEFAULT 'public' NOT NULL,
	"duration" integer DEFAULT 0 NOT NULL,
	"section_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "section" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"leacture_count" integer DEFAULT 0 NOT NULL,
	"section_duration" integer DEFAULT 0 NOT NULL,
	"course_id" integer NOT NULL
);
--> statement-breakpoint
ALTER TABLE "course" ADD CONSTRAINT "course_author_id_user_id_fk" FOREIGN KEY ("author_id") REFERENCES "public"."user"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "leacture" ADD CONSTRAINT "leacture_section_id_section_id_fk" FOREIGN KEY ("section_id") REFERENCES "public"."section"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "section" ADD CONSTRAINT "section_course_id_course_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;