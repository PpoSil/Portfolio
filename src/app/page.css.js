import styled from 'styled-components';

export const IntroSection = styled.section`
  position: relative;
  padding: 30px;

  background-color: var(--black);
  color: var(--white);

  border-radius: 2rem;
  border: 1px solid var(--gray);

  h1 {
    margin: 0;

    font-size: 8rem;
    font-variation-settings: 'wght' 600;

    line-height: 1.1;
    word-spacing: -2.5rem;
    letter-spacing: 0.3rem;
  }

  h1:nth-of-type(2) {
    margin-top: -15px;
  }

  ul {
    position: relative;

    margin-top: 200px;
    margin-bottom: 0;
    font-size: 1.1rem;
    line-height: 1.65;

    li {
      font-size: 1rem;

      span {
        display: inline-block;

        color: #ffec81;
        font-size: 0.8rem;
        font-variation-settings: 'wght' 350;
      }
    }

    li:first-of-type {
      margin-top: 5px;
    }
  }
`;

export const ContactWrapper = styled.div`
  span {
    display: inline-block;
    /* height: 1.3rem; */
    line-height: 1.4rem;
    padding: 5px 10px 4px 10px;

    margin: 5px;

    width: fit-content;
    word-spacing: -0.2rem;

    letter-spacing: 1px;
    border-radius: 2rem;
    border: 1px solid var(--sgray);
  }

  span:first-of-type {
    background-color: var(--white);
    color: var(--black);

    font-variation-settings: 'wght' 500;
  }
`;

export const ImageGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;

  height: 300px;
  margin-top: 25px;
  gap: 50px;
`;

// 이미지 컨테이너
export const ImageContainer = styled.div`
  display: block;
  position: relative;

  width: 400px;
  height: 300px;

  overflow: hidden;
  border-radius: 1rem;

  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;
