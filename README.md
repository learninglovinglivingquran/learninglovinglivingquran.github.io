# LQ Pathway site structure

```
index.html                      Home page
about.html
css/style.css                   One stylesheet for every page
templates/
  post-template.html            Copy this to start any new post (not a live page)
blog/
  index.html                    Blog home: newest item from each category
  reflections/
    index.html                  Category home
  arabic-grammar/
    index.html
  quran-in-prayer/
    index.html                  Category home: companion pages for the study circle
    al-fatiha-1-4.html          Posts sit next to their category's index.html
  quran-review/
    index.html                  Category home: lists the surahs
    al-hashr/
      index.html                Surah home: lists that surah's ayah reviews
      ayah-1.html               Ayah reviews go in the surah's folder
```

## Adding things

**A post (Reflections, Arabic grammar, Quran in prayer)**
1. Copy `templates/post-template.html` to `blog/<category>/your-post-slug.html`.
2. Fix the `../` paths (cheat sheet below).
3. Add it at the top of `blog/<category>/index.html`.
4. Replace that category's item on `blog/index.html` and, if it is the newest overall, the "Latest posts" list on `index.html`.

**A surah (Quran Review)**
1. Copy the `blog/quran-review/al-hashr/` folder to `blog/quran-review/<surah>/`.
2. Edit its `index.html` (name, Arabic name, surah number, ayat count, intro).
3. Add it at the top of `blog/quran-review/index.html`, and update `blog/index.html` and `index.html`.

**An ayah review**
1. Copy `templates/post-template.html` to `blog/quran-review/<surah>/ayah-N.html`.
2. Fix the `../` paths (3 levels deep).
3. Add it to the list in that surah's `index.html`, in ayah order.

## Path cheat sheet

Count how many folders deep the file is. Each level adds one `../`.

| File location | Depth | css | Home | Blog nav | About |
|---|---|---|---|---|---|
| `index.html`, `about.html` | 0 | `css/` | `index.html` | `blog/index.html` | `about.html` |
| `blog/index.html` | 1 | `../css/` | `../index.html` | `index.html` | `../about.html` |
| `blog/<category>/*.html` | 2 | `../../css/` | `../../index.html` | `../index.html` | `../../about.html` |
| `blog/quran-review/<surah>/*.html` | 3 | `../../../css/` | `../../../index.html` | `../../index.html` | `../../../about.html` |
| `templates/post-template.html` | 1 | `../css/` | `../index.html` | `../blog/index.html` | `../about.html` |

## Notes

- Every page links to `index.html` explicitly (for example `reflections/index.html`), so the site also works when opened from a folder on your computer.
- Posts still marked "title goes here" or pointing at `templates/post-template.html` are placeholders.
- Pages for the study circle carry a "Draft" credit line until the Arabic has been checked and a scholar has reviewed them. Delete the line once approved.
