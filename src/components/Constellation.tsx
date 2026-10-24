const LINES: [number, number, number, number][] = [
  [60, 90, 180, 150], [180, 150, 140, 260], [180, 150, 300, 120], [300, 120, 360, 40],
  [140, 260, 60, 330], [140, 260, 240, 320], [620, 80, 700, 150], [700, 150, 790, 110],
  [700, 150, 760, 240], [760, 240, 840, 290], [120, 520, 220, 560], [220, 560, 200, 640],
  [220, 560, 320, 610],
];

const DOTS: [number, number][] = [
  [60, 90], [180, 150], [140, 260], [300, 120], [360, 40], [60, 330], [240, 320],
  [620, 80], [700, 150], [790, 110], [760, 240], [840, 290], [120, 520], [220, 560],
  [200, 640], [320, 610],
];

export default function Constellation() {
  return (
    <svg className="hero-constellation" viewBox="0 0 900 700" preserveAspectRatio="none" aria-hidden="true">
      <g className="constellation-lines">
        {LINES.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
        ))}
      </g>
      <g className="constellation-dots">
        {DOTS.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={2.4} />
        ))}
      </g>
    </svg>
  );
}