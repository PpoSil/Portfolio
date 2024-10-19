import styled from 'styled-components';

// 이미지 컨테이너
export const ImageContainer = styled.div`
  display: block;
  position: relative;
  margin-bottom: 150px;

  width: auto;
  height: 350px;

  overflow: hidden;

  background-color: var(--black);
  mask-image: linear-gradient(to right, transparent 3%, black 20%, black 80%, transparent 97%);

  > img {
    opacity: 0.3;
  }
`;

// 위로 가기 버튼 컨테이너
export const BackButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: fit-content;
  margin: 100px auto;
  margin-bottom: 0;
  padding: 0;

  color: var(--white);
  font-size: 1.2rem;
  cursor: pointer;

  & > svg {
    width: 3rem;
    height: 3rem;
    fill: var(--white);

    margin-bottom: -0.5rem;
  }

  @keyframes arrow {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
      fill: var(--gray);
    }
    100% {
      transform: translateY(0);
    }
  }

  &:hover {
    & > svg {
      animation-name: arrow;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  }
`;
