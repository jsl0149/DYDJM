'use client';

import Image from 'next/image';
import main from '@/app/images/main.svg';
import hammmer from '@/app/images/hammer.svg';
import project from '@/app/images/project.svg';
import contact from '@/app/images/contact.svg';

const Main = () => {
  const scrollCallBack = () => {
    document.getElementById('AboutMe')!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='className="relative  w-full h-[100dvh] flex flex-col justify-center items-center'>
      <div className="relative max-w-[1080px] w-[calc(100%-140px)] h-fit text-[3rem]  text-white font-SUIT flex flex-row  items-center font-thin animate-fade_in_fast gap-3">
        <div className="relative w-1/2 h-[440px] bg-[#4831D4] rounded-[100px] flex flex-col py-[5rem] px-[6rem] justify-center cursor-pointer items-center group hover:scale-95 transition-transform duration-200">
          <div className="relative flex flex-col w-full h-full justify-between group-hover:hidden">
            <Image
              src={main.src}
              alt="main"
              height={308}
              width={193}
              style={{ position: 'absolute', right: '0rem' }}
            ></Image>
            <span className="text-[2.5rem]">Frontend Developer</span>
            <span className="text-[3.5rem] font-bold">Lee Jin Seon</span>
          </div>
          <span className="hidden relative font-bold group-hover:block">
            About Me
          </span>
        </div>
        <div className="relative w-1/2 flex flex-col gap-3">
          <div className="relative flex flex-row gap-3">
            <div className="relative w-1/2 h-[220px] bg-[#F9F9F9] rounded-[70px] px-[50px] py-7 flex flex-col justify-end font-bold cursor-pointer items-center hover:scale-95 transition-transform duration-200">
              <div className="relative w-full flex flex-row justify-between text-black text-[1.8rem]">
                <span>Skills</span>
                <Image
                  src={hammmer.src}
                  alt="skills"
                  height={20}
                  width={20}
                ></Image>
              </div>
            </div>
            <div className="relative w-1/2 h-[220px] bg-[#1E1E1E] rounded-[70px] px-[50px] py-7 flex flex-col justify-end font-bold cursor-pointer hover:scale-95 transition-transform duration-200">
              <div className="relative w-full flex flex-row justify-between text-white text-[1.8rem]">
                <span>Projects</span>
                <Image
                  src={project.src}
                  alt="project"
                  height={20}
                  width={20}
                ></Image>
              </div>
            </div>
          </div>
          <div className="relative w-full h-[220px] bg-[#FFF480] rounded-[70px]  px-[50px] py-7 flex flex-col justify-end font-bold cursor-pointer hover:scale-95 transition-transform duration-200">
            <div className="relative w-full flex flex-row justify-between text-black text-[1.8rem]">
              <span>Contact Me</span>
              <Image
                src={contact.src}
                alt="skills"
                height={20}
                width={20}
              ></Image>
            </div>
          </div>
        </div>
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
    </section>
  );
};

export default Main;
