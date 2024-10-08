import React, { useState } from 'react';
import Image from 'next/image';
import { Card, CardContainer, Circle, ContentsContainer, ImageContainer } from './cards.css';

const Cards = ({ title, contents = [], overview, imageHover, basicImage, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CardContainer onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <Card>
        <ImageContainer>
          <Image
            src={isHovered ? imageHover : basicImage} // 컬러 이미지와 회색 이미지 경로
            fill
            style={{ objectFit: 'cover' }}
            alt="sol"
          />
        </ImageContainer>
        <ContentsContainer>
          <h2>{title}</h2>
          {contents.map((content, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={index}>{content}</span>
          ))}
          <p>{overview}</p>
          <Circle $isHovered={isHovered} />
        </ContentsContainer>
      </Card>
    </CardContainer>
  );
};

export default Cards;
