import Image from "next/image";
import { RegionMapInteractive } from "./RegionMapInteractive";

type Props = {
  filename?: string;
  alt: string;
  center?: { lat: number; lng: number };
  zoom?: number;
};

export function RegionMap({ filename, alt, center, zoom }: Props) {
  const hasToken = Boolean(process.env.NEXT_PUBLIC_MAPBOX_TOKEN);
  if (hasToken && center) {
    return (
      <figure className="region-map region-map--interactive">
        <RegionMapInteractive center={center} label={alt} zoom={zoom} />
      </figure>
    );
  }
  const src = filename ? `/maps/${filename}` : "/maps/_placeholder.svg";
  return (
    <figure className="region-map">
      <Image src={src} alt={alt} width={520} height={520} unoptimized />
    </figure>
  );
}
