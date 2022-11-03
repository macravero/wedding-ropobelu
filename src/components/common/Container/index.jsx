import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  margin: 0;
  position: relative;
  background: transparent;
`;

const Container = ({ id, children }) => {
  return <StyledContainer id={id}>{children}</StyledContainer>;
};

export default Container;
