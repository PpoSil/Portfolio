import styled from 'styled-components';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 25%;
  left: 50%;
  z-index: 101;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;
  opacity: 0;

  width: fit-content;
  padding: 1rem 1.2rem;
  background-color: var(--white);
  border-radius: 2rem;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 0px 12px 3px,
    rgba(0, 0, 0, 0.3) 0px 0px 7px 1px;

  line-height: 1;
  font-variation-settings: 'wght' 400;
  animation: modal 2s ease-in-out;

  @keyframes modal {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%);
      font-variation-settings: 'wght' 400;
    }
    20% {
      opacity: 1;
      transform: translate(-50%, -25%);
      font-variation-settings: 'wght' 500;
    }
    80% {
      opacity: 1;
      transform: translate(-50%, -25%);
      font-variation-settings: 'wght' 500;
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -25%);
      font-variation-settings: 'wght' 500;
    }
  }
`;

export const ModalIcon = styled.div`
  position: relative;

  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: inline-block;
  margin-left: 1rem;

  &:before,
  &:after {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;

    content: '';
    background-color: var(--black);
    transform: scale(0);
    animation: loader 2s infinite ease-in-out;
  }
  /* &:after {
    animation-delay: 1s;
  } */

  @keyframes loader {
    0% {
      transform: translateX(-66%) scale(0);
    }
    40% {
      transform: translateX(0%) scale(0.8);
    }
    50% {
      transform: translateX(0%) scale(1.05);
    }
    55% {
      transform: translateX(0%) scale(1);
    }
    100% {
      transform: translateX(0%) scale(1);
    }
  }
`;
