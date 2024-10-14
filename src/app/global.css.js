import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: var(--font-fira-code), var(--font-noto-sans-kr);
    font-size: 16px; // 1rem을 16px로 설정
    // 가변 폰트 무게 450으로 설정
    font-variation-settings: 'wght' 450;
    scrollbar-gutter: stable;
  }

  body {
    background-color: var(--black);
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  :root {
    --black: #121212;
    --white: #f5f5f5;
    --twhite: #f5f5f580;
    --gray: #a6a6a6;
    --sgray: #3d3d3d;
  }
`;

export const Main = styled.main`
  max-width: 1170px;
  padding: 100px 15px;
  margin: 0 auto;

  overflow-x: hidden;
`;
