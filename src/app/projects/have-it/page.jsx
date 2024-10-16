'use client';

import dynamic from 'next/dynamic';
import { ProjectContainer2, OverviewContainer, ContentsContainer } from '@/app/projects/projects.css.js';

// Have-it 프로젝트
const HaveItPictures = dynamic(() => import('./pictures.mdx'));
const HaveItOverview = dynamic(() => import('./overview.mdx'));
const HaveItContents = dynamic(() => import('./contents.mdx'));
const Page = () => {
  return (
    <ProjectContainer2
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
    </ProjectContainer2>
  );
};
export default Page;
