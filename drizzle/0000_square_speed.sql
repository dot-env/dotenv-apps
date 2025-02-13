CREATE TABLE "website_contacts" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "website_contacts_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"firstName" text NOT NULL,
	"lastName" text NOT NULL,
	"email" text NOT NULL,
	"phone" text NOT NULL,
	"companySize" text NOT NULL,
	"service" text NOT NULL,
	"message" text NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "website_contacts_email_unique" UNIQUE("email")
);
