import styled from 'styled-components';

// 950px 이하로 작아지면 세로 정렬로 변경
export const ProjectsSection = styled.section`
  position: relative;
  margin-bottom: 110px;
`;

export const ProjectPattern = styled.div`
  position: absolute;
  top: -70px;
  left: -250px;
  width: 600px;
  height: 600px;
  z-index: -1;

  /* background-color: var(--white); */
  border-radius: 50%;
  border: 1px solid var(--sgray);
`;

export const Cards = styled.div`
  height: 760px;
  transition: height 0.8s ease;

  position: relative;

  padding: 40px 7px;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 1215px) {
    height: 1110px;

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

  border-bottom: 1px solid var(--sgray);
  background-color: var(--black);
`;

export const ProjectExitButton = styled.button`
  display: flex;
  align-items: center;

  height: fit-content;
  padding: 2px 4px 2px 2px;
  margin-left: 5px;

  color: var(--white);
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;

  border-radius: 0.3rem;

  &:hover {
    background-color: var(--sgray);
  }
`;
