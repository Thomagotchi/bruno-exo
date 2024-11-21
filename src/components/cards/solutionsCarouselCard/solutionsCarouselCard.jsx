export function SolutionsCarouselCard({ cardContent }) {
  return (
    <div className="flex w-792 relative inset-0 items-center gap-48 mb-5">
      <img src={cardContent.src} alt={cardContent.alt} className="rounded-8" />
      <div className="flex flex-col pt-16 h-full">
        <div className="flex items-center gap-20 ">
          <img
            className="h-32"
            src="/images/greenscope/greenscope-logo-small.svg"
            alt="Small greenscope logo."
          />
          <h3 className="text-1m font-neue">{cardContent.title}</h3>
        </div>
        <p className="flex mt-auto w-300 text-3s font-inter opacity-70">
          {cardContent.description}
        </p>
      </div>
    </div>
  );
}
