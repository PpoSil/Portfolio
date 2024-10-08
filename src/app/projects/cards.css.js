import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  height: fit-content;

  background-color: var(--white);
  border-radius: 2rem;
  overflow: hidden;

  cursor: pointer;
`;

export const Card = styled.div`
  position: relative;
  height: 100%;

  background-color: var(--gray);
`;

export const ImageContainer = styled.div`
  display: block;
  position: absolute;

  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const ContentsContainer = styled.div`
  margin-left: 10px;
  position: relative;
  flex: 1;
  overflow: hidden;

  h2 {
    margin: 0;
    margin-left: 10px;
    margin-top: 20px;

    line-height: 1.1;
    font-size: 4rem;
    font-variation-settings: 'wght' 700;
    color: var(--white);
  }

  span {
    font-size: 0.9rem;
    display: inline-block;
    line-height: 1.4rem;
    padding: 2px 7px 0px 7px;
    margin-left: 8px;
    margin-bottom: 6px;

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
