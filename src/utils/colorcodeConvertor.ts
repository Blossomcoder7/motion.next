export function hslToRgba(h: number, s: number, l: number, a: number) {
  s /= 100;
  l /= 100;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (0 <= h && h < 60) [r, g, b] = [c, x, 0];
  else if (60 <= h && h < 120) [r, g, b] = [x, c, 0];
  else if (120 <= h && h < 180) [r, g, b] = [0, c, x];
  else if (180 <= h && h < 240) [r, g, b] = [0, x, c];
  else if (240 <= h && h < 300) [r, g, b] = [x, 0, c];
  else if (300 <= h && h < 360) [r, g, b] = [c, 0, x];

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export function generateAmazingRandomColor(i: number, a?: number) {
  const hue = (i * 100) % 360; // cycle hues every 360°
  const saturation = 75 + Math.random() * 25; // 75% to 100% saturation for vibrance
  const lightness = 45 + Math.random() * 15; // 45% to 60% lightness for richness
  const alpha = 0.2 + Math.random() * 0.1;

  return hslToRgba(hue, saturation, lightness, a || alpha);
}
