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

export const ProjectTopbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;

  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

  background-color: var(--white);
`;

export const ProjectExitButton = styled.button`
  display: flex;
  align-items: center;

  height: fit-content;
  padding: 2px 4px 2px 2px;
  margin-left: 5px;

  font-size: 1rem;
  line-height: 1;
  cursor: pointer;

  border-radius: 0.3rem;

  &:hover {
    background-color: var(--gray);
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
  /* padding-top: 3rem; */

  width: 100%;
  height: calc(100% - 40px);

  z-index: 999;
  position: fixed;
  top: 40px;
  left: 0;

  background-color: var(--gray);

  will-change: display;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 3rem;

  max-width: 500px;

  /* padding: 20px 0 20px 50px; */

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      margin: 15px 0;

      font-size: 2.5rem;
      font-variation-settings: 'wght' 600;
      color: var(--black);
    }

    // 깃허브 아이콘
    a {
      > img {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  > h2 {
    margin: 10px 0;

    font-size: 1.5rem;
    font-variation-settings: 'wght' 400;
    color: var(--black);
  }

  > p {
    margin: 0;

    // 소개 사진
    > img {
      width: auto;
      height: 200px;
    }
  }

  // 깃허브 아이콘
`;

export const ContentsContainer = styled.div`
  /* padding: 20px 50px 20px 0; */
  margin-top: 3rem;

  max-width: 900px;

  div {
    margin-bottom: 40px;
    padding: 20px 30px;
    /* border: 1px solid var(--black);
    border-radius: 1.5rem; */

    background-color: var(--white);

    h2 {
      margin-top: 0;
    }
  }

  img {
    width: 100%;
    margin-bottom: 20px;
  }
`;
