import { LearnMoreButtonPrimary } from "../../buttons/learnMoreButtonPrimary/learnMoreButtonPrimary";

export function TechnologyCard({ cardData }) {
  return (
    <div
      className={`flex rounded-8 bg-${cardData.colors.background} py-40 h-330 text-${cardData.colors.main}`}
    >
      <div className="flex flex-col pl-40 w-1/2">
        <div className="h-48 w-48 relative overflow-hidden">
          <img
            className={`bg-${cardData.colors.logo} p-12 h-48 w-48 relative overflow-hidden`}
            src={cardData.src}
            alt={cardData.alt}
          />
          <svg
            className={`image-mask absolute top-0 right-0 text-${cardData.colors.background}`}
            alt="Clip path for card logos."
            width="24"
            height="5"
            viewBox="0 0 24 5"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0H0L24 4.5V0Z" fill="currentColor" />
          </svg>
        </div>

        <div className="mt-auto">
          <LearnMoreButtonPrimary color={cardData.colors.main} />
        </div>
      </div>
      <div className="w-1/2 pr-40 flex flex-col">
        <h3 className={`text-1m`}>{cardData.title}</h3>
        <p className="font-inter text-3s mt-auto">{cardData.content}</p>
      </div>
    </div>
  );
}
