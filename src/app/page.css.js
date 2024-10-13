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

// 연락처 컨테이너
export const ContactWrapper = styled.div`
  span {
    display: inline-flex;
    /* height: 1.3rem; */
    width: fit-content;
    padding: 5px;
    margin: 5px;

    align-items: center;
    word-spacing: -0.2rem;

    border-radius: 2rem;
    border: 1px solid var(--sgray);

    p {
      line-height: 1.4rem;
      letter-spacing: 1px;
      margin: 0 5px;
    }

    svg {
      margin-right: 1px;
      fill: var(--white);
      width: 1.3rem;
      height: 1.3rem;
    }
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

// 기술 스택 컨테이너
export const SkillsContainer = styled.section`
  color: var(--white);
`;

// 위로 가기 버튼 컨테이너
export const ButtonContianer = styled.div`
  text-align: center;

  button {
    margin: 20px 0;
    padding: 0;

    border: none;

    background-color: transparent;

    cursor: pointer;

    svg {
      width: 4rem;
      height: 4rem;
      fill: var(--white);
    }
  }
`;
