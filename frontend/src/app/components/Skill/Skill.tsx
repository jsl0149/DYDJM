'use client';

import useStore from '../AboutMe/Store/store';
import Image from 'next/image';
import {
  STACK_ICON,
  STACK_BACK,
  STACK_DEV,
  STACK_FRONT,
  STACK_TOOL,
} from './Images/image';
import frontend from '../../images/front.svg';
import backend from '../../images/backend.svg';
import devops from '../../images/devops.svg';
import tool from '../../images/tool.svg';

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
        <div className="relative w-fit flex flex-row top-[10px]">
          <h1 className="text-[7.5rem] font-poppins">Skills</h1>
        </div>
        <Detail></Detail>
      </div>
    </section>
  );
};

const Detail = () => {
  return (
    <div className="relative w-full flex flex-row justify-between">
      <div className="flex flex-col gap-[4rem] w-full">
        <StackList
          title="Frontend Dev"
          detail="자주 다뤄봤어요."
          stackItemArray={STACK_FRONT}
          color="blue"
          icon={backend.src}
        ></StackList>
        <StackList
          title="Backend Dev"
          detail="사용해 본 경험이 있어요."
          stackItemArray={STACK_BACK}
          color="pink"
          icon={backend.src}
        ></StackList>
      </div>
      <div className="flex flex-col gap-[4rem] w-full">
        <StackList
          title="DevOps"
          detail="Github로 프로젝트 관리를 할 수 있어요."
          stackItemArray={STACK_DEV}
          color="orange"
          icon={devops.src}
        ></StackList>
        <StackList
          title="Tools"
          detail="현재 사용하고 있는 Tool 이에요."
          stackItemArray={STACK_TOOL}
          color="orange"
          icon={tool.src}
        ></StackList>
      </div>
    </div>
  );
};

interface StackListProps {
  title: string;
  stackItemArray: StackItemType[];
  detail: string;
  color: string;
  icon: string;
}

const StackList: React.FC<StackListProps> = (props) => {
  const color: { [key: string]: string } = {
    orange: 'absolute w-full h-2 bg-[#DA7227] bottom-2 z-0',
    pink: 'absolute w-full h-2 bg-[#EA06D3] bottom-2 z-0',
    blue: 'absolute w-full h-2 bg-blue-500 bottom-2 z-0',
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="text-[1rem] flex flex-row gap-3 mb-3">
        <Image src={props.icon} alt="devops" width={50} height={50}></Image>
        <span className="relative w-fit font-poppins text-[2rem]">
          <div className="relative z-10">{props.title}</div>
          <div className={color[props.color]}></div>
        </span>
      </div>
      <div className="font-poppins font-bold text-[1rem]">{props.detail}</div>
      {props.stackItemArray.map((item) => {
        return <StackItem stackItem={item} key={item.name}></StackItem>;
      })}
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
