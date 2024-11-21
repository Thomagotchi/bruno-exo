import { useState } from "react";
import platformData from "../../assets/data/platformData.json";
import { PlatformCarouselCard } from "../../components/cards/platformCarouselCard/platformCarouselCard";

export function HomePlatform() {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <section
      id="platform"
      className="py-120 border-b-default border-primary-dark-green/20"
    >
      <div className="mx-auto w-1192">
        <div className="flex text-primary-dark-green w-full">
          <h2 className="text-2m font-neue">
            All your ESG journey needs in one platform
          </h2>
          <div className="grid grid-flow-col auto-cols-max mt-auto gap-20 rounded-100 p-8 border-default border-primary-dark-green/20">
            {platformData.map((platformCard) => (
              <button
                onClick={() =>
                  setCurrentCard(platformData.indexOf(platformCard))
                }
                className={`font-inter text-4s p-9 text-center rounded-100 bg-primary-dark-green/0 transition ease-out duration-300 ${
                  platformData.indexOf(platformCard) === currentCard &&
                  "bg-primary-dark-green/10"
                }`}
                key={`${platformCard.title.join(" ")}-menu-button`}
              >
                {platformCard.title.join(" ")}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-8 overflow-hidden w-1192 mx-auto mt-40 h-573">
          {platformData.map((platformCard) => (
            <PlatformCarouselCard
              key={`platform-card-${platformData.indexOf(platformCard)}`}
              menuItem={platformCard}
              curr={currentCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
