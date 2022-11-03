import styled from 'styled-components';
import Logo from '../../assets/Logo.png';
import Scroll from '../../assets/Scroll.png';
import CornerTopFlower from '../../assets/CornerTopFlower.png';
import RightSideFlowerTop from '../../assets/RightSideFlowerTop.png';
import HomeTopLeaf from '../../assets/homeTopLeaf.png';
import HomeBottomLeaf from '../../assets/homeBottomLeaf.png';
import Container from '../../components/common/Container';

const Sh1 = styled.h2`
  font-size: 2rem;
  margin: 0;
  position: absolute;
  top: 56px;
  font-family: 'AWConqueror Std Didot';
`;
const ScrollImg = styled.img`
  position: absolute;
  bottom: 26px;
`;
// "background" images
const TopCornerImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: auto;
  width: 361px;
  z-index: 1;
`;
const RightSideImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
  height: auto;
  width: 327.48px;
  z-index: 1;
`;
const TopLeaf = styled.img`
  position: absolute;
  height: auto;
  width: 62px;
  top: 40%;
  left: 12%;
  z-index: 1;
`;
const BotLeaf = styled.img`
  position: absolute;
  height: auto;
  width: 63px;
  bottom: 7%;
  left: 21%;
  z-index: 1;
`;

const Home = () => {
  return (
    <Container>
      <TopCornerImg src={CornerTopFlower} />
      <RightSideImg src={RightSideFlowerTop} />
      <TopLeaf src={HomeTopLeaf} />
      <BotLeaf src={HomeBottomLeaf} />
      <Sh1>17.12.22</Sh1>
      <img
        src={Logo}
        style={{ maxWidth: '380px', height: 'auto' }}
        alt='Logo ropo y belu casamiento'
      />
      <ScrollImg src={Scroll} />
    </Container>
  );
};

export default Home;
