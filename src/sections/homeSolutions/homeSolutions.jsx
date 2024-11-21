import { useState } from "react";
import solutions from "../../assets/data/homeSolutionsData.json";
import { SolutionsCarouselCard } from "../../components/cards/solutionsCarouselCard/solutionsCarouselCard";

export function HomeSolutions() {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? solutions.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === solutions.length - 1 ? 0 : curr + 1));
  };

  return (
    <section
      id="home-solutions"
      className="bg-primary-dark-green text-primary-light-green relative w-full overflow-hidden"
    >
      <div className="w-1192 mx-auto overflow-visible">
        <div className="pt-120 pb-100 flex items-center">
          <h2 className="font-neue text-2m ">A solution for everyone</h2>
          <div className="flex flex-row ml-auto gap-4">
            <button
              onClick={() => prev()}
              className="px-18 py-9 border-0.8 rounded-80"
            >
              <img
                src="/buttons/solutions-arrow-left.svg"
                alt="Left arrow for solutions carousel."
              />
            </button>
            <button
              onClick={() => next()}
              className="px-18 py-9 border-0.8 rounded-80"
            >
              <img
                src="/buttons/solutions-arrow-right.svg"
                alt="Left arrow for solutions carousel."
              />
            </button>
          </div>
        </div>
        <div className="flex w-fit overflow-visible mb-120">
          {solutions.map((solution) => (
            <SolutionsCarouselCard
              key={`${solution.title}-${solutions.indexOf(solution)}`}
              cardContent={solution}
              curr={curr}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
