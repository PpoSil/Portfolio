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
    margin: 0;
    padding: 0;
  }

  main {
    max-width: 1170px;
    padding: 100px 15px;
    margin: 0 auto;

    overflow-x: hidden;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  button {
    border: none;
    background: none;
    font-family: var(--font-open-sans), var(--font-noto-sans-kr);
  }

  :root {
    --black: #121212;
    --white: #f5f5f5;
    --twhite: #f5f5f580;
    --gray: #a6a6a6;
    --sgray: #3d3d3d;
  }
`;

export const CategoryTitle = styled.h1`
  margin: 0;

  font-family: var(--font-fira-code);
  font-size: 3rem;
  color: var(--white);
  font-variation-settings: 'wght' 650;
  line-height: 1;
`;
