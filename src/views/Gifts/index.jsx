import styled from 'styled-components';
import Container from '../../components/common/Container';
import TopFlower from '../../assets/giftFlowers.png';
import BotFlower from '../../assets/giftsPetal.png';
import Plane from '../../assets/plane.png';
import Map from '../../assets/map.png';
import Drink from '../../assets/drink.png';

const Flower = styled.img`
  position: absolute;
  top: 0;
  width: 950px;
  height: auto
  left: calc(50% - 950px / 2);
  z-index: 1;
`;
const BottomFlower = styled.img`
  position: absolute;
  bottom: 0;
  left: calc(50% - 301.5px / 2);
  z-index: 1;
  height: auto;
  width: 301.5px;
`;
const Title = styled.h1`
  font-family: 'AWConqueror Std Didot';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
  text-align: center;
  color: #34374d;
  margin: 0;
  margin-top: 12%;
  background: white;
  z-index: 2;
`;
const Subtitle = styled.h2`
  font-style: normal;
  max-width: 640px;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #34374d;
`;
const Text = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: #34374d;
`;
const CardContainer = styled.div`
  display: flex;
  gap: 56px;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(52, 55, 77, 0.25);
  border-radius: 4px;
  width: 280px;
  height: 350px;
`;

const Button = styled.button`
  border: 1px solid #f55734;
  border-radius: 2px;
  background: none;
  cursor: pointer;
  color: #f55734;
  padding: 10px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: white;
    background: #f55734;
  }
`;
const IconImg = styled.img``;
const Gifts = () => {
  return (
    <Container id='gifts'>
      <Flower src={TopFlower} />
      <BottomFlower src={BotFlower} />
      <Title>Tu presencia es el mejor regalo</Title>
      <Subtitle>
        Compartir este día con nuestra familia y amigos es el mejor regalo que
        podemos pedir.
      </Subtitle>
      <Text>
        Si querés aportar tu granito de arena para nuestra luna de miel, tenemos
        algunas ideas:
      </Text>
      <CardContainer>
        <Card>
          <IconImg src={Plane} />
          <Subtitle>Viajar</Subtitle>
          <Button>Regalar</Button>
        </Card>
        <Card>
          <IconImg src={Map} />
          <Subtitle>Tours</Subtitle>
          <Button>Regalar</Button>
        </Card>
        <Card>
          <IconImg src={Drink} />
          <Subtitle>Salir a divertirnos</Subtitle>
          <Button>Regalar</Button>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default Gifts;
