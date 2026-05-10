import Image from "next/image";

type Props = {
  filename?: string;
  alt: string;
  size?: number;
  priority?: boolean;
};

export function BotanicalIllustration({ filename, alt, size = 320, priority }: Props) {
  const src = filename ? `/illustrations/${filename}` : "/illustrations/_placeholder.svg";
  return (
    <figure className="botanical">
      <Image src={src} alt={alt} width={size} height={size} priority={priority} unoptimized />
    </figure>
  );
}
