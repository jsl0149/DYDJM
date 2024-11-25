'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import photo from '@/app/images/photo.jpg';
import useStore from './Store/store';
import Cube from './components/Cube/Cube';

const AboutMe = () => {
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
  });

  return (
    <section
      className="relative w-full h-[100dvh] bg-[#1b1b1e] flex flex-row justify-center py-[4rem] items-center"
      id="AboutMe"
    >
      <div
        className={`max-w-[1080px] w-[calc(100%-140px)] h-fit   text-white flex flex-col justify-center items-center gap-[6rem] px-[0dvw] ${
          isVisible ? 'opacity-100 animate-fade_in_slow ' : 'opacity-0'
        }`}
        ref={ref}
      >
        <div className="relative w-fit flex flex-col items-center">
          <h1 className="text-[5.5rem] font-poppins h-fit">About Me</h1>
          <h2 className="relative text-[2rem] text-[#808080] bottom-8">
            My Introduction
          </h2>
        </div>
        <div className="flex flex-row w-[95%] h-fit gap-[3rem] items-center">
          <Image
            src={photo.src}
            alt="photo"
            width={200}
            height={270}
            style={{ borderRadius: '1.5rem' }}
          ></Image>
          <div className="relative flex flex-col w-fit h-full gap-[2rem] ">
            <h2 className="text-[#808080] text-[2.5rem] font-poppins">
              이진선 LEE JIN SEON
            </h2>
            <p className="text-[1.8rem] font-poppins">
              안녕하세요! 신입 프론트엔드 개발자 이진선입니다. 2021년부터 웹
              개발을 시작한 후, 프로젝트를 진행해 보며 HTML, CSS, JavaScript와
              같은 핵심 기술을 익혔고, React와 같은 프레임워크도 다뤄보며 실력을
              키워왔습니다.
            </p>
            <p className="text-[1.8rem] font-poppins">
              협업을 통해 아이디어를 발전시키고, 팀원들과 소통하며 함께 문제를
              해결하는 과정을 즐깁니다. 새로운 기술과 트렌드를 빠르게 흡수하고,
              다른 사람들의 의견을 존중하며 최상의 결과를 위해 노력하는
              팔로워십을 발휘하고자 합니다. 앞으로도 지속적으로 성장하며 의미
              있는 프로젝트에 기여하고 싶습니다. 감사합니다!
            </p>
          </div>
          <div className="absolute w-[1150px] left-1/2 -translate-x-1/2 ] ">
            <Cube></Cube>
          </div>
        </div>
      </div>
    </section>
  );
};

// const AboutMeField = ({
//   category,
//   value,
// }: {
//   category: string;
//   value: string;
// }) => {
//   return (
//     <div className="relative flex flex-row justify-center w-[224px] ">
//       <div className="relaive flex flex-col items-center gap-3">
//         <span className="text-[1.4rem]  font-bold text-gray-500">
//           {category}
//         </span>
//         <span className="text-[1.2rem]">{value}</span>
//       </div>
//     </div>
//   );
// };

export default AboutMe;
