import { DemoButtonPrimary } from "../buttons/demoButtonPrimary/demoButtonPrimary";

export function Header() {
  return (
    <header className="header mx-auto w-1192 flex flex-row font-neue items-center my-24">
      <div className="logo-container w-3/12">
        <img
          className="greenscope-logo my-8"
          src="images/logo-greenscope.svg"
          alt="Greenscope logo."
        />
      </div>

      <div className="navbar flex flex-row text-primary-dark-green text-1xl gap-24 w-4/12 justify-center opacity-70">
        <div>Solutions</div>
        <div>Platform</div>
        <div>Resources</div>
        <div>About</div>
      </div>

      <div className="demo-button-container ml-auto">
        <DemoButtonPrimary />
      </div>
    </header>
  );
}
