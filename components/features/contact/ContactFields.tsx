import FormField from "@/components/ui/FormField";
import { CATEGORIES } from "@/constants/contact";
import { cn } from "@/lib/utils";
import type { FieldErrors } from "@/types";

type Props = {
  errors: FieldErrors;
  initialCategory: string;
};

export default function ContactFields({ errors, initialCategory }: Props) {
  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="name" label="Your name" error={errors.name}>
          {(a) => <input {...a} name="name" autoComplete="name" required maxLength={100} />}
        </FormField>
        <FormField id="email" label="Email address" error={errors.email}>
          {(a) => <input {...a} name="email" type="email" autoComplete="email" required maxLength={200} />}
        </FormField>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id="organisation" label="Organisation" optional error={errors.organisation}>
          {(a) => <input {...a} name="organisation" autoComplete="organization" maxLength={150} />}
        </FormField>
        <FormField id="category" label="What is it about?" error={errors.category}>
          {(a) => (
            <select {...a} name="category" required defaultValue={initialCategory}>
              <option value="" disabled>
                Choose a topic
              </option>
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
          )}
        </FormField>
      </div>
      <FormField
        id="message"
        label="Message"
        error={errors.message}
        hint="Include the role, project or programme you have in mind. At least 20 characters."
      >
        {(a) => <textarea {...a} name="message" required maxLength={5000} rows={7} className={cn(a.className, "resize-y")} />}
      </FormField>

      {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
      <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
    </>
  );
}
