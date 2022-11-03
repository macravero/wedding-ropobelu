import styled from 'styled-components';
import Container from '../../components/common/Container';
import TopFlower from '../../assets/rsvpPetal.png';
import BotFlower from '../../assets/rsvpBottom.png';

const Flower = styled.img`
  position: absolute;
  top: 0;
  width: 302px;
  height: auto;
  left: calc(50% - 302px / 2);
  z-index: 1;
`;
const BottomFlower = styled.img`
  position: absolute;
  bottom: 0;
  left: calc(50% - 1023px / 2);
  z-index: 1;
  height: auto;
  width: 1023px;
`;
const Title = styled.h1`
  font-family: 'AWConqueror Std Didot';
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 66px;
  text-align: center;
  color: #34374d;
  margin: 20px 0;
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
  margin: 0;
  min-width: 800px;
`;
const Sh1 = styled.h2`
  font-size: 2rem;
  margin: 32px 0;
  font-family: 'AWConqueror Std Didot';
`;
const Button = styled.button`
  padding: 10px 12px;
  width: 169px;
  height: 36px;
  border: 1px solid #34374d;
  border-radius: 2px;
  background: white;
  font-family: 'proxima nova';
  font-size: 16px;
  font-weight: 500;
  color: #34374d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #34374d;
    color: white;
  }
`;

const Rsvp = () => {
  return (
    <Container id='rsvp'>
      <Flower src={TopFlower} />
      <BottomFlower src={BotFlower} />
      <Title>RSVP</Title>
      <Subtitle>
        Esperamos tu confirmación antes del 1 de diciembre.
        <br /> Contanos si venís acompañado o si tenés alguna preferencia
        especial de menú.
      </Subtitle>

      <Sh1>17.12.22</Sh1>
      <Button>Confirmar asistencia</Button>
    </Container>
  );
};

export default Rsvp;
