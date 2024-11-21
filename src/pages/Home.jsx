import { Header } from "../components/header/header";
import { HomeHero } from "../sections/homeHero/homeHero";
import { LogoSlider } from "../sections/logoSlider/logoSlider";

export function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <LogoSlider />
    </>
  );
}
