import styled from 'styled-components';

export const SkillsSection = styled.section`
  position: relative;
  color: var(--white);

  > h1 {
    margin-bottom: 40px;
  }
`;

export const SkillsPattern = styled.div`
  position: absolute;
  top: 50%;
  right: -100px;
  width: 800px;
  height: 800px;
  z-index: -1;
  transform: translateY(-45%);

  /* background-color: var(--white); */
  border-radius: 50%;
  border: 1px solid var(--sgray);

  @media (max-width: 1000px) {
    left: 253px;
  }
`;

export const Skill = styled.article`
  width: fit-content;
  margin: 15px 0;
  padding: 30px;
  border-radius: 2rem;

  background-color: var(--black);
  border: 1px solid var(--sgray);

  &:first-of-type {
    background-color: var(--white);
    color: var(--black);
  }
`;

export const SkillCategory = styled.h2`
  padding-bottom: 0.5rem;

  font-variation-settings: 'wght' 400;
  font-size: 1.3rem;
`;

export const SkillDescription = styled.div`
  > p {
    display: inline-block;
    padding-right: 10px;

    font-size: 1.1rem;
    letter-spacing: 1px;
    word-spacing: 0.4rem;
  }
`;
