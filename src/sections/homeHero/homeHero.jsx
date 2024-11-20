export function HomeHero() {
  return (
    <section id="hero" className="hero-container mx-auto w-1192">
      <div className="hero-image-container flex flex-row h-440 gap-8 mt-40">
        <img
          src="/public/images/hero-photo-1.png"
          alt="Photo of a business meeting."
        />
        <img
          src="/public/images/hero-photo-2.svg"
          alt="Photo of a chart depicting ESG leverage."
        />
      </div>
    </section>
  );
}
