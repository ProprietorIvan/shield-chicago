export const CITY_PATH =
  "M260,28.7L265.1,70.9L272.9,123.3L289.1,171.3L307.1,213.5L299.4,230.9L304.6,260L307.1,303.6L334.6,376.4L373.1,434.5L375.7,492.7L367.1,565.5L294.3,574.2L191.4,521.8L138.3,405.5L109.1,274.5L100.6,172.7L109.1,85.5L131.4,28.7L251.4,22.9Z";

/** Lake Michigan edge, east of the city */
export const LAKE_PATH = "M307.1,213.5L320,180L340,120L355,60L360,20L400,20L400,580L367.1,565.5L375.7,492.7L373.1,434.5L334.6,376.4L307.1,303.6L304.6,260L299.4,230.9Z";

export const FLEET_HUBS: { id: string; label: string; pos: [number, number]; primary?: boolean }[] =
  [
    { id: "center-dispatch", label: "Center Dispatch", pos: [266.9, 223.6], primary: true },
    { id: "loop", label: "The Loop", pos: [285.9, 233.7] },
    { id: "lincoln-park", label: "Lincoln Park", pos: [267.5, 170.7] },
    { id: "wicker-park", label: "Wicker Park", pos: [238, 178] },
    { id: "hyde-park", label: "Hyde Park", pos: [319.4, 355.6] },
  ];
