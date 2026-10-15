# To confirm before launch

Everything on the site comes from Christabel's CV. Nothing has been invented, but several items need her sign-off before the site goes public.

Items marked as needing confirmation show a dashed **"awaiting"** tag when the site runs in development (`npm run dev`).

## Professional standing
- [ ] **GhIE status.** The CV lists "Professional Engineer (Electrical Division)" under Professional Body, and her name with "Ing." and "P.E.-GhIE".
  - Confirm the exact membership grade and registration number.
  - Confirm that "Ing." and "P.E.-GhIE" are the correct styles to display.
  - *Files: `constants/credentials.ts`, `constants/site.ts`, About page.*

## Employment
- [ ] **Bentry Company Limited.** Is the role (10/2023 – present) still current?
- [ ] **Names.** May the employers (Bentry, ELECNOR S.A., NEDCo) and the client (Volta River Authority) be named publicly?
- [ ] **Case-file details.** For each role, supply any of:
  - project names
  - technical context (voltages, equipment)
  - verified outcomes
  - extra tools used

  Empty "Verified outcomes" sections stay hidden.

## Training & certificates
For each item, confirm the exact official name, the issuing organisation and the date:
- [ ] IEC 61850 Tier I, II and III and Cyber Security, Phoenix, Arizona, USA. Who ran the training?
- [ ] Factory Acceptance Test for power transformers, Jiangshan, China.
  - The CV names Zhejiang Jiangshan Transformers Company Limited.
  - Several photos show **TGOOD** branding. Which company or facility was it?
- [ ] Operation and maintenance of GHA and GMAe switchgear, Schneider Electric, Regensburg, Germany.
- [ ] Cambridge Center of Excellence, "Project Management Professional".
  - Is this a course or a certification?
  - The site currently words it as a *course*, so it is not confused with PMI's PMP®.
- [ ] Energy Efficiency Management Certificate (EEMCP): issuer and date.
- [ ] Diploma in operational applications of drones in engineering: issuer and date.
- [ ] RPAS safety training: issuer, date, and whether she holds a drone pilot licence or permit.

## Mentorship (EGA Mentorship International)
- [ ] Her exact role, programme or cohort, and current availability. The site currently says only "mentor with EGA Mentorship International".
- [ ] Is "Request mentorship" through this site's contact form acceptable, or should requests go only through EGA?

## Leadership
- [ ] Responsibilities, initiatives or outcomes for each role. They are shown only once supplied.
- [ ] The year of the L'Oréal Brandstorm semi-finalist recognition.
- [ ] Any speaking engagements, conferences or community service to add. These sections stay hidden while empty.

## Contact & profiles
- [ ] Confirm that **cfremah30@gmail.com** may be shown publicly. It currently is, assembled in the browser to deter scrapers. Set `email.show` in `constants/site.ts` to `false` to hide it.
- [ ] LinkedIn profile URL.
- [ ] Domain name for the site.

## Photos
- [ ] Consent from the other people visible in three photos: the training session, the factory showroom tour and the FAT review meeting.
- [ ] Accurate captions for each photo (event, place, year). The current captions are deliberately generic. *File: `constants/photos.ts`.*

## Wording
- [ ] Final approval of the hero headline ("Engineering reliable power. Developing future leaders."), the biography on the About page, and the mentorship quote. The quote is written in her voice.

## General engineering content (added in the page expansion)
- [ ] Review the "General context" explanations on the case-study and training-guide pages. They describe each field in general terms. Check in particular:
  - the GHA/GMAe switchgear description
  - the transformer FAT test list
  - the IEC 61850 topics
- [ ] Review the glossary, the grid readiness quiz, the career pathways and both FAQs for accuracy and tone.
- [ ] Confirm the training links on each case study ("Related training") are appropriate.
- [ ] The NEDCo case study uses the China factory photo (captioned as such). Supply a NEDCo-era photo if one is available.

## Never published (by design)
- Phone number, home locality, referees and their phone numbers, secondary/junior school history, and driver's licence.
