import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  padding: 40px 15px;

  position: fixed;
  top: 40px;
  left: 0;
  z-index: 999;

  background-color: var(--black);
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const ProjectContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;
`;

export const Preview = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  cursor: pointer;

  // 미리보기 크기를 설정하기 위해 div로 감싸기
  > div {
    // 높이를 너비의 1:1 비율로 늘림
    position: relative;
    padding-top: 100%;

    // 첫번째 이미지는 4칸 차지 1:2 비율
    &:first-of-type {
      grid-column: span 4;
      padding-top: 50%;
    }

    // 두번째 이미지는 2칸 차지 gap 10px을 제외한 1:2 비율
    &:nth-of-type(2) {
      grid-column: span 2;
      padding-top: calc((100% - 10px) / 2);
    }

    > p {
      > img {
        // 이미지를 div에 꽉차게 늘려서 표시
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        object-fit: cover;
        border-radius: 1rem;
        //border 를 안으로 향하게
        border: 1px solid var(--ssgray);
      }

      // 이미지 설명은 미리보기에서 렌더링 되지 않음
      > span {
        display: none;
      }
    }
  }
`;

export const OverviewContainer = styled.div`
  position: sticky;
  min-width: 350px;

  flex: 1;
  display: flex;
  flex-direction: column;

  color: var(--white);

  > span {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      margin: 15px 0;

      font-family: var(--font-fira-code);
      font-size: 2.5rem;
      font-variation-settings: 'wght' 600;
    }

    > a > svg {
      width: 2.5rem;
      height: 2.5rem;

      path {
        fill: var(--white);
      }
    }
  }

  > h2 {
    margin: 10px 0;

    font-size: 1.5rem;
    font-variation-settings: 'wght' 400;
  }
`;

export const ContentsContainer = styled.div`
  flex: 2;

  > div {
    margin-bottom: 20px;
    padding: 20px 30px;
    color: var(--white);

    border: 1px solid var(--sgray);
    border-radius: 1rem;

    > p {
      margin-bottom: 1rem;
    }

    > hr {
      margin: 0.5rem 0;
      border: none;
      border-bottom: 1px solid var(--sgray);
    }
  }

  > details {
    padding: 20px 30px;
    border: 1px solid var(--sgray);
    border-radius: 1rem;

    color: var(--white);

    > summary {
      font-size: 1.5rem;
    }
    > div {
      // 사진 설명 기준점 relative로 설정
      position: relative;
      margin-bottom: 20px;

      > p {
        > img {
          width: 100%;
          height: 100%;
          margin: 0;
          object-fit: cover;
        }

        // 부모 div 를 기준으로 좌측 상단 고정
        > span {
          position: absolute;
          top: 0;
          left: 0;
        }
      }
    }
  }
`;
