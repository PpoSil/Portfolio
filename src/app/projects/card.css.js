import styled from 'styled-components';

export const CardPositionSlider = styled.div`
  display: inline-block;

  height: 680px;
  width: 370px;

  margin-right: 23px;

  transition: transform 0.8s ease;
`;

export const CardWrapper = styled.div`
  height: 100%;
  padding: 30px 20px;

  border-radius: 2rem;
  background-size: cover;
  overflow: hidden;

  transition: transform 0.4s ease;

  backface-visibility: hidden;
  will-change: transform;

  box-shadow:
    rgba(50, 50, 93, 0.25) 0px -5px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px -4px 7px -3px;

  &:hover {
    transform: scale(1.03) translateZ(0) perspective(1px);
  }

  > h2 {
    color: ${({ $dark }) => ($dark ? 'var(--black)' : 'var(--white)')};

    line-height: 1;
    font-family: var(--font-fira-code);
    font-size: 2.5rem;
    font-variation-settings: 'wght' 700;
  }

  > span {
    display: inline-block;
    margin-bottom: 1.5rem;

    color: ${({ $dark }) => ($dark ? 'var(--black)' : 'var(--white)')};
    font-size: 0.9rem;
    font-variation-settings: 'wght' 500;
    letter-spacing: 1px;
    word-spacing: 5px;
  }

  > p {
    color: ${({ $dark }) => ($dark ? 'var(--black)' : 'var(--white)')};
    font-variation-settings: 'wght' 500;
    letter-spacing: 1px;
    white-space: pre-line;
  }

  cursor: pointer;
`;

export const ContentsContainer = styled.div``;
