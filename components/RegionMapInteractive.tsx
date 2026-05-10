"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  center: { lat: number; lng: number };
  label: string;
  zoom?: number;
};

export function RegionMapInteractive({ center, label, zoom = 8 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    if (!token || !containerRef.current || mapRef.current) return;
    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [center.lng, center.lat],
      zoom,
      cooperativeGestures: true,
      attributionControl: true,
    });
    new mapboxgl.Marker({ color: "#8a3a1f" }).setLngLat([center.lng, center.lat]).addTo(map);
    mapRef.current = map;
    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [center.lat, center.lng, zoom]);

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label={label}
      style={{ width: "100%", maxWidth: 520, aspectRatio: "1 / 1", border: "1px solid var(--rule)" }}
    />
  );
}
