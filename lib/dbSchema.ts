import { boolean, index, pgTable, primaryKey, serial, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const contactSubmissions = pgTable(
  "contact_submissions",
  {
    id: serial("id").primaryKey(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    name: text("name").notNull(),
    email: text("email").notNull(),
    organisation: text("organisation"),
    category: text("category").notNull(),
    message: text("message").notNull(),
    /** Salted SHA-256 of the sender IP – used only for rate limiting. */
    ipHash: text("ip_hash").notNull(),
    handled: boolean("handled").default(false).notNull(),
  },
  (t) => [index("contact_ip_time_idx").on(t.ipHash, t.createdAt)],
);

/** Anonymous visitor – the id lives in an httpOnly cookie, no personal data. */
export const visitors = pgTable("visitors", {
  id: uuid("id").primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
  lastSeen: timestamp("last_seen", { withTimezone: true }).defaultNow().notNull(),
});

/** Signals such as "page:about" or "case:elecnor". */
export const visitorProgress = pgTable(
  "visitor_progress",
  {
    visitorId: uuid("visitor_id")
      .notNull()
      .references(() => visitors.id, { onDelete: "cascade" }),
    signal: text("signal").notNull(),
    at: timestamp("at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [primaryKey({ columns: [t.visitorId, t.signal] })],
);

export const visitorAchievements = pgTable(
  "visitor_achievements",
  {
    visitorId: uuid("visitor_id")
      .notNull()
      .references(() => visitors.id, { onDelete: "cascade" }),
    achievement: text("achievement").notNull(),
    unlockedAt: timestamp("unlocked_at", { withTimezone: true }).defaultNow().notNull(),
  },
  (t) => [primaryKey({ columns: [t.visitorId, t.achievement] }), index("achievement_idx").on(t.achievement)],
);
