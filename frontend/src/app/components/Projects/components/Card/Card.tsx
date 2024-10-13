'use client';

type ProjectCardType = {
  title: string;
  summary: string;
  dueDate: string;
  stack: string;
  headLine: string;
  list: string[];
};

interface CardProps {
  info: ProjectCardType;
}

const Card: React.FC<CardProps> = ({ info }) => {
  return (
    <div className="relative flex flex-col gap-5 w-[410px]">
      <h1 className="text-[4rem] font-semibold">{info?.title}</h1>
      <div className="text-[1rem] flex flex-col">
        <span>🧾 {info.summary}</span>
        <span>📅 {info?.dueDate}</span>
        <span>🛠️ {info?.stack}</span>
      </div>
      <h3 className="text-[1.5rem]">{info?.headLine}</h3>
      <ul className="relative text-[1rem] list-disc list-inside left-[1rem] w-fit">
        {info?.list.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Card;
