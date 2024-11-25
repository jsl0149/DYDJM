import Header from './components/Header/Header';
import Main from './components/Main/Main';
import AboutMe from './components/AboutMe/AboutMe';
import Skill from './components/Skill/Skill';
import Project from './components/Projects/Project';
import { beforeEach, describe, expect, test } from '@jest/globals';

export default function Home() {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Project></Project>
    </>
  );
}
