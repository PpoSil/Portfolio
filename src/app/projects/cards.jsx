// import { useState } from 'react';
import { Card, ContentsContainer } from './cards.css';

const Cards = ({ title, contents = '', overview, basicImage, onClick, dark = false }) => {
  // const [isHover, setIsHover] = useState(false);
  return (
    <Card
      onClick={onClick}
      style={{ backgroundImage: `url(${basicImage})` }}
      // onMouseEnter={() => setIsHover(true)}
      // onMouseLeave={() => setIsHover(false)}
      // isHover={isHover}
    >
      <ContentsContainer $dark={dark}>
        <h2>{title}</h2>
        <span>{contents}</span>
        {/* {contents.map((content, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={index}>{content}</span>
        ))} */}
        <p>{overview}</p>
      </ContentsContainer>
    </Card>
  );
};

export default Cards;
