/* eslint-disable no-param-reassign */

'use client';

import { useEffect } from 'react';

import {
  ProjectWrapper,
  ProjectContainer,
  Preview,
  OverviewContainer,
  ContentsContainer,
} from './projectModal.css';

const ProjectModal = ({
  PreviewPictures,
  DetailsPictures,
  Overview,
  Contents,
  PicturesIdx,
}) => {
  // 렌더링 후, 프로젝트 상세보기 sticky 설정
  useEffect(() => {
    const overview = document.getElementById('overview');
    const preview = document.getElementById('preview');
    const images = document.getElementById('images');

    const setOverviewPosition = () => {
      if (!overview) return;

      overview.style.top =
        window.innerHeight - 40 > overview.offsetHeight
          ? '0'
          : `${window.innerHeight - 120 - overview.offsetHeight}px`;
    };

    const handlePreviewClick = (prevIdx) => {
      if (!images.hasAttribute('open')) {
        images.setAttribute('open', '');
      }
      const image = images.children[PicturesIdx[prevIdx] + 1];
      image.scrollIntoView({ behavior: 'smooth' });
    };

    if (preview) {
      Array.from(preview.children).forEach((child, idx) => {
        child.onclick = () => handlePreviewClick(idx);
      });
    }

    window.addEventListener('resize', setOverviewPosition);
    setOverviewPosition();

    return () => {
      window.removeEventListener('resize', setOverviewPosition);
    };
  }, [PicturesIdx]);

  return (
    <ProjectWrapper>
      <ProjectContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* 오버뷰 */}
        <OverviewContainer id="overview">
          <Preview id="preview">
            <PreviewPictures />
          </Preview>
          <Overview />
        </OverviewContainer>

        {/* 상세보기 */}
        <ContentsContainer>
          <Contents />
          <details id="images" open="">
            <summary>미리 보기</summary>
            <DetailsPictures />
          </details>
        </ContentsContainer>
      </ProjectContainer>
    </ProjectWrapper>
  );
};
export default ProjectModal;
