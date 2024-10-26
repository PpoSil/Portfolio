/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

// 동그라미로 쌓여진 화살표 아이콘
// import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
// import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

// 세모로 쌓여진 화살표 아이콘
// import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
// import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// 화살표 아이콘
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Card from './card.jsx';
import ProjectModal from './projectModal.jsx';

import { CategoryTitle } from '@/app/global.css.js';
import {
  ProjectsSection,
  ProjectPattern,
  CardContainer,
  ProjectTopbar,
  ProjectExitButton,
} from './projects.css.js';

// Heul-git 프로젝트
import HeulGitPreviewPictures from '@/app/projects/heul-git/previewPictures.mdx';
import HeulGitDetailsPictures from '@/app/projects/heul-git/detailsPictures.mdx';
import HeulGitOverview from '@/app/projects/heul-git/overview.mdx';
import HeulGitContents from '@/app/projects/heul-git/contents.mdx';

// Have-it 프로젝트
import HaveItPreviewPictures from '@/app/projects/have-it/previewPictures.mdx';
import HaveItDetailsPictures from '@/app/projects/have-it/detailsPictures.mdx';
import HaveItOverview from '@/app/projects/have-it/overview.mdx';
import HaveItContents from '@/app/projects/have-it/contents.mdx';

// SSTUDE-HOUSE 프로젝트
import SstudePreviewPictures from '@/app/projects/sstude-house/previewPictures.mdx';
import SstudeDetailsPictures from '@/app/projects/sstude-house/detailsPictures.mdx';
import SstudeOverview from '@/app/projects/sstude-house/overview.mdx';
import SstudeContents from '@/app/projects/sstude-house/contents.mdx';

const Projects = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const projectName = searchParams.get('project');

  // 프로젝트 상세보기 모달
  const [showProjectNumb, setShowProjectNumb] = useState(0);

  // 주소 파라미터에 따라 프로젝트 상세 모달 렌더링 여부 결정
  useEffect(() => {
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
      <ProjectPattern />
      <CategoryTitle>Projects</CategoryTitle>
      <CardContainer>
        {/* 흘깃 프로젝트 카드 */}
        <Card
          title="Heul-Git"
          contents="Web / Mobile / Community"
          basicImage="/heul-git/card.png"
          overview={
            <>
              깃허브 오픈 API를 활용한 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;개발자
              전용 SNS 서비스.
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
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;차세대
              AIoT 프로젝트, 스마트 미러.
            </>
          }
          dark
          onClick={() => {
            openProject('sstude-house');
          }}
        />
      </CardContainer>

      {showProjectNumb !== 0 && <ProjectMenu closeProject={closeProject} />}

      {/* 흘깃 프로젝트 모달 */}
      {showProjectNumb === 1 && (
        <ProjectModal
          PreviewPictures={HeulGitPreviewPictures}
          DetailsPictures={HeulGitDetailsPictures}
          Overview={HeulGitOverview}
          Contents={HeulGitContents}
          PicturesIdx={[0, 1, 2, 3]}
        />
      )}

      {/* 해브잇 프로젝트 모달 */}
      {showProjectNumb === 2 && (
        <ProjectModal
          PreviewPictures={HaveItPreviewPictures}
          DetailsPictures={HaveItDetailsPictures}
          Overview={HaveItOverview}
          Contents={HaveItContents}
          PicturesIdx={[0, 8, 4, 3]}
        />
      )}

      {/* 싸뛰드 하우스 프로젝트 모달 */}
      {showProjectNumb === 3 && (
        <ProjectModal
          PreviewPictures={SstudePreviewPictures}
          DetailsPictures={SstudeDetailsPictures}
          Overview={SstudeOverview}
          Contents={SstudeContents}
          PicturesIdx={[0, 2, 4, 6]}
        />
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
      <div>
        {/* <ArrowCircleLeftIcon />
        <ArrowCircleRightIcon /> */}

        {/* <ArrowLeftIcon />
        <ArrowRightIcon /> */}

        <KeyboardArrowLeftIcon />
        <KeyboardArrowRightIcon />
      </div>
    </ProjectTopbar>
  );
};

export default Projects;
