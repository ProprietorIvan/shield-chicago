import { FLEET_HUBS, CITY_PATH, LAKE_PATH } from "@/lib/chicago-outline";

type Pt = [number, number];

function curvePath(a: Pt, b: Pt, bend: number): string {
  const mx = (a[0] + b[0]) / 2 + bend;
  const my = (a[1] + b[1]) / 2 - Math.abs(bend) * 0.6;
  return `M${a[0]},${a[1]} Q${mx},${my} ${b[0]},${b[1]}`;
}

const center = FLEET_HUBS[0];
const loop = FLEET_HUBS[1];
const lincoln = FLEET_HUBS[2];
const wicker = FLEET_HUBS[3];
const hyde = FLEET_HUBS[4];

const ROUTES: { path: string; dur: string; delay: string; r: number }[] = [
  { path: curvePath(center.pos, loop.pos, 12), dur: "10s", delay: "0s", r: 5 },
  { path: curvePath(center.pos, lincoln.pos, -18), dur: "12s", delay: "0.8s", r: 4.5 },
  { path: curvePath(lincoln.pos, wicker.pos, 14), dur: "11s", delay: "1.4s", r: 4.5 },
  { path: curvePath(center.pos, wicker.pos, 22), dur: "13s", delay: "0.4s", r: 4.5 },
  { path: curvePath(center.pos, hyde.pos, 28), dur: "16s", delay: "1.8s", r: 5 },
  { path: curvePath(loop.pos, hyde.pos, -16), dur: "15s", delay: "2.4s", r: 4 },
];

export function ChicagoFleetMap() {
  return (
    <div className="nyc-service-map" aria-hidden="true">
      <svg
        viewBox="80 0 320 600"
        className="nyc-service-map-svg"
        role="img"
        aria-label="Chicago service map with Shield crews responding"
      >
        <defs>
          <filter id="fleet-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path d={LAKE_PATH} className="nyc-map-borough nyc-map-borough-outer" />
        <path d={CITY_PATH} className="nyc-map-borough" />
        {ROUTES.map((route, i) => (
          <path key={`trail-${i}`} d={route.path} className="nyc-map-trail" fill="none" />
        ))}
        {FLEET_HUBS.map((hub) => (
          <a key={hub.id} href={`/coverage/${hub.id}`}>
            <circle
              cx={hub.pos[0]}
              cy={hub.pos[1]}
              r={hub.primary ? 10 : 7}
              className="nyc-map-hub-ring"
            />
            <circle
              cx={hub.pos[0]}
              cy={hub.pos[1]}
              r={hub.primary ? 5 : 3.5}
              className="nyc-map-hub"
            />
          </a>
        ))}
        {ROUTES.map((route, i) => (
          <g key={`car-${i}`} filter="url(#fleet-glow)">
            <circle r={route.r} className="nyc-map-car">
              <animateMotion dur={route.dur} begin={route.delay} repeatCount="indefinite" path={route.path} />
            </circle>
            <circle r={route.r * 2.4} className="nyc-map-car-pulse">
              <animateMotion dur={route.dur} begin={route.delay} repeatCount="indefinite" path={route.path} />
              <animate
                attributeName="opacity"
                values="0.45;0;0.45"
                dur="2.4s"
                begin={route.delay}
                repeatCount="indefinite"
              />
              <animate
                attributeName="r"
                values={`${route.r * 1.6};${route.r * 3.2};${route.r * 1.6}`}
                dur="2.4s"
                begin={route.delay}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}
