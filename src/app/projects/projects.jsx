/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

import { CategoryTitle } from '@/app/global.css.js';
import { ProjectsSection, Cards, ContentsContainer, OverviewContainer, ModalBackground, ProjectContainer } from './projects.css';
import Card from './cards.jsx';

// Heul-git 프로젝트
const HeulGitPictures = dynamic(() => import('./heul-git/pictures.mdx'));
const HeulGitOverview = dynamic(() => import('./heul-git/overview.mdx'));
const HeulGitContents = dynamic(() => import('./heul-git/contents.mdx'));

// Have-it 프로젝트
const HaveItPictures = dynamic(() => import('./have-it/pictures.mdx'));
const HaveItOverview = dynamic(() => import('./have-it/overview.mdx'));
const HaveItContents = dynamic(() => import('./have-it/contents.mdx'));

// SSTUDE-HOUSE 프로젝트
const SSTUDEHOUSEPictures = dynamic(() => import('./sstude-house/pictures.mdx'));
const SSTUDEHOUSEOverview = dynamic(() => import('./sstude-house/overview.mdx'));
const SSTUDEHOUSEContents = dynamic(() => import('./sstude-house/contents.mdx'));

const Projects = () => {
  // 프로젝트 상세보기 모달
  const [showHeulGit, setShowHeulGit] = useState(false);
  const clickHeulGit = () => setShowHeulGit(!showHeulGit);

  const [showHaveIt, setShowHaveIt] = useState(false);
  const clickHaveIt = () => setShowHaveIt(!showHaveIt);

  const [showSstudeHouse, setShowSstudeHouse] = useState(false);
  const clickSstudeHouse = () => setShowSstudeHouse(!showSstudeHouse);

  useEffect(() => {
    if (showHeulGit || showHaveIt || showSstudeHouse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showHeulGit, showHaveIt, showSstudeHouse]);

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
          onClick={clickHeulGit}
        />

        {/* 헤브잇 프로젝트 카드 */}
        <Card
          title="Have-It"
          contents="Web / 3D / Metaverse / Mobile"
          basicImage="/have-it/card.png"
          overview="사용자 헬스데이터 기반의 3D 메타버스 게임."
          onClick={clickHaveIt}
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
          onClick={clickSstudeHouse}
        />
      </Cards>

      {/* 흘깃 프로젝트 모달 */}
      {showHeulGit && (
        <ModalBackground onClick={clickHeulGit}>
          <ProjectContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <OverviewContainer>
              <HeulGitPictures />
              <HeulGitOverview />
            </OverviewContainer>
            <ContentsContainer>
              <HeulGitContents />
            </ContentsContainer>
          </ProjectContainer>
        </ModalBackground>
      )}

      {/* 싸뛰드 하우스 프로젝트 모달 */}
      {showHaveIt && (
        <ModalBackground onClick={clickHaveIt}>
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
        </ModalBackground>
      )}

      {/* 싸뛰드 하우스 프로젝트 카드 */}
      {showSstudeHouse && (
        <ModalBackground onClick={clickSstudeHouse}>
          <ProjectContainer
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <OverviewContainer>
              <SSTUDEHOUSEPictures />
              <SSTUDEHOUSEOverview />
            </OverviewContainer>
            <ContentsContainer>
              <SSTUDEHOUSEContents />
            </ContentsContainer>
          </ProjectContainer>
        </ModalBackground>
      )}
    </ProjectsSection>
  );
};

export default Projects;
