/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

import { CategoryTitle } from '@/app/global.css.js';
import {
  ProjectsSection,
  Cards,
  ContentsContainer,
  OverviewContainer,
  ProjectWrapper,
  ProjectContainer,
  ProjectTopbar,
  ProjectExitButton,
} from './projects.css';
import Card from './cards.jsx';

// Heul-git 프로젝트
import HeulGitPictures from '@/app/projects/heul-git/pictures.mdx';
import HeulGitOverview from '@/app/projects/heul-git/overview.mdx';
import HeulGitContents from '@/app/projects/heul-git/contents.mdx';

// Have-it 프로젝트
import HaveItPictures from '@/app/projects/have-it/pictures.mdx';
import HaveItOverview from '@/app/projects/have-it/overview.mdx';
import HaveItContents from '@/app/projects/have-it/contents.mdx';

// SSTUDE-HOUSE 프로젝트
import SSTUDEHOUSEPictures from '@/app/projects/sstude-house/pictures.mdx';
import SSTUDEHOUSEOverview from '@/app/projects/sstude-house/overview.mdx';
import SSTUDEHOUSEContents from '@/app/projects/sstude-house/contents.mdx';

const Projects = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const projectName = searchParams.get('project');

  // 프로젝트 상세보기 모달
  const [showProjectNumb, setShowProjectNumb] = useState(0);

  useEffect(() => {
    // 주소 파라미터에 따라 프로젝트 상세보기 모달을 띄움
    if (projectName === null) {
      document.body.style.overflow = 'auto';
      setShowProjectNumb(0);
    } else {
      document.body.style.overflow = 'hidden';
      if (projectName === 'heul-git') {
        setShowProjectNumb(1);
      } else if (projectName === 'have-it') {
        setShowProjectNumb(2);
      } else if (projectName === 'sstude-house') {
        setShowProjectNumb(3);
      }
    }
  }, [projectName]);

  const openProject = (name) => {
    // 프로젝트 상세보기 파라미터 추가
    router.push(`${pathname}?project=${name}`, { scroll: false });
  };

  const closeProject = () => {
    // 프로젝트 상세보기 모달 닫기, 뒤로가기
    router.back();
  };

  return (
    <ProjectsSection>
      <CategoryTitle>Projects</CategoryTitle>
      <Cards>
        {/* 흘깃 프로젝트 카드 */}
        <Card
          title="Heul-Git"
          contents="Web / Mobile / Community"
          basicImage="/heul-git/card.png"
          overview={
            <>
              깃허브 오픈 API를 활용한 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개발자 전용 SNS 서비스.
            </>
          }
          onClick={() => {
            openProject('heul-git');
          }}
        />

        {/* 헤브잇 프로젝트 카드 */}
        <Card
          title="Have-It"
          contents="Web / 3D / Metaverse / Mobile"
          basicImage="/have-it/card.png"
          overview="사용자 헬스데이터 기반의 3D 메타버스 게임."
          onClick={() => {
            openProject('have-it');
          }}
        />

        {/* 싸뛰드 하우스 프로젝트 카드 */}
        <Card
          title="SSTUDE-HOUSE"
          basicImage="/sstude/card.png"
          contents="Web / AIOT / Embedded"
          overview={
            <>
              사용자의 일상을 편안하게 만들기 위한
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;차세대 AIoT 프로젝트, 스마트 미러.
            </>
          }
          dark
          onClick={() => {
            openProject('sstude-house');
          }}
        />
      </Cards>

      {showProjectNumb !== 0 && <ProjectMenu closeProject={closeProject} />}

      {/* 흘깃 프로젝트 모달 */}
      {showProjectNumb === 1 && (
        <ProjectWrapper>
          <ProjectContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* <ExitButton closeModal={closeProject} /> */}
            <OverviewContainer>
              <HeulGitPictures />
              <HeulGitOverview />
            </OverviewContainer>
            <ContentsContainer>
              <HeulGitContents />
            </ContentsContainer>
          </ProjectContainer>
        </ProjectWrapper>
      )}

      {/* 해브잇 프로젝트 모달 */}
      {showProjectNumb === 2 && (
        <ProjectWrapper>
          <ProjectContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <OverviewContainer>
              <HaveItPictures />
              <HaveItOverview />
            </OverviewContainer>
            <ContentsContainer>
              <HaveItContents />
            </ContentsContainer>
          </ProjectContainer>
        </ProjectWrapper>
      )}

      {/* 싸뛰드 하우스 프로젝트 모달 */}
      {showProjectNumb === 3 && (
        <ProjectWrapper>
          <ProjectContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {/* <ExitButton closeModal={closeProject} /> */}
            <OverviewContainer>
              <SSTUDEHOUSEPictures />
              <SSTUDEHOUSEOverview />
            </OverviewContainer>
            <ContentsContainer>
              <SSTUDEHOUSEContents />
            </ContentsContainer>
          </ProjectContainer>
        </ProjectWrapper>
      )}
    </ProjectsSection>
  );
};

const ProjectMenu = ({ closeProject }) => {
  return (
    <ProjectTopbar>
      <ProjectExitButton type="button" onClick={closeProject}>
        <ArticleRoundedIcon />
        &nbsp;원문으로
      </ProjectExitButton>
    </ProjectTopbar>
  );
};

export default Projects;
