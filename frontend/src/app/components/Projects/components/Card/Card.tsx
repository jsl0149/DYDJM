'use client';

import Image from 'next/image';

type ProjectCardType = {
  title: string;
  summary: string;
  dueDate: string;
  stack: string;
  headLine: string;
  list: string[];
  color: string;
  src: string;
};

interface CardProps {
  info: ProjectCardType;
}

const color: { [key: string]: string } = {
  purple:
    'absolute w-0 top-5 h-0  right-0 border-t-[30px] border-t-[#790DE4] border-r-0 border-r-transparent border-l-[30px] border-l-transparent',
  skyblue:
    'absolute w-0 top-5 h-0  right-0 border-t-[30px] border-t-[#99BFCF] border-r-0 border-r-transparent border-l-[30px] border-l-transparent',
};

const Card: React.FC<CardProps> = ({ info }) => {
  return (
    <div className="relative flex flex-col gap-5 w-[500px] h-[310px] rounded-[5px] overflow-hidden">
      <Image
        src={info.src}
        alt={info.title}
        fill={true}
        objectFit="cover"
      ></Image>
      <div className="h-full w-full bg-gradient-to-t flex flex-col px-8 py-8 from-black/90 to-black/10 z-10 text-[0.9rem] gap-1 justify-end">
        <span className="text-[2.5rem] font-bold font-poppins">
          {info.title}
        </span>
        <span className="text-[#d5d5d5]">{info?.headLine}</span>
        <span className="font-poppins">{info?.stack}</span>
      </div>
    </div>
  );
};

export default Card;
