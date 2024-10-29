import { CardPositionSlider, CardWrapper } from './card.css';

const Card = ({
  title,
  contents = '',
  basicImage,
  onClick,
  dark = false,
  children,
}) => {
  return (
    <CardPositionSlider>
      <CardWrapper
        onClick={onClick}
        style={{ backgroundImage: `url(${basicImage})` }}
        $dark={dark}
      >
        <h2>{title}</h2>
        <span>{contents}</span>
        <p>{children}</p>
      </CardWrapper>
    </CardPositionSlider>
  );
};

export default Card;
