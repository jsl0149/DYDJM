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

const STACK_ICON_OBJ = {
  'Next.js': next.src,
  'React.js': react.src,
  TypeScript: typescript.src,
  JavaScript: javascript.src,
  StyledComponents: styled_components.src,
  'Express.js': express.src,
  Nginx: nginx.src,
  MySql: mysql.src,
  github: github.src,
  github_action: github_action.src,
  aws: aws.src,
};

const STACK_ICON: [string, string][] = Object.entries(STACK_ICON_OBJ);

export default STACK_ICON;
