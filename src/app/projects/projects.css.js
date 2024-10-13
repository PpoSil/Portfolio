import styled from 'styled-components';

// 950px 이하로 작아지면 세로 정렬로 변경
export const ProjectsWrapper = styled.section`
  h1 {
    margin: 0;

    font-variation-settings: 'wght' 650;
    line-height: 1;

    font-size: 3rem;
    color: var(--white);
  }
`;

export const CardSection = styled.section`
  padding: 2.5rem 0.4rem;
  white-space: nowrap;

  overflow-y: visible;
  overflow-x: hidden;
`;

export const ProjectBackground = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

  white-space: normal;

  width: 100vw;
  height: 100vh;

  // 뒤에 흐림 효과 넣어줘 배경에
  background-color: var(--white);
`;

export const ProjectContainer = styled.section`
  display: flex;
  flex-direction: row;
  gap: 50px;

  max-width: 1250px;

  margin: 0 auto;
  padding: 0 50px;

  background-color: aliceblue;
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  max-width: 500px;
  height: 100vh;

  h1 {
    color: var(--black);
  }

  img {
    width: auto;
    height: 200px;
  }

  p {
    margin: 0;
  }
`;

export const HeulGitOverview = styled.div``;

export const ContentsContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;
