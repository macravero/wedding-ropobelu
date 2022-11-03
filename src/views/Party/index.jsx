import styled from 'styled-components';
import Container from '../../components/common/Container';
import RightSideFlowerBottom from '../../assets/RightSideFlowerBottom.png';
import PetalBottom from '../../assets/partyPetal.png';
import PartyFlowers from '../../assets/partyFlowers.png';
import PollenTopLeft from '../../assets/partyPollenTopLeft.png';
import PollenTopRight from '../../assets/partyPollenTopRight.png';
import PollenBottom from '../../assets/partyPollenBottom.png';
import ImageOne from '../../assets/picture2.png';
import ImageTwo from '../../assets/placeholder4.png';

const RightSideImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: calc(100vh - 42%);
  width: auto;
  z-index: 1;
`;
const PetalImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 950px;
  height: auto;
  left: calc(50% - 950px / 2);
  z-index: 1;
`;
const FlowersImg = styled.img`
  height: auto;
  width: 396px;
  position: absolute;
  top: 6%;
  left: 8%;
  z-index: 1;
`;
const PollenTopLeftImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;
const PollenTopRightImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
`;
const PollenBottomImg = styled.img`
  position: absolute;
  bottom: 5%;
  right: 25%;
  z-index: 1;
`;
const Wrapper = styled.div`
  display: flex;
  position: relative;
`;
const LeftImg = styled.img`
  width: 540px;
  position: absolute;
  top: 40%;
  left: 0;
  z-index: 1;
`;
const RightImg = styled.img`
  width: 540px;
  align-self: flex-end;
  z-index: 1;
`;
const Header = styled.h1`
  text-align: left;
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
    width: 95%;
    border-bottom: 2px solid #34374d;
  }
  &:after {
    content: '';
    position: absolute;
    right: 3%;
    bottom: -4px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #34374d;
  }
`;
const Table = styled.table`
  text-align: left;
  border-spacing: 0 15px;
  margin-top: 15px;
  & th {
    font-weight: normal;
    font-size: 16px;
    font-weight: 300;
  }
  & td {
    font-size: 24px;
    font-weight: 400;
  }
`;
const Paragraph = styled.p`
  font-family: 'Proxima Nova';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  padding-right: 30px;
`;
const Button = styled.button`
  border: 1px solid #292d46;
  background: none;
  color: #292d46;
  font-size: 16px;
  padding: 10px;
  font-family: 'Proxima Nova';
  cursor: pointer;
  &:hover {
    color: white;
    background: #292d46;
  }
`;
const Party = () => {
  return (
    <Container id='party'>
      <PetalImg src={PetalBottom} />
      <PollenTopLeftImg src={PollenTopLeft} />
      <PollenTopRightImg src={PollenTopRight} />
      <PollenBottomImg src={PollenBottom} />
      <FlowersImg src={PartyFlowers} />
      <Wrapper style={{ margin: '0 12%' }}>
        <Wrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '20%',
            }}
          >
            <RightImg src={ImageOne} />
            <Table>
              <tr>
                <th style={{ width: '20%' }}>HORA</th>
                <td>21:30</td>
              </tr>

              <tr>
                <th>LUGAR</th>
                <td>Círculo Olivos Eventos</td>
              </tr>

              <tr>
                <th>DIRECCIÓN</th>
                <td>San Lorenzo 60, La Lucila.</td>
              </tr>
            </Table>
            <div style={{ display: 'flex' }}>
              <Button>Agendar</Button>
              <Button style={{ marginLeft: '25px' }}>Ver en mapa</Button>
            </div>
          </div>
        </Wrapper>
        <Wrapper>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '25%',
            }}
          >
            <Header>La fiesta</Header>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </Paragraph>
          </div>
          <LeftImg src={ImageTwo} />
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

export default Party;
