import cairosvg
from PIL import Image
import io
import os

svg_path = r"C:\Users\USER\athena-desktop\src\renderer\src\assets\athena-q.svg"
build_dir = r"C:\Users\USER\athena-desktop\build"

# Convert SVG to high-res PNG (1024x1024)
png_data = cairosvg.svg2png(url=svg_path, output_width=1024, output_height=1024)
img = Image.open(io.BytesIO(png_data))

# build/icon.png — 512px (electron-builder default source)
build_png = os.path.join(build_dir, "icon.png")
img_resized = img.resize((512, 512), Image.LANCZOS)
img_resized.save(build_png, "PNG")
print(f"✓ icon.png 512px — {os.path.getsize(build_png)} bytes")

# icon.ico — Windows, 256px
ico_path = os.path.join(build_dir, "icon.ico")
img_256 = img.resize((256, 256), Image.LANCZOS)
img_256.save(ico_path, "ICO", sizes=[(256, 256)])
print(f"✓ icon.ico 256px — {os.path.getsize(ico_path)} bytes")

# icon-1024.png — for icns generation if needed
icns_png = os.path.join(build_dir, "icon-1024.png")
img.save(icns_png, "PNG")
print(f"✓ icon-1024.png — {os.path.getsize(icns_png)} bytes")

print("Done.")
