
import { APP_NAME } from "#/lib/constants/app";
import { integer, pgSchema, text, timestamp } from "drizzle-orm/pg-core";

export const customSchema = pgSchema(APP_NAME.replaceAll(" ", "_").toLowerCase());

export const contacts = customSchema.table(
  "website_contacts",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    first_name: text().notNull(),
    last_name: text().notNull(),
    email: text().notNull().unique(),
    phone: text().notNull(),
    company_size: text().notNull(),
    service: text().notNull(),
    message: text(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    // Tracks the last time the record was updated
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ([
    // Additional index on the email field if needed
    { emailIdx: table.email, unique: true },
  ])
);

export const blogs = customSchema.table(
  "website_blogs",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: text().notNull(),
    slug: text().notNull().unique(),
    excerpt: text().notNull(),
    content: text().notNull(),
    published: text().notNull().default("published"),
    author: text().notNull(),
    authorImage: text(),
    authorUrl: text(),
    imageUrl: text(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
  },
  (table) => ([
    { slugIdx: table.slug, unique: true },
  ])
);
