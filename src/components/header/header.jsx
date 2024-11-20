import { DemoButtonPrimary } from "../buttons/demoButtonPrimary/demoButtonPrimary";

export function Header() {
  return (
    <header className="header mx-auto w-1192 flex flex-row font-neue items-center my-24">
      <div className="logo-container w-3/12">
        <img
          className="greenscope-logo my-8"
          src="images/typography-greenscope.svg"
          alt="Greenscope typography."
        />
      </div>

      <div className="navbar flex flex-row text-primary-dark-green text-1s gap-24 w-4/12 justify-center opacity-70">
        <div className="flex flex row gap-8">
          <p>Solutions</p>
          <img
            src="buttons/dropdown-arrow.svg"
            alt="Dropdown arrow for solutions menu."
          />
        </div>
        <div className="flex flex row gap-8">
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

      <div className="demo-button-container ml-auto">
        <DemoButtonPrimary />
      </div>
    </header>
  );
}
