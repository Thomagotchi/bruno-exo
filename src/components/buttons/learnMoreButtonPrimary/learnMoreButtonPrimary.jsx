export function LearnMoreButtonPrimary({ color }) {
  return (
    <a
      href="#"
      className={`flex gap-8 text-${color} text-4s items-center group`}
    >
      <p>Learn more</p>
      <svg
        className="fill-current group-hover:translate-x-4 transition ease-out duration-300"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 7.52026C4.72386 7.52026 4.5 7.74412 4.5 8.02026C4.5 8.29641 4.72386 8.52026 5 8.52026H9.79289L7.64645 10.6667C7.45118 10.862 7.45118 11.1786 7.64645 11.3738C7.84171 11.5691 8.15829 11.5691 8.35355 11.3738L11.3536 8.37382C11.5488 8.17855 11.5488 7.86197 11.3536 7.66671L8.35355 4.66671C8.15829 4.47145 7.84171 4.47145 7.64645 4.66671C7.45118 4.86197 7.45118 5.17856 7.64645 5.37382L9.79289 7.52026L5 7.52026Z"
        />
      </svg>
    </a>
  );
}
