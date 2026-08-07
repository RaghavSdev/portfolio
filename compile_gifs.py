import os
from PIL import Image

out_dir = os.path.join(os.path.dirname(__file__), 'public', 'screenshots')
os.makedirs(out_dir, exist_ok=True)
frames_base = os.path.join(os.path.dirname(__file__), 'frames')

def make_gif(frame_folder, output_filename, duration_ms=90):
    folder_path = os.path.join(frames_base, frame_folder)
    if not os.path.exists(folder_path):
        print(f"Folder {folder_path} does not exist.")
        return
    
    files = sorted([f for f in os.listdir(folder_path) if f.endswith('.png')])
    if not files:
        print(f"No frames found in {folder_path}")
        return
    
    images = []
    for f in files:
        img_path = os.path.join(folder_path, f)
        img = Image.open(img_path)
        # Resize frame to max width 900 for fast loading GIF
        img.thumbnail((900, 600), Image.Resampling.LANCZOS)
        # Convert to P palette for optimized GIF size
        images.append(img.convert('P', palette=Image.Palette.ADAPTIVE))
    
    out_path = os.path.join(out_dir, output_filename)
    images[0].save(
        out_path,
        save_all=True,
        append_images=images[1:],
        duration=duration_ms,
        loop=0,
        optimize=True
    )
    print(f"Successfully compiled animated GIF: {out_path} ({os.path.getsize(out_path)} bytes)")

print("Assembling animated GIFs...")
make_gif('hero', '01_animated_hero.gif', duration_ms=100)
make_gif('tilt', '02_animated_3d_tilt.gif', duration_ms=80)
make_gif('matrix', '03_animated_matrix_and_vinyl.gif', duration_ms=90)
print("GIF assembly complete!")
