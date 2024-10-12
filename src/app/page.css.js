import styled from 'styled-components';

export const IntroSection = styled.section`
  position: relative;
  padding: 30px;

  background-color: var(--black);
  color: var(--white);

  border-radius: 2rem;
  border: 1px solid var(--sgray);

  margin-bottom: 1.5rem;

  h1 {
    margin: 0;

    font-size: 8rem;
    font-variation-settings: 'wght' 600;

    line-height: 1.1;
    word-spacing: -2.5rem;
    letter-spacing: 0.3rem;
  }

  h1:nth-of-type(2) {
    margin-top: -15px;
  }

  ul {
    position: relative;

    margin-top: 100px;
    margin-bottom: 0;
    font-size: 1.1rem;
    line-height: 1.65;

    li {
      font-size: 1rem;

      span {
        display: inline-block;

        color: #ffec81;
        font-size: 0.8rem;
        font-variation-settings: 'wght' 350;
      }
    }

    li:first-of-type {
      margin-top: 5px;
    }
  }
`;

export const ContactWrapper = styled.div`
  span {
    display: inline-block;
    /* height: 1.3rem; */
    line-height: 1.4rem;
    padding: 5px 10px 4px 10px;

    margin: 5px;

    width: fit-content;
    word-spacing: -0.2rem;

    letter-spacing: 1px;
    border-radius: 2rem;
    border: 1px solid var(--sgray);
  }

  span:first-of-type {
    background-color: var(--white);
    color: var(--black);

    font-variation-settings: 'wght' 500;
  }
`;

// 이미지 컨테이너
export const ImageContainer = styled.div`
  display: block;
  position: relative;

  margin-bottom: 150px;

  /* width: calc((1200px - 1rem) / 2); */
  width: auto;
  height: 350px;

  overflow: hidden;
  /* border-radius: 2rem; */

  opacity: 0.3;

  mask-image: linear-gradient(to right, transparent 3%, black 20%, black 80%, transparent 97%);
`;
