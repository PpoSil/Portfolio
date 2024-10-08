import styled from 'styled-components';

// 950px 이하로 작아지면 세로 정렬로 변경
export const CardSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 10fr 10fr;

  margin-top: 200px;

  gap: 25px;
  color: var(--black);

  h1 {
    font-variation-settings: 'wght' 700;
    line-height: 1;

    grid-column: 1/3;
    margin: 0;

    font-size: 6rem;
    color: var(--white);
  }
`;

export const BlankCard = styled.div`
  background-color: transparent;
`;

export const ProjectBackground = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;

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

  background-color: aliceblue;
`;

export const OverviewContainer = styled.div`
  max-width: 500px;
  height: 100vh;
  /* display: flex;
  flex-direction: column;
  flex: 1; */
`;

export const ContentsContainer = styled.div`
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
`;
