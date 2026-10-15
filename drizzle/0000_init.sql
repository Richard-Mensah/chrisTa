CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"organisation" text,
	"category" text NOT NULL,
	"message" text NOT NULL,
	"ip_hash" text NOT NULL,
	"handled" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "visitor_achievements" (
	"visitor_id" uuid NOT NULL,
	"achievement" text NOT NULL,
	"unlocked_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "visitor_achievements_visitor_id_achievement_pk" PRIMARY KEY("visitor_id","achievement")
);
--> statement-breakpoint
CREATE TABLE "visitor_progress" (
	"visitor_id" uuid NOT NULL,
	"signal" text NOT NULL,
	"at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "visitor_progress_visitor_id_signal_pk" PRIMARY KEY("visitor_id","signal")
);
--> statement-breakpoint
CREATE TABLE "visitors" (
	"id" uuid PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_seen" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "visitor_achievements" ADD CONSTRAINT "visitor_achievements_visitor_id_visitors_id_fk" FOREIGN KEY ("visitor_id") REFERENCES "public"."visitors"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "visitor_progress" ADD CONSTRAINT "visitor_progress_visitor_id_visitors_id_fk" FOREIGN KEY ("visitor_id") REFERENCES "public"."visitors"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "contact_ip_time_idx" ON "contact_submissions" USING btree ("ip_hash","created_at");--> statement-breakpoint
CREATE INDEX "achievement_idx" ON "visitor_achievements" USING btree ("achievement");