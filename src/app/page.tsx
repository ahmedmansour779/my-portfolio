import { Hero } from "./layouts/pages/home/Hero";
import { WelcomeAnimation } from "./layouts/pages/home/WelcomeAnimation";
import { SoundBackground } from "./layouts/SoundBackground";

export default function Home() {
  return (
    <div className="">
      <WelcomeAnimation />
      <SoundBackground />
      <Hero />
    </div>
  );
}
