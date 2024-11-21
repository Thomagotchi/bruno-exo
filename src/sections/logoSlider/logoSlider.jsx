import partners from "../../assets/data/partners.json";

export function LogoSlider() {
  return (
    <section
      id="logo-slider"
      className="w-100vw flex flex-row overflow-hidden py-39"
    >
      <div className="flex flex-row content-none before:absolute before:-left-0 after:absolute after:-right-0">
        <div className="flex flex-row w-screen animate-logoSliderAnimation">
          {partners.map((partner) => (
            <img
              className="mx-logoSliderMargin"
              key={`after-${partner.name}-${partners.indexOf(partner)}`}
              src={partner.src}
              alt={partner.alt}
            ></img>
          ))}
        </div>
        <div className="flex flex-row w-screen animate-logoSliderAnimation">
          {partners.map((partner) => (
            <img
              className="mx-logoSliderMargin"
              key={`after-${partner.name}-${partners.indexOf(partner)}`}
              src={partner.src}
              alt={partner.alt}
            ></img>
          ))}
        </div>
      </div>
    </section>
  );
}
