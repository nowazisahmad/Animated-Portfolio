import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";

const sequences = [
  { src: "raw-frames", name: "hero" },
  { src: "raw-frames-about", name: "about" },
];

const sizes = [
  { suffix: "", width: 1280, quality: 72 },
  { suffix: "-sm", width: 720, quality: 65 },
];

for (const { src, name } of sequences) {
  const files = (await readdir(src)).filter((f) => f.endsWith(".png")).sort();

  for (const { suffix, width, quality } of sizes) {
    const out = `public/frames/${name}${suffix}`;
    await mkdir(out, { recursive: true });

    await Promise.all(
      files.map((file, i) =>
        sharp(`${src}/${file}`)
          .resize({ width })
          .webp({ quality })
          .toFile(`${out}/frame_${String(i + 1).padStart(4, "0")}.webp`)
      )
    );
    console.log(`${out}: ${files.length} frames`);
  }
}