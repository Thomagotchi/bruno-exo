/* eslint-disable react/prop-types */

import { LearnMoreButtonPrimary } from "../../buttons/learnMoreButtonPrimary/learnMoreButtonPrimary";

export function PlatformCarouselCard({ menuItem, curr }) {
  console.log(menuItem);
  return (
    <div
      className={`w-100 p-72 font-neue bg-${menuItem.colors.background} flex transition ease-in-out duration-700`}
      style={{ transform: `translateY(-${curr * 100}%)` }}
    >
      <div className="flex flex-col">
        {menuItem.title.map((titleText) => (
          <h3
            key={titleText}
            className={`text-1m text-${menuItem.colors.main}`}
          >
            {titleText}
          </h3>
        ))}

        <div className="flex gap-10 mt-24">
          {menuItem.tags.map((tag) => (
            <p
              className={`text-1xs text-${menuItem.colors.tagText} bg-${menuItem.colors.tagBackground} p-8 rounded-133`}
              key={`${menuItem.title}-tag-${tag.id}`}
            >
              {tag.text.toUpperCase()}
            </p>
          ))}
        </div>
        <div
          className={`text-${menuItem.colors.caption} mt-auto opacity-70 font-inter text-2s`}
        >
          {menuItem.description.map((descriptionText) => (
            <p
              key={`${
                menuItem.title
              }-description-${menuItem.description.indexOf(descriptionText)}`}
            >
              {descriptionText}
            </p>
          ))}
        </div>
      </div>
      <div className="ml-auto w-fit flex flex-col">
        <img className="mb-32" src={menuItem.src} alt={menuItem.alt} />
        <LearnMoreButtonPrimary color={menuItem.colors.button} />
      </div>
    </div>
  );
}
