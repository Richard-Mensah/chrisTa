import { z } from "zod";
import { CATEGORIES } from "@/constants/contact";
import type { CategoryValue, FieldErrors, FieldName } from "@/types";

const categoryValues = CATEGORIES.map((c) => c.value) as [CategoryValue, ...CategoryValue[]];

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name (at least 2 characters).").max(100, "Keep your name under 100 characters."),
  email: z
    .string()
    .trim()
    .max(200, "That email address is too long.")
    .pipe(z.email("Enter a valid email address, like name@example.com.")),
  organisation: z.string().trim().max(150, "Keep the organisation under 150 characters.").optional().default(""),
  category: z.enum(categoryValues, "Choose what your enquiry is about."),
  message: z
    .string()
    .trim()
    .min(20, "Add a little more detail (at least 20 characters).")
    .max(5000, "Keep your message under 5,000 characters."),
  /** Honeypot – must stay empty. */
  website: z.string().optional().default(""),
  /** When the form was rendered (ms since epoch). */
  startedAt: z.number("Refresh the page and try again.").int().positive("Refresh the page and try again."),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;

const FIELD_NAMES: FieldName[] = ["name", "email", "organisation", "category", "message"];

export function toFieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && FIELD_NAMES.includes(key as FieldName) && !out[key as FieldName]) {
      out[key as FieldName] = issue.message;
    }
  }
  return out;
}

export const signalSchema = z.object({ signal: z.string().max(64) });
