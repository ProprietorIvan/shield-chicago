export type StationMounting = "signpost" | "underpass" | "viaduct";

export type StationStatus = "dry" | "ponding" | "flooding" | "offline";

export type FloodKind = "cloudburst" | "stormwater" | "lakefront" | "snowmelt";

export interface SensorStation {
  id: string;
  name: string;
  neighborhood: string;
  communityAreaNumber: number;
  lat: number;
  lng: number;
  mounting: StationMounting;
  susceptibility: number;
  elevationNote: string;
}

export interface DepthReading {
  t: string;
  depthInches: number;
}

export interface StationSnapshot extends SensorStation {
  currentDepthInches: number;
  status: StationStatus;
  updatedAt: string;
}

export interface FloodEvent {
  slug: string;
  title: string;
  kind: FloodKind;
  start: string;
  end: string;
  summary: string;
  narrative: string[];
  sourcesNote: string;
  hardestHit: string[];
}

export interface EventPeak {
  stationId: string;
  peakInches: number;
  peakAt: string;
}

export interface CommunityMeeting {
  id: string;
  title: string;
  dateLabel: string;
  startIso: string;
  endIso: string;
  place: string;
  address: string;
  summary: string;
  placeholder: true;
}

export interface TeamMember {
  name: string;
  role: string;
  focus: string;
  placeholder: true;
}

export interface Testimonial {
  quote: string;
  name: string;
  affiliation: string;
  placeholder: true;
}

export interface PartnerGroup {
  heading: string;
  names: string[];
  placeholder: true;
}
