/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { BlankCard, Card, CardSection, ContentsContainer, OverviewContainer, ProjectBackground, ProjectContainer } from './projects.css';

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
      <Card onClick={clickHeulGit}> card1 </Card>
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
      <Card onClick={clickHaveIt}> card2 </Card>
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
      <Card onClick={clickSstudeHouse}> card3 </Card>
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
