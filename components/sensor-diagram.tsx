export function SensorDiagram() {
  return (
    <svg viewBox="0 0 640 280" className="w-full bg-navy text-paper" role="img" aria-labelledby="sensor-diagram-title">
      <title id="sensor-diagram-title">Ultrasonic flood sensor on a Chicago signpost</title>
      <rect width="640" height="280" fill="#0B1F33" />
      <rect x="70" y="40" width="18" height="200" fill="#5b6b78" />
      <rect x="58" y="36" width="42" height="14" fill="#7FC4E8" />
      <rect x="40" y="58" width="78" height="36" fill="#14324F" stroke="#7FC4E8" />
      <text x="79" y="80" textAnchor="middle" fill="#F6F3EE" fontSize="11" fontFamily="Archivo, sans-serif">
        NODE
      </text>
      <path d="M79 96 L79 170" stroke="#E4002B" strokeDasharray="4 4" />
      <text x="92" y="140" fill="#B3DDF2" fontSize="11">
        ultrasonic ping
      </text>
      <path d="M0 200 H640" stroke="#7FC4E8" strokeWidth="2" />
      <path d="M0 214 C80 204 160 226 240 214 C320 202 400 228 480 214 C560 200 600 220 640 210 V280 H0 Z" fill="#7FC4E8" opacity="0.85" />
      <text x="260" y="248" fill="#0B1F33" fontSize="13" fontFamily="Archivo, sans-serif">
        Ponded water — distance shrinks as depth grows
      </text>
      <text x="360" y="70" fill="#F6F3EE" fontSize="14" fontFamily="Archivo, sans-serif">
        Signpost mount, sidewalk side
      </text>
      <text x="360" y="94" fill="#B3DDF2" fontSize="12">
        Range finder looks down at pavement or water.
      </text>
      <text x="360" y="114" fill="#B3DDF2" fontSize="12">
        Depth = dry-weather range minus current range.
      </text>
    </svg>
  );
}
