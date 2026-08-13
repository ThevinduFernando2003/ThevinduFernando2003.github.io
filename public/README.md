# Public Assets

Place your media files here using the paths referenced in `data/achievements.json` and `data/gallery.json`.

## Expected structure

```
public/
  images/
    fritz-kunz.jpg
    head-prefect.jpg
    swimming-captain.jpg
    national-sports-gold.jpg
    ml-bootcamp.jpg
    anada-padma.jpg
    science-society.jpg
  videos/
    400m-freestyle.mp4
  cv/
    Thevindu_Fernando_CV.pdf
```

SVG placeholders currently live in `public/images/*.svg` and are referenced from the JSON files.
Replace them with your real photos/videos and update the `url` fields in `data/achievements.json` / `data/gallery.json` accordingly (e.g. change `.svg` → `.jpg` / `.mp4`).
