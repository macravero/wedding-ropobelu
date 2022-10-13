import styled from 'styled-components';
import Container from '../common/Container';
import RightSideFlowerBottom from '../../assets/RightSideFlowerBottom.png';

const RightSideImg = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  height: calc(100vh - 42%);
  width: auto;
`;
const Ceremony = () => {
  return (
    <Container id='ceremony'>
      <RightSideImg src={RightSideFlowerBottom} />
    </Container>
  );
};

export default Ceremony;
