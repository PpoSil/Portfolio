import styled from 'styled-components';

export const TechsSection = styled.section`
  position: relative;
  color: var(--white);

  > h1 {
    margin-bottom: 40px;
  }
`;

export const TechsPattern = styled.div`
  position: absolute;
  top: -30px;
  right: -100px;
  width: 800px;
  height: 800px;
  z-index: -1;

  /* background-color: var(--white); */
  border-radius: 50%;
  border: 1px solid var(--sgray);

  @media (max-width: 1000px) {
    left: 253px;
  }
`;

export const TechArticle = styled.article`
  position: relative;

  width: fit-content;
  margin: 15px 0;
  padding: 30px;
  border-radius: 2rem;

  background-color: var(--black);
  border: 1px solid var(--sgray);

  &:first-of-type {
    background-color: var(--white);
    color: var(--black);
  }

  transition: all 0.3s ease;
`;

export const TechDetails = styled.details`
  font-size: 1.1rem;
  letter-spacing: 1px;
  word-spacing: 0.4rem;

  > summary {
    list-style: none;
    cursor: pointer;

    > h2 {
      width: fit-content;
      padding-bottom: 1rem;

      display: flex;
      align-items: center;

      font-size: 1.5rem;
      font-variation-settings: 'wght' 400;
      line-height: 1;

      > span {
        margin-left: 0.5rem;

        width: 20px;
        height: 20px;

        overflow: hidden;

        > svg {
          display: block;
          width: 20px;
          height: 20px;

          transition:
            transform 0.4s ease,
            opacity 0.15s ease;
        }

        > svg.icon-fold {
          transform: translateY(-20px) rotate(90deg);
          opacity: 0;
        }

        > svg.icon-open {
          transform: translateY(-20px) rotate(-90deg);
          opacity: 1;
        }
      }
    }
  }

  &[open] {
    > summary > h2 > span {
      svg.icon-fold {
        transform: translateY(0) rotate(90deg);
        opacity: 1;
      }

      svg.icon-open {
        transform: translateY(0) rotate(-90deg);
        opacity: 0;
      }
    }
  }

  > hr {
    margin: 8px 0 6px 0;
    border: none;
    border-bottom: 1px solid var(--lgray);
  }

  > div {
    max-width: 657.4px;
  }
`;

export const TechCategory = styled.h2`
  padding-bottom: 1rem;

  font-variation-settings: 'wght' 400;
  font-size: 1.5rem;
`;

export const TechDescription = styled.h3`
  display: inline-block;

  font-size: 1.1rem;
  letter-spacing: 1px;
  word-spacing: 0.4rem;
`;

export const TechDescriptionDetail = styled.span`
  display: block;
  max-width: 657.4px;
  margin-top: 10px;

  font-size: 1.1rem;
  letter-spacing: 1px;
  word-spacing: 0.4rem;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;

  cursor: pointer;
  width: 10px;
  height: 10px;
  border-top: 2px solid black;
  border-left: 2px solid black;

  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(225deg)')};
  transition: transform 0.3s ease;
`;
