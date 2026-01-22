import { HeroSection } from "@/components/custom/hero-section";
import { FeaturesSection } from "@/components/custom/features-section";
import { TBlocks, THeroSection, TFeaturesSection } from "@/types";
import { loaders } from "@/data/loaders";

function blockRenderer(block: TBlocks, index: number) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={index} data={block as THeroSection} />;
    case "layout.features-section":
      console.log("Sections data:", block);
      return (
        <FeaturesSection key={index} data={block as TFeaturesSection} />
      );
    default:
      return null;
  }
}

export default async function Home() {
  const strapiData = await loaders.getHomePageData();
  const blocks = strapiData.data?.blocks || [];

  return <main>{blocks.map((block: TBlocks, index: number) => blockRenderer(block, index))}</main>;
}