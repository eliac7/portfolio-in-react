import styled, { keyframes } from "styled-components";

const skeletonLoading = keyframes`
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
`;

const Container = styled.div`
  display: flex;
  min-height: 350px;
  margin: 20px;
  flex-wrap: wrap;
  opacity: 0.7;
  flex-direction: ${(props) => props.flexDirection};
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  justify-content: space-between;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
const Title = styled.div`
  display: flex;
  width: 50%;
  min-height: 30px;
  border-radius: 40px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) =>
    props.custom === "row-reverse" ? "flex-end" : "flex-start"};
`;
const ContainerSubTitle = styled.div`
  display: flex;
  align-items: center;
`;
const SubTitle = styled.div`
  width: 60px;
  height: 30px;
  margin: 10px 10px 10px 0;
  border-radius: 40px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
const Desc = styled.div`
  min-height: 80px;
  border-radius: 40px;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: ${(props) =>
    props.custom === "row-reverse" ? "flex-end" : "flex-start"};
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export default function Skeleton({ type }) {
  return (
    <>
      <Container flexDirection={type}>
        <Left>
          <Image />
        </Left>
        <Right>
          <ContainerTitle custom={type}>
            <Title />
            <ContainerSubTitle>
              <SubTitle />
              <SubTitle />
              <SubTitle />
            </ContainerSubTitle>
          </ContainerTitle>

          <Desc />
          <ButtonContainer custom={type}>
            <Button />
            <Button />
          </ButtonContainer>
        </Right>
      </Container>
    </>
  );
}
