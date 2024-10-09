'use client';

import { useActionState, useEffect, useState } from 'react';

const Input = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);
  const [slides, setSlide] = useState<string[]>([
    '주소로 거주 후기 검색!',
    '주소 검색하고 층간소음 확인!',
    '건물명 입력하고 교통 정보 확인!',
    '건물명 검색으로 단점 확인!',
    '주소 검색으로 집주인 정보 확인!',
    '주소 입력하고 관리비 확인!',
    '건물명 검색하고 학군 정보 확인!',
    '주소로 거주 후기 검색!',
  ]);

  useEffect(() => {
    let intervalId: number = 0;

    if (currentIndex === 0) {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 1); // 3초마다 슬라이드 변경
    } else {
      intervalId = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000); // 3초마다 슬라이드 변경
    }

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 정리
  }, [currentIndex]);

  return (
    <div className="relative border rounded-xl border-blue-600 h-[42px] w-full mt-8 px-5 flex flex-row items-center overflow-hidden">
      <div
        className="absolute h-full flex flex-col gap-3 top-2"
        style={{
          transform: `translateY(-${currentIndex * 90}%)`, // 100%로 수정
          transition: `${
            currentIndex !== 0 ? 'transform 0.5s ease-in-out' : null
          }`,
        }}
      >
        {slides.map((slide, index) => (
          <span
            key={index}
            className="relative w-fit h-fit text-medium text-gray-500"
          >
            {slide}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Input;
