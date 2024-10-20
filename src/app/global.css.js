import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: var(--font-open-sans), var(--font-noto-sans-kr);
    // 1rem을 16px로 설정
    font-size: 16px;
    // 가변 폰트 무게 400으로 설정
    font-variation-settings: 'wght' 430;
  }

  body {
    background-color: var(--black);
  }

  main {
    max-width: 1200px;
    padding: 100px 15px;
    margin: 0 auto;

    overflow-x: hidden;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  button {
    border: none;
    background: none;
    font-family: var(--font-open-sans), var(--font-noto-sans-kr);
  }

  :root {
    --black: rgb(18, 18, 18);
    --tblack: rgb(40, 40, 40);
    --white: rgb(245, 245, 245);
    --twhite: rgba(245, 245, 245, 0.5);
    --lgray: rgb(190, 190, 190);
    --gray: rgb(166, 166, 166);
    --sgray: rgb(61, 61, 61);
    /* 2d2d2d 값을 rgb로 변경 */
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  /* 텍스트 배경색 변경 */
  ::selection {
    background-color: var(--lgray);
    color: var(--black);
  }
`;

export const CategoryTitle = styled.h1`
  font-family: var(--font-fira-code);
  font-size: 3rem;
  color: var(--white);
  font-variation-settings: 'wght' 650;
  line-height: 1;
`;
