# Ing. Christabel Fremah Owusu: professional website

The personal website of Ing. Christabel Fremah Owusu, P.E.-GhIE, an Electrical & Electronics Engineer in Ghana and a mentor with EGA Mentorship International.

The site is built as a **power-grid journey**. Each of the nine pages is a substation that energises when a visitor opens it. A grid meter in the header tracks progress, a grid map doubles as navigation, and achievements unlock as visitors read the real content.

- **Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS v4, with Neon Postgres via Drizzle ORM.
- **Hosting:** built for Vercel's free tier, with no paid services required.
- **Pages:** Home, About, Expertise, Projects & Experience, Credentials, Mentorship, Leadership, Insights (MDX articles) and Contact, plus a custom 404.
- **Backend (optional, Neon):**
  - Stores contact and mentorship enquiries.
  - Stores anonymous grid progress and achievements.
  - Provides aggregate stats.
- **Without a database:** everything still works. Progress falls back to browser storage, and the form relies on email only.

---

## 1. Run it locally

You need **Node.js 20.9 or newer** (`winget install OpenJS.NodeJS.LTS` on Windows).

```bash
npm install
cp .env.example .env.local   # then fill in the values (see below)
npm run dev                  # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Development server with hot reload. Dashed "awaiting confirmation" tags are visible. |
| `npm run build` / `npm start` | Production build and server. Pending tags are hidden. |
| `npm run check` | Lint, type-check and production build in one go. |
| `npm run check:links` | Crawls a running server (`npm start` first) for broken internal links. |
| `npm run db:generate` | Creates a new SQL migration after editing `src/db/schema.ts`. |
| `npm run db:migrate` | Applies migrations to the database in `DATABASE_URL`. |
| `npm run db:studio` | Opens Drizzle Studio to browse enquiries and data. |

## 2. Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes, in production | Public URL with no trailing slash, e.g. `https://christabelowusu.com`. Used for canonical URLs, the sitemap and social previews. |
| `DATABASE_URL` | Recommended | Neon **pooled** connection string. |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Recommended | Web3Forms access key that emails each enquiry to Christabel. |
| `IP_HASH_SALT` | Yes, with a database | A long random string. IPs are stored only as salted hashes, for rate limiting. |

Never commit `.env.local`, because it is gitignored.

The Web3Forms key is *designed* to be public. It can only send form emails to the inbox it was created for, and that's why it is a `NEXT_PUBLIC_` variable.

## 3. Set up Neon (database)

1. Create a free project at <https://console.neon.tech>.
2. Copy the **pooled** connection string into `DATABASE_URL`.
3. Run `npm run db:migrate`. This creates four tables:
   - `contact_submissions`: enquiries from the contact form.
   - `visitors`: anonymous IDs (cookie `cfo_vid`, no personal data).
   - `visitor_progress`: signals such as `page:about` and `case:elecnor`.
   - `visitor_achievements`: achievements, derived **on the server** from signals, so they can't be forged.

**Reading enquiries:** run `npm run db:studio`, or use Neon's SQL editor:

```sql
select created_at, name, email, organisation, category, message
from contact_submissions order by created_at desc;
```

**Data retention:** run occasionally to prune anonymous visitors inactive for 12 months:

```sql
delete from visitors where last_seen < now() - interval '12 months';
delete from contact_submissions where created_at < now() - interval '24 months' and handled;
```

## 4. Set up email (Web3Forms)

1. Go to <https://web3forms.com>, enter the inbox that should receive enquiries, and copy the access key.
2. Set `NEXT_PUBLIC_WEB3FORMS_KEY`.

**How a message flows:**
1. The browser validates the form.
2. `/api/contact` re-validates it and checks the honeypot, the minimum fill time and the per-IP rate limit (3 per 10 minutes).
3. If the checks pass, the message is saved to Neon.
4. The browser then relays the email copy to Web3Forms. Web3Forms' free plan accepts browser submissions only.

If the database is configured, the message is never lost, even if email fails.

## 5. Deploy to Vercel

1. Push this repository to GitHub (see below).
2. In Vercel, choose **Add New → Project**, import the repo and keep the default Next.js settings.
3. Add the environment variables from section 2 for **Production** (and Preview if wanted).
4. Deploy, then run `npm run db:migrate` locally against the production `DATABASE_URL` once.
5. **Custom domain:** go to Project → Settings → Domains, add the domain and follow the DNS instructions. Update `NEXT_PUBLIC_SITE_URL` and redeploy.

**Push to GitHub** (first time):

```bash
git remote add origin https://github.com/<your-account>/<repo-name>.git
git push -u origin main
```

## 6. Editing content

All content lives in typed files under `src/content/`, which is the single source of truth:

| File | Controls |
| --- | --- |
| `site.ts` | Name, credentials line, email visibility, LinkedIn URL, site description |
| `experience.ts` | Employment case files (add verified outcomes to `outcomes: []`) |
| `credentials.ts` | Registration, education, training and certificates (add `date` once verified) |
| `expertise.ts` | Skill groups. Each skill is tagged `experience`, `tool` or `training` |
| `leadership.ts` | Leadership roles. Fill `details` with verified responsibilities. Optional speaking, conference and community lists stay hidden while empty |
| `mentorship.ts` | Mentorship copy. Set `egaRole` only once confirmed |
| `photos.ts` | Image paths, alt text and captions |

Every item has a `status` and a `published` flag:
- `published: false` hides an item.
- Items with `status: "needs-confirmation"` show a dashed tag in development only, so reviewers can see what still needs sign-off.

**Articles:**
1. Copy `content/insights/_template.mdx` to `content/insights/my-article.mdx`.
2. Fill in the frontmatter and remove `draft: true`.
3. Commit. The listing, article page, sitemap entry, reading time, social metadata and Article JSON-LD are all generated automatically.

**Photos:**
1. Add web-sized JPEGs (about 1600px on the long edge) to `public/images/`.
2. Register them in `photos.ts` with descriptive alt text.
3. Only use photos with consent from everyone pictured.

## 7. Quality, security and privacy

- **Accessibility:**
  - Semantic landmarks, a skip link and one `h1` per page.
  - Visible focus states and keyboard-operable toggles and dialog.
  - `aria-live` toasts and form errors tied to their fields.
  - All motion disabled under `prefers-reduced-motion`.
  - The grid meter can be hidden (footer or grid map).
- **SEO:**
  - Unique titles and descriptions, and canonical URLs.
  - Open Graph and Twitter cards, plus a generated social image.
  - `sitemap.xml` and `robots.txt`.
  - Person JSON-LD (and Article JSON-LD on articles).
  - All content is server-rendered; the game layer wraps it.
- **Security headers** (`next.config.ts`): CSP, HSTS, `X-Frame-Options: DENY`, `nosniff`, Referrer-Policy and Permissions-Policy.
- **Privacy:**
  - No analytics or third-party trackers.
  - The email address is assembled in the browser, not present in the HTML.
  - Phone numbers and referees from the CV are never published.
  - The original CV and raw photos stay in `/_source/`, which is gitignored.

## 8. Before launch

See **[CONFIRM-BEFORE-LAUNCH.md](CONFIRM-BEFORE-LAUNCH.md)** for the information Christabel must confirm.
