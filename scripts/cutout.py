#!/usr/bin/env python3
"""Stellt leuchtende Icons auf schwarzem Hintergrund frei:
Alpha = Helligkeit (Schwarz -> transparent, Glow bleibt weich erhalten).
Trimmt anschließend auf den Inhalt und legt etwas Rand an.

Aufruf: python3 cutout.py input.png output.png [pad_ratio]
"""
import sys
from PIL import Image

def main():
    src, dst = sys.argv[1], sys.argv[2]
    pad_ratio = float(sys.argv[3]) if len(sys.argv) > 3 else 0.10

    img = Image.open(src).convert("RGB")
    px = img.load()
    w, h = img.size
    out = Image.new("RGBA", (w, h))
    op = out.load()

    for y in range(h):
        for x in range(w):
            r, g, b = px[x, y]
            # Helligkeit (perzeptuell) als Alpha
            lum = max(r, g, b)
            # leichte Kurve: dunkles Rauschen vollständig entfernen
            a = 0 if lum < 12 else min(255, int((lum - 12) * 1.12))
            op[x, y] = (r, g, b, a)

    # Auf sichtbaren Inhalt zuschneiden
    bbox = out.getbbox()
    if bbox:
        out = out.crop(bbox)

    # Quadratisch mit Rand zentrieren
    cw, ch = out.size
    side = max(cw, ch)
    pad = int(side * pad_ratio)
    canvas = side + 2 * pad
    final = Image.new("RGBA", (canvas, canvas), (0, 0, 0, 0))
    final.paste(out, ((canvas - cw) // 2, (canvas - ch) // 2), out)
    final.save(dst)
    print(f"OK {dst} {final.size}")

if __name__ == "__main__":
    main()
