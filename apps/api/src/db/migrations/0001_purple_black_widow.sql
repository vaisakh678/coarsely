CREATE TABLE "category" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"slug" varchar NOT NULL,
	"parent_category_id" integer,
	CONSTRAINT "category_name_unique" UNIQUE("name"),
	CONSTRAINT "category_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "category" ADD CONSTRAINT "category_parent_category_id_category_id_fk" FOREIGN KEY ("parent_category_id") REFERENCES "public"."category"("id") ON DELETE cascade ON UPDATE no action;