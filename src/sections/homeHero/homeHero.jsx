import { DemoButtonSecondary } from "../../components/buttons/demoButtonSecondary/demoButtonSecondary";

export function HomeHero() {
  return (
    <section id="hero" className="hero-container mx-auto w-1192 py-40">
      <div className="hero-image-container flex flex-row h-440 gap-8">
        <img
          src="/public/images/hero-photo-1.png"
          alt="Photo of a business meeting."
        />
        <img
          src="/public/images/hero-photo-2.svg"
          alt="Photo of a chart depicting ESG leverage."
        />
      </div>
      <div className="hero-caption flex flex-row text-primary-dark-green py-72">
        <div className="hero-title-container w-5/12">
          <h1 className="hero-title w-fit max-w-4/5 font-neue text-1l ">
            Where ESG <br></br>can be leveraged
          </h1>
        </div>
        <div className="hero-logo-container w-2/12 flex">
          <img
            className="h-64 w-64 m-auto"
            src="/images/greenscope-logo.svg"
            alt="Greenscope logo."
          />
        </div>
        <div className="hero-text-content w-5/12 flex flex-col gap-26">
          <p className="w-4/5 text-center font-inter text-2s ml-4 opacity-70">
            +500 companies use Greenscope
          </p>
          <div className="call-to-action-container w-2/5">
            <DemoButtonSecondary />
          </div>
        </div>
      </div>
    </section>
  );
}
