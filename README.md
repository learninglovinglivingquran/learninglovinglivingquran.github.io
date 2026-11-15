# LQ Pathway site structure

```
index.html                      Home page (links to the four categories + latest posts)
about.html
post-template.html              Copy this to start any new post (not a live page)
css/style.css                   One stylesheet for every page
reflections/
  index.html                    Category home
  posts/                        Posts for this category
    islam-in-the-parts-that-suit-me/
      index.html                A post that has its own folder (3 levels deep)
      references/               Source files for the post (git-ignored, not published)
  surahs/
    index.html                  Lists the surah series of reflections
    at-takwir/
      index.html                Series home: lists that surah's reflections
      ayah-8-9.html             A reflection on an ayah (or range), in the surah's folder
arabic-grammar/
  index.html                    Category home: lists the sections of the Bayyinah Dream textbook
  section-4-advanced-structures/
    index.html                  Section home: lists that section's posts in chapter order
    passive-with-a-preposition.html   A post (Chapter 1), in its section's folder
    types-of-ma.html                  A post (Chapter 2)
  posts/
    passive-with-a-preposition.html   Redirect to the new location (old URL was already published)
quran-in-prayer/
  index.html                    Category home: companion pages for the study circle
  posts/
    al-fatiha-1-4.html
quran-review/
  index.html                    Category home: lists the surahs
  posts/
    al-hashr/
      index.html                Surah home: lists that surah's ayah reviews
      ayah-1.html               Ayah reviews go in the surah's folder
```

There is no separate blog page. Each category folder is its own home, and the home page links to all four.

## Adding things

**A post in Arabic grammar**
Arabic grammar notes are grouped by the sections of the Bayyinah Dream textbook (Section 4 is "Advanced structures").
1. Copy `post-template.html` to `arabic-grammar/section-N-<name>/your-post-slug.html` (2 levels deep, so the `../../` paths).
2. Set the breadcrumb: Home › Arabic grammar › Section N: name › short post title.
3. Add it to that section's `index.html` in chapter order, and to the section card on `arabic-grammar/index.html`.
4. If it is the newest post overall, add it to the "Latest posts" list on `index.html`.

**A new section (Arabic grammar)**
1. Copy `arabic-grammar/section-4-advanced-structures/` to `arabic-grammar/section-N-<name>/`.
2. Edit its `index.html` (title, description, breadcrumb, post list) and delete the copied posts.
3. Add a card for it at the top of `arabic-grammar/index.html`.

**A post (Reflections, Quran in prayer)**
1. Copy `post-template.html` to `<category>/posts/your-post-slug.html`.
2. Fix the `../` paths (cheat sheet below) and the breadcrumb at the top (Home › category › short post title).
3. Add it at the top of `<category>/index.html`.
4. If it is the newest post overall, add it to the "Latest posts" list on `index.html`.

**A surah (Quran Review)**
1. Copy the `quran-review/posts/al-hashr/` folder to `quran-review/posts/<surah>/`.
2. Edit its `index.html` (name, Arabic name, surah number, ayat count, intro).
3. Add it at the top of `quran-review/index.html`, and update "Latest posts" on `index.html` if it is the newest.

**A surah series of reflections (Reflections)**
1. Copy `reflections/surahs/at-takwir/` to `reflections/surahs/<surah>/`, edit its `index.html`, and delete the ayah posts.
2. Add it at the top of `reflections/surahs/index.html`.
3. Each reflection goes in that folder as `ayah-N.html` (or `ayah-N-M.html`). Fix the `../../../` paths and the breadcrumb (Home › Reflections › Surahs › Surah › Ayah).
4. List it on the surah's `index.html`, on `reflections/index.html`, and on the home page if it is the newest post.

**An ayah review**
1. Copy `post-template.html` to `quran-review/posts/<surah>/ayah-N.html`.
2. Fix the `../` paths (3 levels deep) and the breadcrumb (Home › Quran Review › Surah › Ayah N).
3. Add it to the list in that surah's `index.html`, in ayah order.

## Path cheat sheet

Count how many folders deep the file is. Each level adds one `../`.

| File location | Depth | css | Home | About |
|---|---|---|---|---|
| `index.html`, `about.html`, `post-template.html` | 0 | `css/` | `index.html` | `about.html` |
| `<category>/index.html` | 1 | `../css/` | `../index.html` | `../about.html` |
| `arabic-grammar/section-N-<name>/*.html` (section home and its posts) | 2 | `../../css/` | `../../index.html` | `../../about.html` |
| `<category>/posts/*.html` | 2 | `../../css/` | `../../index.html` | `../../about.html` |
| `<category>/posts/<post>/index.html` (post with its own folder) | 3 | `../../../css/` | `../../../index.html` | `../../../about.html` |
| `reflections/surahs/index.html` | 2 | `../../css/` | `../../index.html` | `../../about.html` |
| `reflections/surahs/<surah>/*.html` | 3 | `../../../css/` | `../../../index.html` | `../../../about.html` |
| `quran-review/posts/<surah>/*.html` | 3 | `../../../css/` | `../../../index.html` | `../../../about.html` |

## Notes

- Every category page, surah page and post has a breadcrumb at the top (Home › category › post). The last item is the current page and is not a link.
- A post that needs source files (a transcript, a PDF) can get its own folder: `<category>/posts/<post-slug>/index.html` plus a `references/` subfolder. `arabic-grammar/references/` and `reflections/posts/*/references/` are in `.gitignore`, so those files stay on your computer and are never published.
- Every page links to `index.html` explicitly (for example `reflections/index.html`), so the site also works when opened from a folder on your computer.
- Posts still marked "title goes here" or pointing at `post-template.html` are placeholders.
- Pages for the study circle carry a "Draft" credit line until the Arabic has been checked and a scholar has reviewed them. Delete the line once approved.
