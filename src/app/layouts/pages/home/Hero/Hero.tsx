import { HeaderHero } from "@/src/app/components/home/hero/HeaderHero";
import { ImageHero } from "@/src/app/components/home/hero/ImageHero";
import { TextHero } from "@/src/app/components/home/hero/TextHero";

export function Hero() {
  return (
    <div className="h-lvh w-full bg-third/90">
      <HeaderHero />
      <div>
        <TextHero />
        <ImageHero />
      </div>
    </div>
  );
}
