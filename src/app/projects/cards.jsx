import { CardPositionSlider, Card } from './cards.css';

const Cards = ({ title, contents = '', overview, basicImage, onClick, dark = false }) => {
  return (
    <CardPositionSlider>
      <Card onClick={onClick} style={{ backgroundImage: `url(${basicImage})` }} $dark={dark}>
        <h2>{title}</h2>
        <span>{contents}</span>
        <p>{overview}</p>
      </Card>
    </CardPositionSlider>
  );
};

export default Cards;
