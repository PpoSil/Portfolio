import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  height: 400px;

  background-color: var(--white);

  cursor: pointer;
  overflow: hidden;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;

  height: 100%;

  background-color: var(--gray);
`;

export const ImageContainer = styled.div`
  display: block;
  position: relative;

  width: 100%;
  height: 200px;

  overflow: hidden;

  h2 {
    position: absolute;
    z-index: 1;

    right: 0;
    bottom: 0;

    margin: 0;

    font-size: 4rem;
    font-variation-settings: 'wght' 700;
    color: var(--white);
  }
`;

export const ContentsContainer = styled.div`
  position: relative;
  flex: 1;

  span {
    line-height: 1.4rem;
    padding: 5px 10px 4px 10px;

    margin-top: 50px;

    letter-spacing: 1px;
    border-radius: 2rem;
    border: 1px solid var(--sgray);
  }
`;

export const Circle = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  text-align: center;
  align-items: center;

  background-color: aquamarine;
  transition:
    transform 0.3s,
    background-color 0.3s;

  ${({ $isHovered }) =>
    $isHovered &&
    css`
      transform: scale(5);
      background-color: coral;
      opacity: 0.8;
    `}
`;
