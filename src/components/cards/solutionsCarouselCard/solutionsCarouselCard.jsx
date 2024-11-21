/* eslint-disable react/prop-types */
import solutions from "../../../assets/data/homeSolutionsData.json";

export function SolutionsCarouselCard({ cardContent, curr }) {
  return (
    <div
      className={`flex w-800 relative inset-0 gap-48 mb-5 pr-8 transition ease-out duration-1000 ${
        solutions.indexOf(cardContent) < curr && "opacity-0"
      }`}
      style={{ transform: `translateX(-${curr * 100}%)` }}
    >
      <img
        src={cardContent.src}
        alt={cardContent.alt}
        className="rounded-8 relative overflow-hidden"
      />
      <img
        className={`image-mask absolute transition-transform ease-out duration-700 left-1 -top-1 ${
          curr === solutions.indexOf(cardContent)
            ? "translate-y-0"
            : "-translate-y-18"
        }`}
        src="/images/solutions/mask.svg"
        alt="Clip path for first carousel image."
      />

      <div className="flex flex-col pt-16 h-full">
        <div className="flex items-center gap-20 ">
          <img
            className="h-32"
            src="/images/greenscope/greenscope-logo-small.svg"
            alt="Small greenscope logo."
          />
          <h3 className="text-1m font-neue">{cardContent.title}</h3>
        </div>
        <div className="flex flex-col mt-auto text-3s font-inter opacity-70">
          {cardContent.description.map((text) => (
            <p
              key={`${
                cardContent.title
              }-paragraph-${cardContent.description.indexOf(text)}`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
