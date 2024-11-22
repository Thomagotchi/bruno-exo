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
              aria-label="Carousel back button"
              name="Carousel back button"
              onClick={() => prev()}
              className="px-18 py-9 border-0.8 rounded-80 hover:text-primary-dark-green hover:bg-primary-light-green transition ease-out duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                alt="Left arrow for solutions carousel."
              >
                <g clipPath="url(#clip0_766_1702)">
                  <path
                    d="M4.1999 9.99927H15.3999"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.20081 13.9995L4.20081 9.99951"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.20081 5.99951L4.20081 9.99951"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_766_1702">
                    <rect
                      width="19.2"
                      height="19.2"
                      fill="white"
                      transform="matrix(-1 0 0 1 19.4 0.399902)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <button
              aria-label="Carousel forward button"
              name="Carousel forward button"
              onClick={() => next()}
              className="px-18 py-9 border-0.8 rounded-80 hover:text-primary-dark-green hover:bg-primary-light-green transition ease-out duration-200"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_766_1709)">
                  <path
                    d="M15.9982 9.99927H4.79822"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9989 13.9993L15.9989 9.99927"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.9989 5.99951L15.9989 9.99951"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_766_1709">
                    <rect
                      width="19.2"
                      height="19.2"
                      fill="white"
                      transform="translate(0.799927 0.399902)"
                    />
                  </clipPath>
                </defs>
              </svg>
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
