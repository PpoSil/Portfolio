import styled from 'styled-components';

export const SkillsSection = styled.section`
  color: var(--white);

  > h1 {
    margin-bottom: 40px;
  }
`;

export const Skill = styled.article`
  width: fit-content;
  margin: 23px 0;
  padding: 30px;
  border-radius: 2rem;

  border: 1px solid var(--sgray);

  &:first-of-type {
    background-color: var(--white);
    color: var(--black);
  }
`;

export const SkillCategory = styled.h2`
  margin: 0;
  padding-bottom: 20px;

  font-variation-settings: 'wght' 400;
`;

export const SkillDescription = styled.div`
  > p {
    display: inline-block;

    margin: 0;
    padding-right: 10px;

    font-size: 1.2rem;
  }

  > span {
    display: inline-block;
    padding: 0 10px;

    font-size: 1.2rem;
    letter-spacing: 1px;
    word-spacing: 0.4rem;
  }
`;
