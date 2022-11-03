import styled from 'styled-components';
import Container from '../../components/common/Container';
import RightSideFlowerBottom from '../../assets/RightSideFlowerBottom.png';
import CeremonyPictureFlower from '../../assets/ceremony-picture-flower.png';
import CeremonyPollenBotRight from '../../assets/ceremonyPollenBotRight.png';
import CeremonyPollenLeft from '../../assets/ceremonyPollenLeft.png';
import ImageOne from '../../assets/picture1.png';
import ImageTwo from '../../assets/placeholder2.png';

const RightSideImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: auto;
  width: 327.48px;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
`;
const LeftImg = styled.img`
  width: 540px;
  position: absolute;
  z-index: 2;
  top: 35%;
  left: 17%;
`;
const RightImg = styled.img`
  width: 540px;
  align-self: flex-end;
  z-index: 2;
`;
const FlowerImg = styled.img`
  position: absolute;
  bottom: -14%;
  left: -10%;
  z-index: 1;
`;
const PollenBotRightImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 1;
`;
const PollenLeft = styled.img`
  position: absolute;
  left: 0;
  top: 28%;
  z-index: 1;
`;
const Header = styled.h1`
  font-size: 74px;
  font-weight: 700;
  line-height: 101px;
  margin: 0;
  position: relative;
  color: #34374d;
  margin-bottom: 20px;
  font-family: 'AWConqueror Std Didot';
  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 90%;
    border-bottom: 2px solid #34374d;
  }
  &:after {
    content: '';
    position: absolute;
    left: -2px;
    bottom: -4px;
    height 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #34374D;
  }
`;
const Paragraph = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
`;
const Table = styled.table`
  text-align: left;
  border-spacing: 0 15px;
  margin-left: 100px;
  margin-top: 15px;
  & th {
    font-weight: normal;
    font-size: 16px;
    font-weight: 300;
  }
  & td {
    font-size: 24px;
    font-weight: 400;
    font-style: normal;
    padding-left: 25px;
    font-family: 'AWConqueror Std Didot';
  }
`;
const Button = styled.a`
  border: 1px solid #292d46;
  background: none;
  color: #292d46;
  font-size: 16px;
  padding: 10px;
  font-family: 'Proxima Nova';
  cursor: pointer;
  text-decoration: none;
  z-index: 2;
  &:hover {
    color: white;
    background: #292d46;
  }
`;
const Ceremony = () => {
  return (
    <Container id='ceremony'>
      <RightSideImg src={RightSideFlowerBottom} />
      <PollenBotRightImg src={CeremonyPollenBotRight} />
      <PollenLeft src={CeremonyPollenLeft} />
      <Wrapper style={{ margin: '0 12%' }}>
        <Wrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '20%',
            }}
          >
            <Header>Ceremonia</Header>
            <Paragraph style={{ padding: '0 8%' }}>
              Nos casamos y queremos compartir con ustedes este día tan
              especial. Nos encontramos el 17 de diciembre a las 20 hs para dar
              el “¡sí, quiero!” en la Parroquia San Isidro Labrador.
            </Paragraph>
          </div>
          <LeftImg src={ImageOne} />
          <FlowerImg src={CeremonyPictureFlower} />
        </Wrapper>
        <Wrapper>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <RightImg src={ImageTwo} />
            <Table>
              <tr>
                <th>DÍA</th>
                <td>
                  <strong>17 de diciembre</strong>
                </td>
              </tr>

              <tr>
                <th>HORA</th>
                <td>20:00</td>
              </tr>

              <tr>
                <th>LUGAR</th>
                <td>Parroquia San Isidro Labrador</td>
              </tr>

              <tr>
                <th>DIRECCIÓN</th>
                <td>Av. San Isidro Labrador 4630</td>
              </tr>
            </Table>
            <div style={{ display: 'flex', marginLeft: '100px' }}>
              <Button href='/events/ceremonia.ics' target='_blank'>
                Agendar
              </Button>
              <Button style={{ marginLeft: '25px' }}>Ver en mapa</Button>
            </div>
          </div>
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default Ceremony;
