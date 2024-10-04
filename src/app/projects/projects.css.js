import styled from 'styled-components';

export const ProjectBackground = styled.div`
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
