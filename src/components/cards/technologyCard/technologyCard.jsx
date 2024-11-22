import { LearnMoreButtonPrimary } from "../../buttons/learnMoreButtonPrimary/learnMoreButtonPrimary";

export function TechnologyCard({ cardData }) {
  return (
    <div
      className={`flex rounded-8 bg-${cardData.colors.background} py-40 h-330 text-${cardData.colors.main}`}
    >
      <div className="flex flex-col pl-40 w-1/2">
        <img
          className={`bg-${cardData.colors.logo} p-12 h-48 w-48`}
          src={cardData.src}
          alt={cardData.alt}
        />
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
