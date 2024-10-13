'use client';

import { useEffect, useRef, useState } from 'react';
import useStore from './Store/store';
import HistoryLine from './components/HistoryLine/HistoryLine';

const Project = () => {
  const { isVisible, setVisible } = useStore();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible();
        observer.disconnect();
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      className="relative w-full h-fit bg-[#1b1b1e] flex flex-row justify-center py-[4rem] "
      id="Project"
      ref={ref}
    >
      <div
        className={`max-w-[1080px] w-[calc(100%-140px)] h-fit   text-white flex flex-col justify-center items-center gap-5 px-[0dvw] ${
          isVisible ? 'animate-fade_in_slow opacity-100  ' : 'opacity-0'
        }`}
      >
        <div className="relative w-full flex flex-row top-[10px]">
          <h3 className="text-[2rem] font-GangwonEduPowerExtraBoldA text-center">
            Project
          </h3>
        </div>
        <div className="relative w-full h-fit ">
          <HistoryLine></HistoryLine>
          <div
            className={`absolute bg-white h-[0.5px] w-0 left-0  ${
              isVisible && 'animate-liner'
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Project;
