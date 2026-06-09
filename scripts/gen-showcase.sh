#!/usr/bin/env bash
# Generiert die Showcase-Geräte-Mockups (Higgsfield) im 4:3-Format.
set -u
cd "$(dirname "$0")/.."
mkdir -p public/media/showcase

declare -A SHOTS=(
  [desktop]="A sleek modern laptop displaying a premium dark-mode agency website with orange-to-red gradient accents (#ff6a2b) and glassmorphism UI cards. Dark studio background with soft warm orange glow and subtle reflections, cinematic product shot, ultra clean, high detail, no legible text."
  [mobile]="A modern smartphone floating at a slight angle, displaying a premium dark-mode website with orange gradient accents and glassmorphism UI. Dark studio background with soft orange glow, cinematic product render, ultra clean, high detail, no legible text."
  [dashboard]="A modern laptop and tablet side by side showing a sleek dark-mode web app dashboard with orange gradient charts and translucent glass cards. Dark studio background with warm orange glow, premium product shot, high detail, no legible text."
)

for name in desktop mobile dashboard; do
  echo ">>> $name"
  url=$(higgsfield generate create gpt_image_2 \
        --prompt "${SHOTS[$name]}" \
        --aspect_ratio 4:3 --resolution 2k --wait --wait-timeout 12m 2>/dev/null | tail -1)
  echo "    url=$url"
  [ -n "$url" ] && curl -fsSL "$url" -o "public/media/showcase/${name}.png"
done
echo ">>> SHOWCASE FERTIG"
ls -lh public/media/showcase/
