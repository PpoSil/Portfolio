import styled from 'styled-components';

export const IntroSection = styled.section`
  padding: 30px;

  background-color: var(--black);
  color: var(--white);

  border-radius: 2rem;

  h1 {
    margin: 0;

    font-size: 8rem;
    font-variation-settings: 'wght' 700;
  }

  h1:nth-of-type(2) {
    margin-top: -15px;
  }

  ul:first-of-type {
    margin-top: 50px;
  }

  ul:last-of-type {
    margin-bottom: 30px;
  }
`;

// 이미지 컨테이너
export const ImageContainer = styled.div`
  position: relative;
  left: 800px;

  width: 300px;
  height: 400px;

  overflow: hidden;
  border-radius: 2rem;
`;
