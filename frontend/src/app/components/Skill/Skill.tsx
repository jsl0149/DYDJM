'use client';

import useStore from '../AboutMe/Store/store';
import Image from 'next/image';
import { STACK_ICON, STACK_BACK, STACK_DEV, STACK_FRONT } from './Images/image';
import frontend from '../../images/front.svg';
import backend from '../../images/backend.svg';
import devops from '../../images/devops.svg';

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
          <h3 className="text-[2rem] font-poppins text-center">Skills</h3>
        </div>
        <div className="relative w-full h-fit ">
          <div
            className={`absolute bg-white h-[0.5px] w-0 left-0 ${
              isVisible && 'animate-liner'
            }`}
          ></div>
        </div>

        <Detail></Detail>
      </div>
    </section>
  );
};

const Detail = () => {
  return (
    <div className="flex flex-col gap-[4rem] w-full">
      <div className="flex flex-col gap-3 w-full">
        <div className="text-[1rem] flex flex-row gap-3 mb-3">
          <Image
            src={frontend.src}
            alt="frontend"
            width={50}
            height={50}
          ></Image>
          <span className="relative w-fit font-poppins text-[2rem]">
            <div className="relative z-10">Frontend Dev</div>
            <div className="absolute w-full h-2 bg-blue-500 bottom-2 z-0"></div>
          </span>
        </div>
        <div className="font-poppins font-bold text-[1rem]">
          가장 많이 사용해 봤어요.
        </div>
        {STACK_FRONT.map((item) => {
          return <StackItem stackItem={item} key={item.name}></StackItem>;
        })}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="text-[1rem] flex flex-row gap-3 mb-3">
          <Image src={backend.src} alt="backend" width={50} height={50}></Image>
          <span className="relative w-fit font-poppins text-[2rem]">
            <div className="relative z-10">Backend Dev</div>
            <div className="absolute w-full h-2 bg-[#EA06D3] bottom-2 z-0"></div>
          </span>
        </div>
        <div className="font-poppins font-bold text-[1rem]">
          사용해 본 경험이 있어요.
        </div>
        {STACK_BACK.map((item) => {
          return <StackItem stackItem={item} key={item.name}></StackItem>;
        })}
      </div>
      <div className="flex flex-col gap-3 w-full">
        <div className="text-[1rem] flex flex-row gap-3 mb-3">
          <Image src={devops.src} alt="devops" width={50} height={50}></Image>
          <span className="relative w-fit font-poppins text-[2rem]">
            <div className="relative z-10">DevOps & Tools</div>
            <div className="absolute w-full h-2 bg-[#DA7227] bottom-2 z-0"></div>
          </span>
        </div>
        <div className="font-poppins font-bold text-[1rem]">
          Github로 프로젝트 관리를 할 수 있어요.
        </div>
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
