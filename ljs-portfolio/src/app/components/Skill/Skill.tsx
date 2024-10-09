'use client';

import { useState } from 'react';
import useStore from '../AboutMe/Store/store';

const Skill = () => {
  const { isVisible } = useStore();

  return (
    <section
      className="relative w-full h-fit bg-[#1b1b1e] flex flex-row justify-center py-[4rem] "
      id="Skills"
    >
      <div
        className={`max-w-[1080px] w-[calc(100%-140px)] h-fit   text-white flex flex-col justify-center items-center gap-5 px-[0dvw] ${
          isVisible ? 'opacity-100 animate-fade_in_slow ' : 'opacity-0'
        }`}
      >
        <div className="relative w-full flex flex-row top-[10px]">
          <h3 className="text-[2rem] font-GangwonEduPowerExtraBoldA text-center">
            Skills
          </h3>
        </div>
        <div className="relative w-full h-fit ">
          <div
            className={`absolute bg-white h-[0.5px] w-0left-0 ${
              isVisible && 'animate-liner'
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = () => {};

export default Skill;
