#!/usr/bin/env python3
"""Regenerate favicon / PWA icons / OG image from Cursor asset drops.

Usage:
  python3 scripts/generate-brand-assets.py \\
    --logo /path/to/logo.png \\
    --og /path/to/og-screenshot.png
"""
from __future__ import annotations

import argparse
import base64
import io
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
ICONS = PUBLIC / 'icons'
BG = (16, 14, 40, 255)
RESAMPLE = getattr(Image, 'LANCZOS', Image.ANTIALIAS)


def load_logo(path: Path) -> Image.Image:
    im = Image.open(path).convert('RGBA')
    pixels = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = pixels[x, y]
            if a and r < 18 and g < 18 and b < 18 and a > 200:
                pixels[x, y] = (0, 0, 0, 0)
    bbox = im.getbbox()
    return im.crop(bbox) if bbox else im


def fit_square(src: Image.Image, size: int, pad_ratio: float = 0.08, bg=None) -> Image.Image:
    canvas = Image.new('RGBA', (size, size), bg if bg is not None else (0, 0, 0, 0))
    inner = int(size * (1 - 2 * pad_ratio))
    logo = src.copy()
    logo.thumbnail((inner, inner), RESAMPLE)
    canvas.paste(logo, ((size - logo.width) // 2, (size - logo.height) // 2), logo)
    return canvas


def save_png(im: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(str(path), format='PNG', optimize=True, compress_level=9)
    print(f'  {path.relative_to(ROOT)} ({path.stat().st_size} B)')


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument('--logo', type=Path, required=True)
    parser.add_argument('--og', type=Path, required=True)
    args = parser.parse_args()

    ICONS.mkdir(parents=True, exist_ok=True)
    logo = load_logo(args.logo)

    fav16 = fit_square(logo, 16, 0.04)
    fav32 = fit_square(logo, 32, 0.04)
    fav48 = fit_square(logo, 48, 0.04)
    save_png(fav16, PUBLIC / 'favicon-16x16.png')
    save_png(fav32, PUBLIC / 'favicon-32x32.png')
    fav48.save(str(PUBLIC / 'favicon.ico'), format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
    print(f'  favicon.ico ({(PUBLIC / "favicon.ico").stat().st_size} B)')

    save_png(fit_square(logo, 180, 0.12, BG), PUBLIC / 'apple-touch-icon.png')
    save_png(fit_square(logo, 192, 0.08), ICONS / 'icon-192.png')
    save_png(fit_square(logo, 512, 0.08), ICONS / 'icon-512.png')
    save_png(fit_square(logo, 192, 0.22, BG), ICONS / 'icon-192-maskable.png')
    save_png(fit_square(logo, 512, 0.22, BG), ICONS / 'icon-512-maskable.png')
    save_png(fit_square(logo, 512, 0.06), ICONS / 'logo-mark.png')
    save_png(logo, PUBLIC / 'images' / 'logo-barthez-k.png')

    mark = fit_square(logo, 128, 0.06)
    buf = io.BytesIO()
    mark.save(buf, format='PNG', optimize=True, compress_level=9)
    b64 = base64.b64encode(buf.getvalue()).decode()
    (PUBLIC / 'favicon.svg').write_text(
        f'''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" role="img" aria-label="Barthez Kenwou">
  <title>Barthez Kenwou</title>
  <image width="128" height="128" href="data:image/png;base64,{b64}" xlink:href="data:image/png;base64,{b64}"/>
</svg>
''',
        encoding='utf-8',
    )
    print(f'  favicon.svg ({(PUBLIC / "favicon.svg").stat().st_size} B)')

    (PUBLIC / 'logo.svg').write_text(
        '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" role="img" aria-label="Barthez Kenwou">
  <title>Barthez Kenwou</title>
  <image href="/icons/logo-mark.png" width="512" height="512" preserveAspectRatio="xMidYMid meet"/>
</svg>
''',
        encoding='utf-8',
    )

    og = Image.open(args.og).convert('RGBA')
    tw, th = 1200, 630
    cover = max(tw / og.width, th / og.height)
    cw, ch = int(og.width * cover), int(og.height * cover)
    covered = og.resize((cw, ch), RESAMPLE)
    left, top = (cw - tw) // 2, (ch - th) // 2
    cropped = covered.crop((left, top, left + tw, top + th))
    canvas = Image.new('RGB', (tw, th), BG[:3])
    canvas.paste(cropped, mask=cropped.split()[-1])
    canvas.save(str(PUBLIC / 'og-image.png'), format='PNG', optimize=True, compress_level=9)
    canvas.save(str(PUBLIC / 'og-image.webp'), format='WEBP', quality=86, method=6)
    print(f'  og-image.png ({(PUBLIC / "og-image.png").stat().st_size} B)')
    print(f'  og-image.webp ({(PUBLIC / "og-image.webp").stat().st_size} B)')
    print('done')


if __name__ == '__main__':
    main()
