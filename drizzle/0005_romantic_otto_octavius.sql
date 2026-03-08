ALTER TABLE "marketing_website"."website_blogs" ALTER COLUMN "author" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "marketing_website"."website_blogs" ADD COLUMN "authorImage" text;--> statement-breakpoint
ALTER TABLE "marketing_website"."website_blogs" ADD COLUMN "authorUrl" text;