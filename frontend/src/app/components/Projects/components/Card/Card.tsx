'use client';

import { useState } from 'react';

type ProjectCardType = {
  title: string;
  summary: string;
  dueDate: string;
  stack: string;
  headLine: string;
  list: string[];
  color: string;
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
    <div className="relative flex flex-col gap-5 w-[410px]">
      <div className="relative text-[3rem] font-semibold">
        {info?.title}
        <div className={color[info.color]}></div>
      </div>
      <div className="text-[1rem] flex flex-col">
        <span>🧾 {info.summary}</span>
        <span>📅 {info?.dueDate}</span>
        <span>🛠️ {info?.stack}</span>
      </div>
      <h3 className="text-[1.3rem]">{info?.headLine}</h3>
      <ul className="relative text-[1rem] list-disc list-inside left-[1rem] w-fit">
        {info?.list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
