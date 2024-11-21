import { Header } from "../components/header/header";
import { HomeHero } from "../sections/homeHero/homeHero";
import { HomeSolutions } from "../sections/homeSolutions/homeSolutions";
import { LogoSlider } from "../sections/logoSlider/logoSlider";

export function Home() {
  return (
    <>
      <Header />
      <HomeHero />
      <LogoSlider />
      <HomeSolutions />
    </>
  );
}
