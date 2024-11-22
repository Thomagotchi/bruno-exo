import { DemoButtonPrimary } from "../buttons/demoButtonPrimary/demoButtonPrimary";

export function Header() {
  return (
    <header className="mx-auto w-1192 flex flex-row font-neue items-center my-24">
      <div className="w-3/12">
        <img
          className="my-8"
          src="images/greenscope/typography-greenscope.svg"
          alt="Greenscope typography."
        />
      </div>

      <nav className="flex flex-row text-primary-dark-green text-1s gap-24 w-4/12 justify-center transition ease-out duration-300">
        <a
          href="#home-solutions"
          className="items-center flex gap-8 opacity-70 hover:cursor-pointer hover:opacity-100 group"
        >
          <p className="transition ease-out duration-300">Solutions</p>
          <svg
            className="flex group-hover:rotate-180 transition ease-out duration-300"
            alt="Dropdown arrow for solutions menu."
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.98167 1.19447L4.37072 4.80542L0.759766 1.19447"
              stroke="#3C4A41"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#home-platform"
          className="items-center flex gap-8 opacity-70 hover:cursor-pointer hover:opacity-100 group transition ease-out duration-300"
        >
          <p>Platform</p>
          <svg
            className="flex group-hover:rotate-180 transition ease-out duration-500"
            alt="Dropdown arrow for solutions menu."
            width="9"
            height="6"
            viewBox="0 0 9 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.98167 1.19447L4.37072 4.80542L0.759766 1.19447"
              stroke="#3C4A41"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#home-technology"
          className="opacity-70 hover:cursor-pointer hover:opacity-100"
        >
          <p>Resources</p>
        </a>
        <a
          href="#home-technology"
          className="opacity-70 hover:cursor-pointer hover:opacity-100"
        >
          <p>About</p>
        </a>
      </nav>

      <div className="ml-auto">
        <DemoButtonPrimary />
      </div>
    </header>
  );
}
