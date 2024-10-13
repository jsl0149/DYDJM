'use client';

const Main = () => {
  const scrollCallBack = () => {
    document.getElementById('AboutMe')!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="fixed bg-[#1B1B1E] w-full h-[100dvh] flex flex-col justify-center items-center"></div>
      <div className='className="relative  w-full h-[100dvh] flex flex-col justify-center items-center"'>
        <div className="relative w-full h-fit text-[3rem] text-white font-SUIT flex flex-col  items-center font-thin animate-fade_in_fast ">
          <h2>{`"주체적인 사고, 개발은 예술이다."`}</h2>
          <h2>안녕하세요, 신입 프론트엔드 이진선입니다.</h2>
        </div>
        <div
          className="absolute w-fit h-fit bottom-[2rem] text-[1.5rem] text-white  flex flex-col items-center font-thin z-20 left-1/2 -translate-x-1/2 animate-fade_in_slow"
          onClick={scrollCallBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 animate-bounce cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Main;
