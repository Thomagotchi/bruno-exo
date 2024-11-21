import solutions from "../../assets/data/homeSolutionsData.json";
import { SolutionsCarouselCard } from "../../components/cards/solutionsCarouselCard/solutionsCarouselCard";

export function HomeSolutions() {
  return (
    <section
      id="home-solutions"
      className="bg-primary-dark-green text-primary-light-green relative w-full overflow-hidden"
    >
      <div className="w-1192 mx-auto overflow-visible">
        <div className="py-120 flex items-center">
          <h2 className="font-neue text-2m ">A solution for everyone</h2>
          <div className="flex flex-row ml-auto gap-4">
            <button className="px-18 py-9 border-0.8 rounded-80">
              <img
                src="/buttons/solutions-arrow-left.svg"
                alt="Left arrow for solutions carousel."
              />
            </button>
            <button className="px-18 py-9 border-0.8 rounded-80">
              <img
                src="/buttons/solutions-arrow-right.svg"
                alt="Left arrow for solutions carousel."
              />
            </button>
          </div>
        </div>
        <div className="flex gap-8 w-fit overflow-visible">
          {solutions.map((solution) => (
            <SolutionsCarouselCard
              key={`${solution.title}`}
              cardContent={solution}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
