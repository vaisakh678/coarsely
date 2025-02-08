import { varchar } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { pgEnum } from "drizzle-orm/pg-core";
import { integer } from "drizzle-orm/pg-core";
import { text } from "drizzle-orm/pg-core";
import { serial } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const UserTable = pgTable("user", {
	id: serial("id").primaryKey(),
	fullName: varchar("full_name").notNull(),
	email: varchar("email").unique().notNull(),
	password: text("password"),
	refreshToken: text("refresh_token"),
	lastLogin: timestamp("last_login"),
});

export const categoryTable = pgTable("category", {
	id: serial("id").primaryKey(),
	name: varchar("name").notNull().unique(),
	slug: varchar("slug").notNull().unique(),
	parentCategoryId: integer("parent_category_id").references((): any => categoryTable.id, { onDelete: "cascade" }),
});

export const courseTable = pgTable("course", {
	id: serial("id").primaryKey(),
	name: varchar("name").notNull(),
	description: text("description"),
	cover: text("cover"),
	coverVide: text("cover_video"),
	authorId: integer("author_id")
		.notNull()
		.references((): any => UserTable.id, { onDelete: "restrict" }),
	courseDuration: integer("course_duration").notNull().default(0),
	totalDuration: integer("total_duration").notNull().default(0),
	totalSection: integer("total_section").notNull().default(0),
	rating: integer("rating").notNull().default(0),
	enrolled: integer("enrolled").notNull().default(0),
	amound: integer("amound").notNull().default(0),
	currency: varchar("currency").notNull().default("USD"),
});

export const sectionTable = pgTable("section", {
	id: serial("id").primaryKey(),
	name: varchar("name").notNull(),
	leactureCount: integer("leacture_count").notNull().default(0),
	sectionDuration: integer("section_duration").notNull().default(0),
	courseId: integer("course_id")
		.notNull()
		.references((): any => courseTable.id, { onDelete: "cascade" }),
});

const assetTypeEnum = pgEnum("asset_type", ["video", "text"]);
const visibilityEnum = pgEnum("visibility", ["public", "private"]);
export const leactureTable = pgTable("leacture", {
	id: serial("id").primaryKey(),
	name: varchar("name").notNull(),
	assetType: assetTypeEnum().notNull(),
	assetUrl: text("asset_url").notNull(),
	visibility: visibilityEnum().notNull().default("public"),
	duration: integer("duration").notNull().default(0),
	sectionId: integer("section_id")
		.notNull()
		.references((): any => sectionTable.id, { onDelete: "cascade" }),
});
