'use client';

import { useEffect, useRef, useState } from 'react';
import useStore from './Store/store';

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
          <Item></Item>
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

const Item = () => {
  return (
    <div className="absolute flex flex-row top-[-48px] left-[300px] gap-7">
      <ItemUp year={'2020'} content={'지뢰찾기'} time={1000}></ItemUp>
      <ItemDown
        year={'2021'}
        content={'Shall-We-Sound?'}
        time={1200}
      ></ItemDown>
      <ItemUp year={'2022'} content={'CLUB'} time={1400}></ItemUp>
      <ItemDown year={'2023'} content={'Maskting'} time={1600}></ItemDown>
      <ItemUp year={'2023'} content={'CarbonLive'} time={1800}></ItemUp>
      <ItemDown year={'2024'} content={'Clip!'} time={2000}></ItemDown>
      <ItemUp year={'2024'} content={'ljs-portfolio'} time={2200}></ItemUp>
    </div>
  );
};

const ItemUp = ({
  year,
  content,
  time,
}: {
  year: string;
  content: string;
  time: number;
}) => {
  const [isVisible, setIsvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsvisible(true);
    }, time);
  }, []);

  return (
    <div className="relative bottom-2 flex flex-col items-center gap-2">
      <span
        className={`text-white text-[1rem] ${
          isVisible ? 'opacity-100 animate-fade_in_fast' : 'opacity-0'
        }`}
      >
        {content}
      </span>
      <div className="relative flex flex-col justify-center items-center">
        <div className="relaive w-[0.5px] h-5">
          <div
            className={`absolute w-[0.5px] bottom-1  bg-white ${
              isVisible ? 'opacity-100 animate-rise' : 'opacity-0'
            } `}
          ></div>
        </div>

        <div className=" w-3 h-3 bg-white rounded-full "></div>
      </div>
      <span className="text-[#808080] text-[1rem]">{year}</span>
    </div>
  );
};

const ItemDown = ({
  year,
  content,
  time,
}: {
  year: string;
  content: string;
  time: number;
}) => {
  const [isVisible, setIsvisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsvisible(true);
    }, time);
  }, []);

  return (
    <div className="relative top-[10px]  flex flex-col items-center gap-2">
      <span className="text-[#808080] text-[1rem] ">{year}</span>
      <div className="relative flex flex-col justify-center items-center">
        <div className={`w-3 h-3 bg-white rounded-full z-10`}></div>
        <div className="relaive w-[0.5px] h-10">
          <div
            className={`absolute w-[0.5px] top-0  bg-white ${
              isVisible ? 'animate-rise opacity-100' : 'opacity-0'
            }`}
          ></div>
        </div>
      </div>
      <span
        className={`text-white text-[1rem] ${
          isVisible ? 'opacity-100 animate-fade_in_fast' : 'opacity-0'
        }`}
      >
        {content}
      </span>
    </div>
  );
};

export default Project;
