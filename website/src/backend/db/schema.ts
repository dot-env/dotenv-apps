import { integer, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const contacts = pgTable(
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
  (table) => ({
    // Additional index on the email field if needed
    emailIdx: table.email,
  })
);
