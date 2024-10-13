'use client';

const Card = () => {
  return (
    <div className="relative flex flex-col gap-5 ">
      <h1 className="text-[4rem] font-semibold">Clip!</h1>
      <div className="text-[1rem] flex flex-col">
        <span>🛠️ 연구자를 위한 연구 참여자 모집 서비스</span>
        <span>📅 2024.03 - 2024.07</span>
        <span>🛠️ Next.js, Recoil, Tanstack-Query, styled-components</span>
      </div>
      <h3 className="text-[1.5rem]">Next.js과 SSR 적용, 전역 상태 관리</h3>
      <ul className="relative text-[1rem] list-disc list-inside left-[1rem] w-fit">
        <li>Next.js 기반 프론트 개발</li>
        <li>Recoil을 이용한 전역 상태 관리</li>
        <li>다양한 기기를 고려한 dvh, dvw 단위 적용</li>
        <li>SEO를 위해 서버 컴포넌트를 이용한 SSR 적용</li>
      </ul>
    </div>
  );
};

export default Card;
