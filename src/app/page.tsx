import { Hero } from "./layouts/pages/home/Hero";
import { WelcomeAnimation } from "./layouts/pages/home/WelcomeAnimation";

export default function Home() {
  return (
    <div className="">
      <WelcomeAnimation />
      <Hero />
    </div>
  );
}
