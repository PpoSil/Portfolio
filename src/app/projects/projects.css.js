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

export const ProjectWrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);

  position: fixed;
  top: 40px;
  left: 0;
  z-index: 999;

  background-color: var(--sgray);
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const ProjectContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  gap: 50px;
`;

export const OverviewContainer = styled.div`
  position: sticky;
  min-width: 350px;

  flex: 1;
  display: flex;
  flex-direction: column;

  margin-top: 3rem;

  color: var(--white);

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      margin: 15px 0;

      font-family: var(--font-fira-code);
      font-size: 2.5rem;
      font-variation-settings: 'wght' 600;
    }
  }

  > h2 {
    margin: 10px 0;

    font-size: 1.5rem;
    font-variation-settings: 'wght' 400;
  }

  img {
    width: 100%;
    margin-bottom: 20px;
  }

  svg {
    width: 2.5rem;
    height: 2.5rem;

    path {
      fill: var(--white);
    }
  }
`;

export const ContentsContainer = styled.div`
  margin-top: 3rem;
  flex: 2;

  div {
    margin-bottom: 40px;
    padding: 20px 30px;

    background-color: var(--white);
  }

  img {
    width: 100%;
    margin-bottom: 20px;
  }
`;
