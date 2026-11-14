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
arabic-grammar/
  index.html
  posts/
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

**A post (Reflections, Arabic grammar, Quran in prayer)**
1. Copy `post-template.html` to `<category>/posts/your-post-slug.html`.
2. Fix the `../` paths (cheat sheet below) and the breadcrumb at the top (Home › category › short post title).
3. Add it at the top of `<category>/index.html`.
4. If it is the newest post overall, add it to the "Latest posts" list on `index.html`.

**A surah (Quran Review)**
1. Copy the `quran-review/posts/al-hashr/` folder to `quran-review/posts/<surah>/`.
2. Edit its `index.html` (name, Arabic name, surah number, ayat count, intro).
3. Add it at the top of `quran-review/index.html`, and update "Latest posts" on `index.html` if it is the newest.

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
| `<category>/posts/*.html` | 2 | `../../css/` | `../../index.html` | `../../about.html` |
| `<category>/posts/<post>/index.html` (post with its own folder) | 3 | `../../../css/` | `../../../index.html` | `../../../about.html` |
| `quran-review/posts/<surah>/*.html` | 3 | `../../../css/` | `../../../index.html` | `../../../about.html` |

## Notes

- Every category page, surah page and post has a breadcrumb at the top (Home › category › post). The last item is the current page and is not a link.
- A post that needs source files (a transcript, a PDF) can get its own folder: `<category>/posts/<post-slug>/index.html` plus a `references/` subfolder. `arabic-grammar/references/` and `reflections/posts/*/references/` are in `.gitignore`, so those files stay on your computer and are never published.
- Every page links to `index.html` explicitly (for example `reflections/index.html`), so the site also works when opened from a folder on your computer.
- Posts still marked "title goes here" or pointing at `post-template.html` are placeholders.
- Pages for the study circle carry a "Draft" credit line until the Arabic has been checked and a scholar has reviewed them. Delete the line once approved.
