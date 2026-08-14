"use client";

import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet";
import { colorForDepth, formatInches, labelForDepth } from "@/lib/depth-scale";
import { CHICAGO_CENTER, CHICAGO_ZOOM } from "@/lib/site";
import type { StationSnapshot } from "@/lib/types";

export function SensorMap({
  stations,
  selectedId,
  onSelect,
  zoom = CHICAGO_ZOOM,
  className = "h-full w-full",
}: {
  stations: StationSnapshot[];
  selectedId?: string | null;
  onSelect?: (id: string) => void;
  zoom?: number;
  className?: string;
}) {
  return (
    <MapContainer
      center={CHICAGO_CENTER}
      zoom={zoom}
      className={className}
      scrollWheelZoom
      aria-label="Chicago flood station map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {stations.map((station) => {
        const selected = station.id === selectedId;
        return (
          <CircleMarker
            key={station.id}
            center={[station.lat, station.lng]}
            radius={selected ? 11 : 7}
            pathOptions={{
              color: selected ? "#ffffff" : "#0B1F33",
              weight: selected ? 2 : 1,
              fillColor: colorForDepth(station.currentDepthInches),
              fillOpacity: 0.92,
            }}
            eventHandlers={{
              click: () => onSelect?.(station.id),
            }}
          >
            <Popup>
              <p className="font-semibold">{station.name}</p>
              <p>
                {station.id} · {station.neighborhood}
              </p>
              <p>
                {formatInches(station.currentDepthInches)} · {labelForDepth(station.currentDepthInches)}
              </p>
            </Popup>
          </CircleMarker>
        );
      })}
    </MapContainer>
  );
}
