#!/usr/bin/env python3
"""Optimiert alle generierten Medien fürs Web (Größe + Dateigröße)."""
import os
from PIL import Image

ROOT = os.path.join(os.path.dirname(__file__), "..")

def opt_icon(path, size=256):
    img = Image.open(path).convert("RGBA")
    img.thumbnail((size, size), Image.LANCZOS)
    img.save(path, optimize=True)
    return os.path.getsize(path)

def opt_showcase(src, dst, width=1400, q=86):
    img = Image.open(src).convert("RGB")
    if img.width > width:
        h = int(img.height * width / img.width)
        img = img.resize((width, h), Image.LANCZOS)
    img.save(dst, "JPEG", quality=q, optimize=True, progressive=True)
    return os.path.getsize(dst)

def opt_hero(path, width=1600):
    img = Image.open(path).convert("RGB")
    if img.width > width:
        h = int(img.height * width / img.width)
        img = img.resize((width, h), Image.LANCZOS)
    img.save(path, optimize=True)
    return os.path.getsize(path)

icons_dir = os.path.join(ROOT, "public/media/icons")
for f in sorted(os.listdir(icons_dir)):
    if f.endswith(".png"):
        s = opt_icon(os.path.join(icons_dir, f))
        print(f"icon  {f:16s} {s//1024:5d} KB")

sc_dir = os.path.join(ROOT, "public/media/showcase")
for name in ["desktop", "mobile", "dashboard"]:
    png = os.path.join(sc_dir, f"{name}.png")
    jpg = os.path.join(sc_dir, f"{name}.jpg")
    if os.path.exists(png):
        s = opt_showcase(png, jpg)
        os.remove(png)
        print(f"shot  {name:16s} {s//1024:5d} KB  -> {name}.jpg")

hero = os.path.join(ROOT, "public/media/hero.png")
if os.path.exists(hero):
    s = opt_hero(hero)
    print(f"hero  hero.png        {s//1024:5d} KB")
print("FERTIG")
