import { CardPositionSlider, CardWrapper } from './card.css';

const Card = ({ title, contents = '', overview, basicImage, onClick, dark = false }) => {
  return (
    <CardPositionSlider>
      <CardWrapper onClick={onClick} style={{ backgroundImage: `url(${basicImage})` }} $dark={dark}>
        <h2>{title}</h2>
        <span>{contents}</span>
        <p>{overview}</p>
      </CardWrapper>
    </CardPositionSlider>
  );
};

export default Card;
