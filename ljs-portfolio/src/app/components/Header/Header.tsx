const Header = () => {
  return (
    <>
      <div className="absolute h-14 w-full flex flex-row justify-between align-middle top-5 left-0 items-center px-[20rem] z-10">
        <span className="relative text-[2rem] text-white animate-fade_in_slow">
          L
          <span className="bg-yellow-300 text-black rounded-md font-bold">
            JS
          </span>
          &nbsp;'s Portfolio
        </span>
        <div className="relative flex text-white flex-row w-fit gap-4 justify-between text-[1.4rem] animate-fade_in_slow">
          <span>About</span>
          <span>Skills</span>
          <span>Projects</span>
        </div>
      </div>
    </>
  );
};

export default Header;
