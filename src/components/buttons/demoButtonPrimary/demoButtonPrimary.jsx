export function DemoButtonPrimary() {
  return (
    <a className="flex flex-row items-center w-fit h-40 text-secondary-medium-purple text-1xl gap-8 px-12 border-default rounded-6 border-secondary-medium-purple">
      <p className="text-center">Demander une démo</p>
      <svg
        className="fill-current items-center"
        width="12"
        height="12"
        viewBox="0 0 13 12"
        fill="current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.70142 12C10.0151 12 12.7014 9.31371 12.7014 6C12.7014 2.68629 10.0151 0 6.70142 0C3.38771 0 0.701416 2.68629 0.701416 6C0.701416 9.31371 3.38771 12 6.70142 12ZM4.70142 5.6C4.4805 5.6 4.30142 5.77909 4.30142 6C4.30142 6.22091 4.4805 6.4 4.70142 6.4H7.73573L6.41857 7.71716C6.26236 7.87337 6.26236 8.12663 6.41857 8.28284C6.57478 8.43905 6.82805 8.43905 6.98426 8.28284L8.98426 6.28284C9.14047 6.12663 9.14047 5.87337 8.98426 5.71716L6.98426 3.71716C6.82805 3.56095 6.57478 3.56095 6.41857 3.71716C6.26236 3.87337 6.26236 4.12663 6.41857 4.28284L7.73573 5.6H4.70142Z"
        />
      </svg>
    </a>
  );
}
