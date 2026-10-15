import { z } from "zod";

export const CATEGORIES = [
  { value: "engineering", label: "Engineering opportunity" },
  { value: "collaboration", label: "Technical collaboration" },
  { value: "speaking", label: "Speaking or event" },
  { value: "mentorship", label: "Mentorship" },
  { value: "other", label: "Something else" },
] as const;

export type Category = (typeof CATEGORIES)[number]["value"];

export const MIN_FILL_MS = 3000;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name (at least 2 characters).").max(100, "Keep your name under 100 characters."),
  email: z.string().trim().max(200, "That email address is too long.").pipe(z.email("Enter a valid email address, like name@example.com.")),
  organisation: z.string().trim().max(150, "Keep the organisation under 150 characters.").optional().default(""),
  category: z.enum(CATEGORIES.map((c) => c.value) as [Category, ...Category[]], "Choose what your enquiry is about."),
  message: z
    .string()
    .trim()
    .min(20, "Add a little more detail (at least 20 characters).")
    .max(5000, "Keep your message under 5,000 characters."),
  /** Honeypot – must stay empty. */
  website: z.string().optional().default(""),
  /** Time the form was rendered (ms since epoch). */
  startedAt: z.number("Refresh the page and try again.").int().positive("Refresh the page and try again."),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;

export type FieldErrors = Partial<Record<"name" | "email" | "organisation" | "category" | "message", string>>;

export function fieldErrors(error: z.ZodError): FieldErrors {
  const out: FieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0] as keyof FieldErrors;
    if (key && !out[key]) out[key] = issue.message;
  }
  return out;
}
