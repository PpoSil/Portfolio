/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { BlankCard, CardSection, ContentsContainer, OverviewContainer, ProjectBackground, ProjectContainer } from './projects.css';
import Cards from './cards.jsx';

const Projects = () => {
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
    <CardSection>
      <h1>Projects</h1>
      {/* 흘깃 프로젝트 */}
      <Cards
        title="Heul-Git"
        contents={['Web', 'Mobile Web', 'Community']}
        overview="깃허브 오픈 API를 활용한 개발자 전용 SNS 서비스"
        onClick={clickHeulGit}
      />
      {showHeulGit && (
        <ProjectBackground onClick={clickHeulGit}>
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
        </ProjectBackground>
      )}

      <BlankCard />
      {/* 헤브잇 컨테아너 */}
      <Cards
        title="Have-It"
        contents={['Web', '3D', 'Metaverse', 'Mobile']}
        overview="헬스데이터를 기반으로 만든 3D 메타버스 게임"
        onClick={clickHaveIt}
      />
      {showHaveIt && (
        <ProjectBackground onClick={clickHaveIt}>
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
        </ProjectBackground>
      )}

      {/* 싸뛰드 하우스 컨테이너 */}
      <Cards
        title="SSTUDE-HOUSE"
        basicImage="/sstude-bw.png"
        imageHover="/sstude-color.png"
        contents={['Web', 'AIOT', 'Smart Mirror', 'Embedded']}
        overview={
          <>
            사용자의 일상을 편안하게 만들기 위한 차세대 AIoT 프로젝트,
            {/* <br /> */}
            스마트 미러
          </>
        }
        onClick={clickSstudeHouse}
      />
      {showSstudeHouse && (
        <ProjectBackground onClick={clickSstudeHouse}>
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
        </ProjectBackground>
      )}
    </CardSection>
  );
};

export default Projects;
