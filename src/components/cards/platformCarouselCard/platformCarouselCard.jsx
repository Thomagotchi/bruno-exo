/* eslint-disable react/prop-types */
import platformData from "../../../assets/data/platformData.json";

export function PlatformCarouselCard({ menuItem }) {
  console.log(menuItem);
  return (
    <div className={`w-100 p-72 font-neue bg-${menuItem.colors.background}`}>
      <div>
        <h3 className={`text-1m text-${menuItem.colors.main}`}>
          {menuItem.title}
        </h3>
        <div className="flex gap-10">
          {menuItem.tags.map((tag) => (
            <p
              className={`text-${menuItem.colors.tagText} bg-${menuItem.colors.tagBackground}`}
              key={`${menuItem.title}-tag-${menuItem.tags.indexOf(tag)}`}
            >
              {tag.toUpperCase()}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
