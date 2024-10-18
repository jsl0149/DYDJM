'use client';

import { useEffect, useRef } from 'react';
import useStore from './Store/store';
import HistoryLine from './components/HistoryLine/HistoryLine';
import Card from './components/Card/Card';
import PROJECT_INFO from './Store/projectInfo';

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
        className={`max-w-[1080px] w-[calc(100%-140px)] h-fit   text-white flex flex-col justify-center items-center gap-[5rem] ${
          isVisible ? 'animate-fade_in_slow opacity-100  ' : 'opacity-0'
        }`}
      >
        <div className="relative w-fit flex flex-col items-center gap-3">
          <h1 className="text-[5.5rem] font-poppins h-fit">Projects</h1>
          <h2 className="relative text-[2rem] text-[#808080] bottom-8">
            My works
          </h2>
        </div>
        <div className="relative w-full h-fit flex flex-row justify-center ">
          <HistoryLine></HistoryLine>
          <div
            className={`absolute bg-white h-[0.5px] w-0 left-0 bottom-[4.4rem]  ${
              isVisible && 'animate-liner'
            }`}
          ></div>
        </div>
        <div className="relative flex flex-row flex-wrap justify-between w-full h-fit top-[150px] gap-[50px] pb-[5rem]">
          {PROJECT_INFO.map((item) => {
            return <Card info={item} key={item.title}></Card>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Project;
