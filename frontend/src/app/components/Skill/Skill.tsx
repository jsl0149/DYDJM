'use client';

import useStore from '../AboutMe/Store/store';
import Image from 'next/image';
import { STACK_ICON, STACK_BACK, STACK_DEV, STACK_FRONT } from './Images/image';

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
            className={`absolute bg-white h-[0.5px] w-0 left-0 ${
              isVisible && 'animate-liner'
            }`}
          ></div>
        </div>
        <Stacks></Stacks>
        <Detail></Detail>
      </div>
    </section>
  );
};

const Stacks = () => {
  return (
    <div className="relative w-full flex flex-col gap-2">
      <span className="relative text-[1rem]">{'Stacks'}</span>
      <div className="relaive flex flex-row gap-3">
        {STACK_ICON.map(([name, src]) => {
          return (
            <Image
              src={src}
              alt={name}
              width={50}
              height={50}
              key={name}
            ></Image>
          );
        })}
      </div>
    </div>
  );
};

const Detail = () => {
  return (
    <div className="flex flex-col gap-[2rem] w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="text-[1rem]">Front-end</div>
        {STACK_FRONT.map((item) => {
          return <StackItem stackItem={item} key={item.name}></StackItem>;
        })}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="text-[1rem]">Back-end</div>
        {STACK_BACK.map((item) => {
          return <StackItem stackItem={item} key={item.name}></StackItem>;
        })}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="text-[1rem]">DevOps</div>
        {STACK_DEV.map((item) => {
          return <StackItem stackItem={item} key={item.name}></StackItem>;
        })}
      </div>
    </div>
  );
};

type StackItemType = {
  name?: string;
  content?: string;
  src: string;
};

const StackItem = ({
  stackItem,
}: {
  stackItem: StackItemType;
}): JSX.Element => {
  return (
    <div className="relative flex flex-row gap-3 items-center w-fit">
      <Image src={stackItem.src} alt="name" width={50} height={50}></Image>
      <div className="relative flex flex-col w-fit h-fit gap-[0.5px]">
        <span className="text-[#808080] text-[1rem]">{stackItem.name}</span>
        <span className="text-[1rem]">{stackItem.content}</span>
      </div>
    </div>
  );
};

export default Skill;
