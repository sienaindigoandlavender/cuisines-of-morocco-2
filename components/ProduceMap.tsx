"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import type { Produce, ProduceKind } from "@/lib/schemas/types";

const KIND_COLOR: Record<ProduceKind, string> = {
  meat: "#8a3a1f",
  seafood: "#1f5a8a",
  fruit: "#b8543a",
  vegetable: "#4a7a3a",
  grain: "#a07a3a",
  spice: "#7a3a8a",
  "tree-fruit": "#6a8a3a",
  dairy: "#8a8a3a",
  fat: "#a08a3a",
  preserve: "#5a5a3a",
};

type Props = {
  items: Produce[];
  /** When set, only this slug's pins are shown highlighted; others fade. */
  focusedSlug?: string | null;
  /** Optional height in CSS, defaults to 520px. */
  height?: number | string;
};

export function ProduceMap({ items, focusedSlug = null, height = 520 }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const markersRef = useRef<{ marker: mapboxgl.Marker; slug: string; el: HTMLElement }[]>([]);
  const [hasToken, setHasToken] = useState<boolean>(false);

  const points = useMemo(() => {
    const out: { slug: string; name: string; kind: ProduceKind; lat: number; lng: number; region: string; notes?: string }[] = [];
    for (const p of items) {
      for (const o of p.origins) {
        out.push({ slug: p.slug, name: p.name, kind: p.kind, lat: o.lat, lng: o.lng, region: o.region_name, notes: o.notes });
      }
    }
    return out;
  }, [items]);

  useEffect(() => {
    const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
    setHasToken(Boolean(token));
    if (!token || !containerRef.current || mapRef.current) return;

    mapboxgl.accessToken = token;
    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/light-v11",
      // Morocco bounding box, roughly: lat 21–36, lng -17–-1
      center: [-7, 31.5],
      zoom: 4.6,
      minZoom: 3.5,
      maxZoom: 9,
      cooperativeGestures: true,
      attributionControl: true,
    });

    map.on("load", () => {
      points.forEach((pt) => {
        const el = document.createElement("div");
        el.className = "produce-pin";
        el.style.width = "12px";
        el.style.height = "12px";
        el.style.borderRadius = "50%";
        el.style.background = KIND_COLOR[pt.kind];
        el.style.border = "2px solid #ffffff";
        el.style.boxShadow = "0 0 0 1px rgba(0,0,0,0.15)";
        el.style.cursor = "pointer";
        el.style.transition = "transform 120ms ease, opacity 120ms ease";
        el.dataset.slug = pt.slug;

        const popup = new mapboxgl.Popup({ offset: 14, closeButton: false }).setHTML(
          `<div style="font-family: var(--sans); font-size: 13px; line-height: 1.4;">
             <strong style="font-family: var(--serif); font-size: 15px;">${pt.name}</strong><br/>
             <span style="color: #525252;">${pt.region}</span>${pt.notes ? `<br/><em style="color: #737373;">${pt.notes}</em>` : ""}
           </div>`
        );

        const marker = new mapboxgl.Marker(el).setLngLat([pt.lng, pt.lat]).setPopup(popup).addTo(map);
        markersRef.current.push({ marker, slug: pt.slug, el });
      });
    });

    mapRef.current = map;
    return () => {
      markersRef.current.forEach((m) => m.marker.remove());
      markersRef.current = [];
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    for (const { slug, el } of markersRef.current) {
      const isFocused = focusedSlug === slug;
      const isDimmed = focusedSlug !== null && focusedSlug !== slug;
      el.style.opacity = isDimmed ? "0.18" : "1";
      el.style.transform = isFocused ? "scale(1.4)" : "scale(1)";
      el.style.zIndex = isFocused ? "10" : "1";
    }
  }, [focusedSlug]);

  if (!hasToken) {
    return (
      <div className="produce-map-fallback" style={{ height, border: "1px solid var(--rule)" }}>
        <p style={{ padding: "1.5rem", color: "var(--secondary)" }}>
          Map requires <code>NEXT_PUBLIC_MAPBOX_TOKEN</code>. Origins are listed below.
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      role="img"
      aria-label="Map of Morocco showing produce origin regions"
      style={{ width: "100%", height, border: "1px solid var(--rule)" }}
    />
  );
}

export { KIND_COLOR };
