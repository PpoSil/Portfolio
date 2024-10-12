import styled from 'styled-components';

export const Card = styled.div`
  display: inline-block;
  height: 680px;
  width: calc((1200px - 3.8rem) / 3);

  margin-right: 1.5rem;

  border-radius: 2rem;
  background-size: cover;
  overflow: hidden;

  transition: transform 0.4s ease;
  backface-visibility: hidden;
  will-change: transform;

  &:hover {
    transform: scale(1.03) translateZ(0) perspective(1px);
  }

  cursor: pointer;
`;

export const ContentsContainer = styled.div`
  margin: 0 20px;
  position: relative;
  flex: 1;
  overflow: hidden;

  h2 {
    margin: 0;
    margin-top: 25px;

    color: ${({ dark }) => (dark ? 'var(--black)' : 'var(--white)')};

    line-height: 1.1;
    font-size: 2.5rem;
    font-variation-settings: 'wght' 700;
  }

  span {
    font-size: 0.9rem;
    display: inline-block;
    line-height: 1.4rem;
    /* padding: 2px 7px 0px 7px; */
    margin-bottom: 6px;

    color: ${({ dark }) => (dark ? 'var(--black)' : 'var(--white)')};
    letter-spacing: 1px;
    /* border-radius: 2rem;
    border: 1px solid var(--twhite); */
  }

  p {
    color: ${({ dark }) => (dark ? 'var(--black)' : 'var(--white)')};
    white-space: pre-line;
  }
`;
