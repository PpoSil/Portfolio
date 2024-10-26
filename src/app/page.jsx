'use client';

import Image from 'next/image.js';

import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import Intro from '@/app/intro/intro.jsx';
import Skills from '@/app/skills/skills.jsx';
import Project from '@/app/projects/projects.jsx';

import { ImageContainer, BackButton } from './page.css.js';

const topScroll = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Page = () => {
  return (
    <>
      {/* 인트로 컨테이너 */}
      <Intro />

      {/* 이미지 컨테이너 */}
      <ImageContainer>
        <Image
          src="/solbw2.png"
          fill
          style={{ objectFit: 'cover' }}
          priority
          alt="sol"
        />
      </ImageContainer>

      {/* 프로젝트 컨테이너 */}
      <Project />

      {/* 기술스택 컨테이너? */}
      <Skills />

      {/* 상단으로 이동 버튼 */}
      <BackButton type="button" onClick={topScroll}>
        <KeyboardArrowUpRoundedIcon />
        처음으로
      </BackButton>
    </>
  );
};

export default Page;
