import next from '@/app/images/stacks/next.svg';
import react from '@/app/images/stacks/react.svg';
import typescript from '@/app/images/stacks/typescript.svg';
import javascript from '@/app/images/stacks/javascript.svg';
import styled_components from '@/app/images/stacks/styled-components.svg';
import express from '@/app/images/stacks/express.svg';
import nginx from '@/app/images/stacks/nginx.svg';
import mysql from '@/app/images/stacks/mysql.svg';
import github from '@/app/images/stacks/github.svg';
import github_action from '@/app/images/stacks/github-action.svg';
import aws from '@/app/images/stacks/aws.svg';
import docker from '@/app/images/stacks/docker.svg';
import recoil from '@/app/images/stacks/Recoil.svg';

const STACK_ICON_OBJ = {
  'Next.js': next.src,
  'React.js': react.src,
  TypeScript: typescript.src,
  JavaScript: javascript.src,
  StyledComponents: styled_components.src,
  Recoil: recoil.src,
  'Express.js': express.src,
  MySql: mysql.src,
  github: github.src,
  github_action: github_action.src,
  docker: docker.src,
};

const STACK_FRONT = [
  {
    name: 'Next.js',
    src: next.src,
    content:
      '서버 컴포넌트를 이용한 SSR 적용 경험이 있어요, app router에 익숙해요.',
  },
  {
    name: 'React.js',
    src: react.src,
    content:
      'useEffect, useState hook 사용과 state를 활용한 코드 작성에 익숙해요.',
  },
  {
    name: 'TypeScript',
    src: typescript.src,
    content:
      'API Data에 interface, type을 사용하여 객체를 정의하고 재사용 할 수 있어요.',
  },
  {
    name: 'JavaScript',
    src: javascript.src,
    content:
      'filter, map등의 고차 함수를 활용한 API Data 가공과 async, await 사용에 익숙해요.',
  },
  {
    name: 'styled-components',
    src: styled_components.src,
    content: 'props와 테마를 활용하여 동적인 스타일을 만들 수 있어요.',
  },
  {
    name: 'Recoil',
    src: recoil.src,
    content: 'props와 테마를 활용하여 동적인 스타일을 만들 수 있어요.',
  },
];

const STACK_BACK = [
  {
    name: 'Express.js',
    src: express.src,
    content: 'mysql db와 연동하여 json을 주고 받는 API 작업 경험이 있어요.',
  },
  {
    name: 'MySql',
    src: mysql.src,
    content: 'Table을 만들고 db data에 대한 기초적인 CRUD 작업 경험이 있어요.',
  },
];

const STACK_DEV = [
  {
    name: 'Github',
    src: github.src,
    content:
      'git push, commit 등의 명령어와 PR을 이용한 프로젝트 관리에 익숙해요.',
  },
  {
    name: 'Github-Action',
    src: github_action.src,
    content: 'worflow를 작성하여 프로젝트 배포 자동화를 구축한 경험이 있어요. ',
  },
  {
    name: 'Docker',
    src: docker.src,
    content:
      'docker image를 이용해 container를 생성할 수 있어요. 백엔드 cotainer 사용에 익숙해요.',
  },
];

const STACK_ICON: [string, string][] = Object.entries(STACK_ICON_OBJ);

export { STACK_ICON, STACK_FRONT, STACK_BACK, STACK_DEV };
