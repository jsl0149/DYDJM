const Page = () => {
  return (
    <div
      id="default-carousel"
      className="relative w-full h-full"
      data-carousel="slide"
    >
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            123
          </div>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            223
          </div>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            323
          </div>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            423
          </div>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <div className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            523
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
