import Link from "next/link";
import type { TImage, TLink } from "@/types";
import { StrapiImage } from "./strapi-image";

export interface HeroSectionProps {
    id: number;
    __component: string;
    heading: string;
    subHeading: string;
    image: TImage;
    link: TLink;
}

export function HeroSection({ data }: { data: HeroSectionProps }) {
  if (!data) return null;

  const { heading, subHeading, image, link } = data;
  return (
    <header className="relative h-[600px] overflow-hidden">
      <StrapiImage 
        alt="Background"
        className="absolute inset-0 object-cover w-full h-full"
        height={1080}
        width={1920}
        src={image.url}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black/50">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">{heading}</h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl">{subHeading}</p>
        {link && link.url && (
          <Link className="mt-8 inline-flex items-center justify-center px-6 py-3 text-base font-medium text-black bg-white rounded-md shadow hover:bg-gray-100 transition-colors" href={link.url}>
            {link.text}
          </Link>
        )}
      </div>
    </header>
  );
}

