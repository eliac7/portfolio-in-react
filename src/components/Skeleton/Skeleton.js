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
  min-height: 21.875rem;
  margin: 1.25rem;
  flex-wrap: wrap;
  opacity: 0.7;
  flex-direction: ${(props) => props.flexDirection};

  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
const ContainerTab = styled.div`
  display: flex;
  min-height: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  opacity: 0.7;
  max-width: 300px;
  margin: 1rem auto;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
  justify-content: space-between;

  @media (max-width: 991px) {
    margin-top: 1.25rem;
    padding: unset;
    align-items: center;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 21.875rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
const Pill = styled.div`
  margin: 0 1rem;
  flex: 1;
  height: 2.1875rem;
  border-radius: 3.125rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
const Title = styled.div`
  display: flex;
  width: 50%;
  min-height: 1.875rem;
  border-radius: 2.5rem;
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
  width: 3.75rem;
  height: 1.875rem;
  margin: 0.625rem 0.625rem 0.625rem 0;
  border-radius: 2.5rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
const Desc = styled.div`
  min-height: 5rem;
  width: 100%;
  border-radius: 2.5rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  align-self: ${(props) =>
    props.custom === "row-reverse" ? "flex-end" : "flex-start"};

  @media (max-width: 991px) {
    align-self: center;
    margin-top: 1.25rem;
  }
`;

const Button = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  animation: ${skeletonLoading} 1s linear infinite alternate;
`;

export const SkeletonItem = ({ type }) => {
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
};
export const SkeletonTab = ({ type }) => {
  return (
    <>
      <ContainerTab flexDirection={type}>
        <Pill />
        <Pill />
        <Pill />
      </ContainerTab>
    </>
  );
};
