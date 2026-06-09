#!/usr/bin/env bash
# Generiert das komplette Service-Icon-Set im einheitlichen Glas-Stil (Higgsfield),
# stellt jedes auf reinem Schwarz frei (cutout.py) und legt es unter public/media/icons ab.
set -u
cd "$(dirname "$0")/.."
mkdir -p public/media/icons

STYLE_A="A single premium 3D icon of "
STYLE_B=", sculpted from translucent glass with a vivid orange-to-red gradient (#ff8a3d to #e5371a), soft inner glow, glossy highlights and reflections. Centered, minimal, modern, no text, no shadow on ground. Solid pure black background (#000000), studio product render, sharp focus."

declare -A ICONS=(
  [webdesign]="a glossy browser window with code brackets"
  [branding]="a fountain pen nib beside three overlapping color swatch circles"
  [seo]="a magnifying glass over a rising bar chart with an upward arrow"
  [legal]="a shield with a checkmark inside it"
  [shop]="a shopping bag with a small app-grid emblem"
  [care]="a mechanical gear cog with a small wrench"
)

for name in webdesign branding seo legal shop care; do
  subject="${ICONS[$name]}"
  echo ">>> $name : $subject"
  url=$(higgsfield generate create gpt_image_2 \
        --prompt "${STYLE_A}${subject}${STYLE_B}" \
        --aspect_ratio 1:1 --resolution 1k --wait --wait-timeout 12m 2>/dev/null | tail -1)
  echo "    url=$url"
  if [ -n "$url" ]; then
    curl -fsSL "$url" -o "public/media/icons/${name}_raw.png" \
      && python3 scripts/cutout.py "public/media/icons/${name}_raw.png" "public/media/icons/${name}.png" \
      && rm -f "public/media/icons/${name}_raw.png"
  fi
done
echo ">>> ICON-SET FERTIG"
ls -1 public/media/icons/
