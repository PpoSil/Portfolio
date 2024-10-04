'use client';

import Image from 'next/image.js';
import { Main } from './global.css.js';
import { IntroSection, ImageContainer } from './page.css.js';

import Project from '@/app/projects/projects.jsx';

const Page = () => {
  return (
    <Main>
      {/* 인트로 컨테이너 */}
      <IntroSection>
        <h1>Portfolio by</h1>
        <h1>AN SOLBI</h1>
        <ImageContainer>
          <Image src="/solbee3.jpg" layout="fill" objectFit="cover" alt="sol" />
        </ImageContainer>
        <ul>
          [안솔비 · 연락처]
          <li>010 - 4202 - 3113</li>
          <li>solbi1996@gmail.com</li>
          <li>https://github.com/PpoSil</li>
          <li>경력: 삼성 청년 SW 아카데미 (SSAFY) 9기 수료</li>
        </ul>

        {/* 참여한 프로젝트 소개 컨테이너 */}
        <ul>
          [프로젝트 이력]
          <li>Heul-git (SSAFY)</li>
          <li>
            Have-it (SSAFY) <span>수상: 삼성 청년 SW 아카데미 (SSAFY) 우수상</span>
          </li>
          <li>
            SSTUDE-HOUSE (SSAFY) <span>수상: 삼성 청년 SW 아카데미 (SSAFY) 우수상 및 결선발표회 입상</span>
          </li>
        </ul>
      </IntroSection>

      {/* 프로젝트 컨테이너 */}
      <Project />

      {/* 기술스택 컨테이너? */}
      <section>기이이수우우울스태애애앸</section>
    </Main>
  );
};

export default Page;
