# elavo.io

The public website for Elavo, served at [elavo.io](https://elavo.io) by GitHub Pages.

It is plain HTML and CSS with no build step. Each page is a folder with an `index.html`, so URLs end in a slash (`/download/`). Links and assets use root paths (`/assets/site.css`), so preview from the repository root:

```bash
python3 -m http.server 4180
```

Then open <http://127.0.0.1:4180/>.

## Files

| Path | What it is |
| --- | --- |
| `logo.svg` | The sun and the wordmark, including the fade. The home page shows this file on a dark stage. |
| `assets/sun.svg` | The favicon and the header mark. It follows the system light or dark setting. |
| `assets/site.css` | All styles. Page colors follow the About Elavo panel: white and `#141414` in light, `#292929` and `#EBEBEB` in dark. Links use the desktop accent, `#0860f2`. |
| `assets/shots/` | Desktop and Wallpaper screenshots from the test PC, used on the home page. |
| `assets/copy.js` | Adds a Copy button to command blocks. |
| `cosign.pub` | A copy of the image signing key from [elavo-io/elavo](https://github.com/elavo-io/elavo/blob/main/cosign.pub). Keep the two identical. |
| `CNAME` | The custom domain for GitHub Pages. |

The header and footer are repeated in every page. Change all of them together.

## When the first stable ISO is published

In `download/index.html`:

1. Replace the "not published yet" note.
2. Turn the "Not available yet" button into a link to the ISO, and remove `aria-disabled`.
3. Fill in the file size, build date, and SHA-256.

## Things the pages say that will change

- `install/index.html`: Secure Boot is untested, the installer still shows Fedora's name, and installs follow `latest`.
- `hardware/index.html`: one test laptop so far, and no NVIDIA image.
