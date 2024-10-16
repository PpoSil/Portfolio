import styled from 'styled-components';

// 950px 이하로 작아지면 세로 정렬로 변경
export const ProjectsSection = styled.section`
  margin-bottom: 78px;
`;

export const Cards = styled.div`
  height: 680px;
  transition: height 0.8s ease;

  position: relative;

  padding: 2.5rem 7px;
  white-space: nowrap;

  overflow: hidden;

  @media (max-width: 1215px) {
    height: 1030px;

    & > div:nth-child(2) {
      position: absolute;

      left: calc(50% - 185px);

      transform: translateY(175px);
    }

    & > div:nth-child(3) {
      position: absolute;

      right: 0;

      transform: translateY(350px);
    }
  }

  & > div:last-child {
    margin-right: 7px;
  }
`;

export const ProjectContainer = styled.section`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;

  width: 100%;
  height: 100%;

  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

  background-color: var(--gray);

  will-change: display;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 20px 0 20px 50px;

  max-width: 500px;

  > h1 {
    padding: 10px 0;
    color: var(--black);
  }

  // 깃허브 아이콘
  > p {
    margin: 0;

    // 소개 사진
    > img {
      width: auto;
      height: 200px;
    }
  }

  // 깃허브 아이콘
  > a {
    > img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

export const ContentsContainer = styled.div`
  padding: 20px 50px 20px 0;

  div {
    /* border: 1px solid var(--black);
    border-radius: 1.5rem; */

    background-color: var(--white);

    h2 {
      margin-top: 0;
    }
  }
`;

export const ProjectExitButton = styled.button`
  position: fixed;
  left: 20px;
  top: 20px;

  font-size: 1rem;

  cursor: pointer;
`;
