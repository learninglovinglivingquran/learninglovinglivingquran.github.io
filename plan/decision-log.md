# LQ — Decision Log
### Append-only record of real decisions made, with the alternatives considered and why. Add one dated entry whenever a name, platform, structural choice, or scope cut gets settled. Never delete entries — if a decision gets reversed, add a new entry noting the reversal and linking back.

---

**2026 (date uncertain — backfilled from LQ Overview Update v3.0):**

- **Audience framing changed** from "primary: disconnected Muslims, secondary: sincere seekers" to a single audience of "sincere truth seekers" entering through two equal doors (the questioning mind / the disconnected heart). *Why:* the old framing created an implicit hierarchy between two groups that actually share the same core quality — honesty.

- **Newsletter retired (August 2026).** All email capture removed sitewide (homepage, blog hub, five category pages), replaced with a "Follow LQ on Social Media" CTA. *Why:* not recorded in the source doc — worth capturing next time this comes up if the reasoning is still remembered.

- **Blog structure rebuilt (August 2026)** into a hub page plus five category home pages, replacing the original two-essay homepage model. *Why:* an earlier build had accidentally duplicated the Legible World featured post into all five categories under the wrong labels; the rebuild both fixed this and gave LQ room for five genuinely distinct categories.

- **"Arabic — Science & Art" renamed to "An Arabic Quran"** (August 2026), including internal identifiers and CSS classes. *Why:* not recorded — worth capturing if remembered.

- **Website stack: HTML/CSS/JS standalone, migrating to Jekyll + GitHub Pages.** Beehiiv (newsletter platform) is no longer part of the plan following the newsletter retirement.

---

**September 2026:**

- **Vision sharpened:** LQ's rational/material starting point (Door One) is now explicitly grounded in a historical claim — modern people are more materially bewitched than past generations, so approaches built for a spiritually-open audience no longer meet people where they are. *Why:* this had been implicit in the Door One framing but wasn't stated as the explicit rationale anywhere. Action: fold this into Essay One during the remediation pass (Workstream 2).

- **Al-Safar (YouTube channel, Quranic-Arabic-only) is being retired and replaced by a new LQ YouTube channel** covering all LQ content, not just Arabic. *Why (stated by Shaheer):* part of the broader LQ reframing — video content should mirror the full scope of LQ, not just the Arabic Toolkit track. *Open follow-up:* migration path (rebrand existing channel vs. new channel + sunset) not yet decided — see LQ Workstream Tracker, Workstream 7. Handle claimed: see below.

- **Tadabbur (daily Quran-engagement app concept) is being retired and replaced by a new LQ app.** *Why (stated by Shaheer):* same reframing — the app should be built under the LQ umbrella from the current vision, not carried forward under its earlier standalone name. *Open follow-up:* how much of Tadabbur's actual design work (four-layer daily loop, anti-gamification stance) carries forward vs. gets rethought — see LQ Workstream Tracker, Workstream 8.

- **LQ's plan tracking will NOT live inside the existing Daily Brief productivity system.** *Why (stated by Shaheer):* LQ has its own shape (content pipeline across categories/media) distinct from the customer-service-area work Daily Brief is built around. Result: LQ Master Plan, LQ Workstream Tracker, and this Decision Log were created as dedicated project docs instead.

- **Master planning system adopted:** three-document structure — LQ Master Plan (strategic, quarterly review), LQ Workstream Tracker (operational, weekly/biweekly review), LQ Decision Log (this document, append-only). *Why:* to stop decisions and status from living only in memory or getting buried inside prose-heavy overview docs.

- **Domain decided: lqpathway.com.** The site is now live at this domain. *Alternatives considered:* tadabbur.com (ruled out partly because "Tadabbur" is being retired as a standalone name — see above). *Why:* not otherwise recorded — settled directly by Shaheer. *Follow-up:* unblocks Workstream 5 (infrastructure/SEO can proceed against a stable domain) and the branding of social handles below.

- **Social media platforms and handles decided, across four platforms:**
  - YouTube: `@LQPathway`
  - X (Twitter): `@LQPathway`
  - Instagram: `lq.pathway`
  - Reddit: `u/LQPathway`
  
  *Why:* not otherwise recorded — settled directly by Shaheer, consistent with the lqpathway.com domain. *Follow-up:* unblocks Workstream 6 (replace the sitewide "Follow LQ on Social Media" placeholder with real links) and Workstream 4 (cross-linking/CTA routing can now be built against real destinations). Reddit's earlier framing as outreach/engagement (vs. YouTube/X/Instagram as primary channels) still needs a usage plan — see Workstream 6.

- **Essay Two ("The Thread") pulled from the near-term plan.** It will not be published or placed into a blog category right now; it's being shelved and will be re-added later, once the current reframing/changes are documented and stabilized. *Why (stated by Shaheer):* sequencing — better to stabilize the current changes first than to place a major Door Two piece before that foundation is settled. *Follow-up:* removes the "Essay Two category home" open decision from Workstreams 2 and 3 for now; re-add as a Workstream 2/3 item when the content strategy work resumes on Door Two.

---

**September 2026 (website architecture & content-structure session):**

- **Site-wide CSS/JS extracted into shared files.** Every page's own copy of the same `<style>`/`<script>` blocks was replaced with links to `/css/main.css` and `/js/main.js`. `index.html`, `blog.html`, `legible-world.html`, and `is-this-it.html` use root-relative paths (`/css/main.css`); the individual Legible World posts and the two Quran Reflection category pages use relative paths (`../../css/main.css`, `../../js/main.js`), per direct instruction. *Why:* over a dozen pages were each carrying an identical, independently-editable copy of the same CSS/JS, making any sitewide styling or behavior change require editing every file by hand. *Follow-up:* the site now has two path conventions for the same two files (root-relative vs. relative) — worth standardizing on one before the Jekyll migration, so future pages don't have to guess which pattern to follow.

- **Homepage mobile nav unified with the rest of the site.** `index.html` previously used a different mobile-menu pattern (an inline `.nav-links` dropdown) than the other pages (a dedicated slide-down `#mobileMenu` panel). Updated to the shared panel pattern so one JS file (`main.js`) could drive navigation on every page. *Why:* a single shared JS file can't support two different markup patterns for the same component. *Follow-up:* none — homepage mobile nav now looks and behaves like the rest of the site.

- **Legible World given three sub-tracks: The Argument, The Signs, The Reflections.** *The Argument* is the existing, closed 12-part sequential series (unchanged, not open to new entries). *The Signs* and *The Reflections* are new, open-ended tracks for content beyond the fixed 12 parts — *The Signs* for reflections on signs noticed in lived experience, *The Reflections* for further rational questions that extend the core case. Both are live on the category page with filter tabs and "coming soon" placeholders; no posts written yet. *Alternatives considered:* "The Case" / "The Encounter" as track names, later simplified to "The Signs" / "The Reflections." *Why:* the 12-part Argument series has a deliberate beginning and ending (culminating in "The Invitation") and isn't meant to keep growing; new material needed a home that didn't disturb that arc. *Follow-up:* write and publish the first posts in The Signs and The Reflections.

- **Legible World's category description rewritten** to name all three tracks and explicitly invite undecided readers to start there ("If you're not sure where to start... start here"). Updated in four places: the category page's on-page description, its meta description, the blog hub's category description, and the series-box blurb on each of the 12 Argument posts.

- **Quran Reflection — Topics given its first sub-category: "The Business World"** (ayahs on trade, wealth, and honest dealing). Filter tab and sub-category structure added to the category page and linked from the blog hub; no posts written yet.

- **Quran Reflection given its first sub-category: "Al-Fatiha"** (sequential reflection on the opening surah). Filter tab and sub-category structure added to the category page and linked from the blog hub; no posts written yet.

- **Blog hub's top-level category filter bar disabled (commented out, not deleted).** *Why (stated by Shaheer):* with only a few articles per category right now, filtering adds no value; categories are separated instead with larger titles (`.category-title`) and a visual divider between blocks (`.hub-category`). *Follow-up:* filter bar markup is preserved in an HTML comment so it can be re-enabled once there are enough posts per category to justify it.

- **Sub-category tag added to Legible World post cards.** Each post entry (featured and grid) now shows which track it belongs to (e.g. "The Argument") alongside the existing category pill, so a mixed listing stays legible once The Signs and The Reflections have posts too.

---

*Template for new entries:*

> **[Decision made]** — one line stating what was decided. *Alternatives considered:* what else was on the table. *Why:* the actual reasoning. *Follow-up:* anything this now unblocks or requires.