'use client';

import useStore from '../AboutMe/Store/store';
import Image from 'next/image';
import STACK_ICON from './Images/image';

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
      <span className="relative text-[1rem]">{'stacks'}</span>
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
    <>
      <div className="relative flex flex-row w-full gap">
        <div className="flex flex-col">
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한 SSR 적용 경험이 있어요, app rou."
          ></StackItem>
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한 SSR 적용 uter에 익숙해요."
          ></StackItem>
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한 SSR 적용 경험이 있어요, app router에 익숙해요."
          ></StackItem>
        </div>
        <div className="flex flex-col">
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="filter, map등의 고차 함수를 활용한 API Data 가공과 async, await 사용에 익숙해요."
          ></StackItem>
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한 있어요, app router에 익숙해요."
          ></StackItem>
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한 SSR 적용 경험er에 익숙해요."
          ></StackItem>
        </div>
      </div>
      <div className="relative flex flex-row w-full ">
        <div className="flex flex-col">
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용있어요, app rou."
          ></StackItem>
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이진선입니다ter에 익숙해요."
          ></StackItem>
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한요, app router에 익숙해요."
          ></StackItem>
        </div>
        <div className="flex flex-col">
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한 SSR 적용 router에 익숙해요."
          ></StackItem>
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한 있어요, app router에 익숙해요."
          ></StackItem>
          <StackItem
            src={STACK_ICON[0][1]}
            name={STACK_ICON[0][0]}
            content="서버 컴포넌트를 이용한 SSR 적용 경험er에 익숙해요."
          ></StackItem>
        </div>
      </div>
    </>
  );
};

interface StackItemInterface {
  name?: string;
  content?: string;
  src: string;
}

const StackItem: React.FC<StackItemInterface> = ({
  name,
  content,
  src,
}): JSX.Element => {
  return (
    <div className="relative flex flex-row gap-3 items-center w-[550px]">
      <Image src={src} alt="name" width={40} height={40}></Image>
      <div className="relative flex flex-col w-fit h-fit gap-1">
        <span className="text-[#808080] text-[0.9rem]">{name}</span>
        <span className="text-[0.9rem]">{content}</span>
      </div>
    </div>
  );
};

export default Skill;
