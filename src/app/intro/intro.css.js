import styled from 'styled-components';

export const IntroSection = styled.section`
  position: relative;
  padding: 30px;
  margin-bottom: 1.5rem;

  background-color: var(--black);
  color: var(--white);

  border-radius: 2rem;
  border: 1px solid var(--sgray);
`;

export const IntroTitle = styled.h1`
  margin: 0;

  font-family: var(--font-fira-code);
  font-size: 8rem;
  font-variation-settings: 'wght' 600;

  line-height: 1.1;
  word-spacing: -2.5rem;
  letter-spacing: 0.3rem;

  &:nth-of-type(2) {
    margin-top: -15px;
  }

  // 810px 이하일 때
  @media (max-width: 810px) {
    font-size: 6rem;
  }
`;

// 연락처 컨테이너
export const Contacts = styled.div`
  > span {
    display: inline-flex;
    /* height: 1.3rem; */
    width: fit-content;
    padding: 5px;
    margin: 5px;

    align-items: center;
    word-spacing: -0.2rem;

    border-radius: 2rem;
    border: 1px solid var(--sgray);

    > p {
      line-height: 1.4rem;
      letter-spacing: 0.1rem;
      margin: 0 5px;
    }

    > svg {
      margin-right: 1px;
      fill: var(--white);
      width: 1.3rem;
      height: 1.3rem;
    }
  }

  > span:first-of-type {
    background-color: var(--white);
    color: var(--black);

    font-variation-settings: 'wght' 500;
  }
`;

export const ProjectSimple = styled.ul`
  position: relative;

  margin-top: 100px;
  margin-bottom: 0;
  font-size: 1.1rem;
  line-height: 1.65;

  > li {
    font-size: 1rem;
    letter-spacing: 0.1rem;
    > span {
      display: inline-block;

      color: #ffec81;
      font-size: 0.8rem;
      font-variation-settings: 'wght' 350;
      letter-spacing: 0;
    }
  }

  > li:first-of-type {
    margin-top: 5px;
  }
`;
