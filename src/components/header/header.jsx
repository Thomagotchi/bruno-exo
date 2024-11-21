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

      <div className="flex flex-row text-primary-dark-green text-1s gap-24 w-4/12 justify-center opacity-70">
        <div className="flex gap-8">
          <p>Solutions</p>
          <img
            src="buttons/dropdown-arrow.svg"
            alt="Dropdown arrow for solutions menu."
          />
        </div>
        <div className="flex gap-8">
          <p>Platform</p>
          <img
            src="buttons/dropdown-arrow.svg"
            alt="Dropdown arrow for platform menu."
          />
        </div>
        <div>
          <p>Resources</p>
        </div>
        <div>
          <p>About</p>
        </div>
      </div>

      <div className="ml-auto">
        <DemoButtonPrimary />
      </div>
    </header>
  );
}
