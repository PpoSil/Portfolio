'use client';

import { ProjectContainer, OverviewContainer, ContentsContainer } from '@/app/projects/projects.css.js';

// Have-it 프로젝트
import HaveItPictures from '@/app/projects/have-it/pictures.mdx';
import HaveItOverview from '@/app/projects/have-it/overview.mdx';
import HaveItContents from '@/app/projects/have-it/contents.mdx';

const Page = () => {
  return (
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
  );
};
export default Page;
