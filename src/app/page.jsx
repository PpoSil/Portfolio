'use client';

import Image from 'next/image.js';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Main } from './global.css.js';
import { IntroSection, ImageContainer, ContactWrapper } from './page.css.js';

import Project from '@/app/projects/projects.jsx';

const Page = () => {
  return (
    <Main>
      {/* 인트로 컨테이너 */}
      <IntroSection>
        <h1>Frontend dev</h1>
        <h1>An Solbi.</h1>

        <ContactWrapper>
          <span>안솔비</span>
          <span>010 4202 3113</span>
          <span>solbi1996@gmail.com</span>
          <span>
            Github
            <GitHubIcon style={{ color: 'white', margin: '0 5px', fontSize: '1.3rem', lineHeight: '2rem' }} />
          </span>
          <span>삼성 청년 SW 아카데미 9기</span>
        </ContactWrapper>

        {/* <ul>
          [안솔비 · 연락처]
          <li>010 - 4202 - 3113</li>
          <li>solbi1996@gmail.com</li>
          <li>https://github.com/PpoSil</li>
          <li>경력: 삼성 청년 SW 아카데미 (SSAFY) 9기 수료</li>
        </ul> */}

        {/* 참여한 프로젝트 소개 컨테이너 */}
        <ul>
          [ 프로젝트 이력 ]<li>Heul-git (SSAFY)</li>
          <li>
            Have-it (SSAFY) <span>수상: 삼성 청년 SW 아카데미 우수상</span>
          </li>
          <li>
            SSTUDE-HOUSE (SSAFY) <span>수상: 삼성 청년 SW 아카데미 우수상 및 결선발표회 입상</span>
          </li>
        </ul>
      </IntroSection>

      <ImageContainer>
        <Image src="/solbw2.png" fill style={{ objectFit: 'cover' }} priority alt="sol" />
      </ImageContainer>

      {/* 프로젝트 컨테이너 */}
      <Project />

      {/* 기술스택 컨테이너? */}
      <section>
        <h1>기술 스택</h1>
        <div>
          <h2>프론트엔드</h2>
          <div>
            <span>JavaScript</span>
            <span>React</span>
            <span>Redux</span>
            <span>Vue.js</span>
            <span>Next.js</span>
            <span>Styled Components</span>
          </div>
        </div>

        <div>
          <h2>게임 개발</h2>
          <span>Unity</span>
          <span>C#</span>
        </div>

        <div>
          <h2>백엔드</h2>
          <span>Python</span>
        </div>

        <div>
          <h2>코드 관리</h2>
          <span>Git</span>
          <span>Github</span>
          <span>GitLab</span>
          <span>ESlint</span>
          <span>Prettier</span>
        </div>

        <div>
          <h2>협업</h2>
          <div>
            <span>Jira</span>
            <span>Notion</span>
            <span>Mattermost</span>
            <span>Figma</span>
            <span>Source Tree</span>
          </div>
        </div>
      </section>
    </Main>
  );
};

export default Page;
