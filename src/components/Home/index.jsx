import styled from 'styled-components';
import { ReactComponent as ScrollArrow } from '../../assets/scroll-arrow.svg';
import Logo from '../../assets/Logo.png';
import Scroll from '../../assets/Scroll.png';
import CornerTopFlower from '../../assets/CornerTopFlower.png';
import RightSideFlowerTop from '../../assets/RightSideFlowerTop.png';
import Container from '../common/Container';
import Navbar from '../Navbar';

const Sh1 = styled.h2`
  font-size: 2rem;
  margin: 0;
  position: absolute;
  top: 56px;
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
  max-width: 18.5%;
`;
const RightSideImg = styled.img`
  position: absolute;
  right: 0;
  top: 10%;
  height: calc(100vh - 10%);
  width: auto;
`;
const Home = () => {
  return (
    <Container>
      <TopCornerImg src={CornerTopFlower} />
      <RightSideImg src={RightSideFlowerTop} />
      <Sh1>17.12.22</Sh1>
      <img src={Logo} style={{ maxWidth: '380px', height: 'auto' }} />
      <ScrollImg src={Scroll} />
    </Container>
  );
};

export default Home;
