import technologyData from "../../assets/data/technologyData.json";
import { TechnologyCard } from "../../components/cards/technologyCard/technologyCard";

export function HomeTechnology() {
  return (
    <section
      id="home-technology"
      className="border-b-default border-primary-dark-green/20 mb-20"
    >
      <div className="w-1192 mx-auto py-120 font-neue">
        <h1 className="w-1/2 text-1l text-primary-dark-green mb-72">
          Designed with the best technology
        </h1>
        <div className="flex gap-8">
          {technologyData.map((subject) => (
            <TechnologyCard
              key={`technology-${subject.title}`}
              cardData={subject}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
