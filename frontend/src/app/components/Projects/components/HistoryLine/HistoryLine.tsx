'use client';

import useStore from '../../Store/store';
import { useEffect, useState } from 'react';

const HistoryLine = () => {
  return (
    <div className="relative flex flex-row gap-10">
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
  const [isVisibleDetail, setIsvisibleDetail] = useState(false);
  const { isVisible } = useStore();

  useEffect(() => {
    if (isVisible)
      setTimeout(() => {
        setIsvisibleDetail(true);
      }, time);
  }, [isVisible]);

  return (
    <div className="relative top-[0px] flex flex-col items-center gap-2 font-poppins">
      <p
        className={`text-white text-[1.5rem] ${
          isVisibleDetail ? 'opacity-100 animate-fade_in_fast' : 'opacity-0'
        }`}
      >
        {content}
      </p>
      <div className="relative flex flex-col justify-center items-center">
        <div className="relaive w-[0.5px] h-5">
          <div
            className={`absolute w-[0.5px] bottom-1  bg-white ${
              isVisibleDetail ? 'opacity-100 animate-rise' : 'opacity-0'
            } `}
          ></div>
        </div>

        <div className=" w-3 h-3 bg-white rounded-full "></div>
      </div>
      <p className="text-[#808080] text-[1.5rem]">{year}</p>
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
  const [isVisibleDetail, setIsVisibleDetail] = useState(false);
  const { isVisible } = useStore();

  useEffect(() => {
    if (isVisible)
      setTimeout(() => {
        setIsVisibleDetail(true);
      }, time);
  }, [isVisible]);

  return (
    <div className="relative top-[13px]  flex flex-col items-center gap-2 font-poppins">
      <p className="text-[#808080] text-[1.5rem] ">{year}</p>
      <div className="relative flex flex-col justify-center items-center">
        <div className={`w-3 h-3 bg-white rounded-full z-10`}></div>
        <div className="relaive w-[0.5px] h-10">
          <div
            className={`absolute w-[0.5px] top-0  bg-white ${
              isVisibleDetail ? 'animate-rise opacity-100' : 'opacity-0'
            }`}
          ></div>
        </div>
      </div>
      <p
        className={`text-white text-[1.5rem] ${
          isVisibleDetail ? 'opacity-100 animate-fade_in_fast' : 'opacity-0'
        }`}
      >
        {content}
      </p>
    </div>
  );
};

export default HistoryLine;
