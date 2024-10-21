import styled from 'styled-components';

export const IntroSection = styled.section`
  position: relative;
  padding-bottom: 150px;

  background-color: var(--black);
  color: var(--white);

  border-radius: 2rem;
`;

export const IntroPattern = styled.div`
  position: absolute;
  bottom: -750px;
  right: -100px;
  width: 650px;
  height: 450px;
  transform: translateY(-45%);
  overflow: hidden;

  @media (max-width: 1060px) {
    left: 462px;
  }

  div {
    position: absolute;
    bottom: 1px;
    right: 0;
    width: 650px;
    height: 650px;
    border-radius: 50%;
    border: 1px solid var(--sgray);
  }
`;

export const IntroTitle = styled.h1`
  font-size: 8rem;
  font-family: var(--font-fira-code);
  font-variation-settings: 'wght' 600;

  line-height: 1.1;
  word-spacing: -2.5rem;
  letter-spacing: 0.3rem;

  @media (max-width: 750px) {
    font-size: 6rem;
  }
`;

// 연락처 컨테이너
export const Contacts = styled.div`
  > a,
  span {
    display: inline-flex;
    width: fit-content;
    padding: 5px;
    margin: 5px;

    color: var(--white);
    align-items: center;
    word-spacing: -0.2rem;
    text-decoration: none;

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

  padding: 0 0.5rem;
  margin-top: 100px;
  font-size: 1.1rem;

  > li {
    letter-spacing: 1px;
    margin-bottom: 10px;
    line-height: 16px;

    > div {
      display: inline-block;
      height: 12px;
      width: 5px;
      margin-right: 5px;
      border-radius: 2px;

      background-color: var(--white);
    }

    > span {
      display: inline-block;

      padding-left: 10px;

      color: #ffec81;
      font-size: 0.8rem;
      font-variation-settings: 'wght' 350;
      letter-spacing: 0;
    }

    &:first-of-type {
      margin-top: 10px;
    }
  }

  > li:
`;
