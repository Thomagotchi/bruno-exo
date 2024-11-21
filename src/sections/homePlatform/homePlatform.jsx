import { useState } from "react";
import platformData from "../../assets/data/platformData.json";
import { PlatformCarouselCard } from "../../components/cards/platformCarouselCard/platformCarouselCard";

export function HomePlatform() {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <section id="platform" className="mx-auto mb-40 mt-120 w-1192">
      <div className="flex text-primary-dark-green w-full">
        <h2 className="text-2m font-neue">
          All your ESG journey needs in one platform
        </h2>
        <div className="grid grid-flow-col auto-cols-max mt-auto gap-20 border-default rounded-100 p-8">
          {platformData.map((platformCard) => (
            <button
              onClick={() => setCurrentCard(platformData.indexOf(platformCard))}
              className={`font-inter text-4s p-9 text-center rounded-100 bg-primary-dark-green/0 transition ease-out duration-300 ${
                platformData.indexOf(platformCard) === currentCard &&
                "bg-primary-dark-green/10"
              }`}
              key={`${platformCard.title}-menu-button`}
            >
              {platformCard.title}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-8 overflow-hidden w-1192 mx-auto">
        {platformData.map((platformCard) => (
          <PlatformCarouselCard
            key={`platform-card-${platformData.indexOf(platformCard)}`}
            menuItem={platformCard}
          />
        ))}
      </div>
    </section>
  );
}
